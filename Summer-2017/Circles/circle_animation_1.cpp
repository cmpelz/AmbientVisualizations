/*
 *
 * An animation designed to visualize the power and energy usage of appliances in the
 * kitchen of the Zilkha Center at Williams College.  There is a colored circle for each appliance.
 * The opacity of each circle idicates the amount of power being used while the size of each circle
 * indicates the amount of energy the appliance has used since the visualization has started.
 *
 * inspired by the work of Sarah Abramson and Sense.com
 *
 * (c) Jack Ferguson 2017 (jef1@williams.edu)
 *
 */
#include <iostream>
#include "circle_animation.h"
#include "readers/sine_reader.cpp"
#include "readers/wemo_reader.cpp"
#include "readers/egauge_reader.cpp"
#include "readers/zwave_reader.cpp"
#include "stdio.h"
#include "math.h"
#include <algorithm>

using namespace std;

int data_counter = 0; // helps control how often data is pulled
float time_passed = 0; // time since the visualization started in seconds

float RENDER_DELAY = 10000; // how many microseconds between each call to the render function
float MAX_OPACITY = 1.0; // greatest possible opacity
float MIN_OPACITY = 0.02; // barely visable
float MIN_CIRCLE_RADIUS = 30.0; // the size of circles when they are off
float MAX_CIRCLE_RADIUS = 100.0; // the size of circles when they are at their max power
float CIRCLE_PULSE = 10.0; // the size difference when a circle at max size pulses
float GROWTH_RATE = 1.0; // the value that is added to circles while they are growing
float ANCHOR = 100.0; // determines how fast circles should grow from the radius -> radius_goal
float GROWTH_ANCHOR = .01; // determines how fast circles grow as energy increases for VERSION 1

// control the dimensions of the visualization
int VIEW_DIM = 220;
int SCREEN_WIDTH = 1200;
int SCREEN_HEIGHT = 700;
double ASPECT = SCREEN_WIDTH / (double) SCREEN_HEIGHT;

// circle borders - change aspect so these are also view borders
int RIGHT_BORDER = VIEW_DIM*ASPECT;
int LEFT_BORDER = VIEW_DIM*-1*ASPECT;
int TOP_BORDER = VIEW_DIM;
int BOTTOM_BORDER = VIEW_DIM*-1;

time_t start;

const double PI = 3.141592653589793238463;
const size_t NUM_COLORS = 15;
//http://tools.medialab.sciences-po.fr/iwanthue/index.php
// will use different colors these are fine for now
Color palette[NUM_COLORS] =
  {{255/255.0,217/255.0,123/255.0},
   {229/255.0,80/255.0,41/255.0},
   {166/255.0,0/255.0,39/255.0},
   {102/255.0,0/255.0,51/255.0},
   {25/255.0,28/255.0,38/255.0},
   {203/255.0,133/255.0,187/255.0},
   {91/255.0,79/255.0,127/255.0},
   {121/255.0,86/255.0,56/255.0},
   {90/255.0,170/255.0,131/255.0},
   {107/255.0,155/255.0,188/255.0},
   {200/255.0,79/255.0,202/255.0},
   {164/255.0,153/255.0,55/255.0},
   {220/255.0,136/255.0,45/255.0},
   {213/255.0,203/255.0,194/255.0},
   {193/255.0,224/255.0,157/255.0}};

vector<string> ignores; // the appliances which are excluded in vis, read from the configuration file
vector<appliance*> appliances;
vector<e_device*> devices;

/*
 * methods which control Circle objects
 */
Circle::Circle(Position pos, Color color, float radius){
  Circle::radius = radius;
  Circle::pos = pos;
  Circle::mov = {rand()/(float)RAND_MAX,rand()/(float)RAND_MAX};
  Circle::color = color;
  Circle::opacity = MIN_OPACITY;
 }
void Circle::move(){
  Circle::pos.x += Circle::mov.dx;
  Circle::pos.y += Circle::mov.dy;
}
void Circle::maintain_speed(){
  float magnitude = sqrt(pow(Circle::mov.dx,2)+pow(Circle::mov.dy,2))*8;
  Circle::mov.dx = Circle::mov.dx/magnitude;
  Circle::mov.dy = Circle::mov.dy/magnitude;
}
void Circle::resize(){
  float difference = Circle::radius_goal - Circle::radius;
  Circle::radius += difference/ANCHOR;
}
void Circle::recolor(){
  float difference = Circle::opacity_goal - Circle::opacity;
  Circle::opacity += difference/ANCHOR;
}
void Circle::pulse(){
  if (Circle::radius == MAX_CIRCLE_RADIUS + CIRCLE_PULSE)
    Circle::radius_goal = MAX_CIRCLE_RADIUS - CIRCLE_PULSE;
  else if (Circle::radius == MAX_CIRCLE_RADIUS - CIRCLE_PULSE)
    Circle::radius_goal = MAX_CIRCLE_RADIUS + CIRCLE_PULSE;
}

/*
 * the following two methods control the size and opacity of each circle.  In the first, the size of each 
 * circle grows and the energy accumulates.  In the second, the size of each circle is determined by the
 * ratio energy_used:max_energy_used where max_energy_used is different for each appliances
 */
void update_size_color1(){
  int i;
  for (i = 0; i < appliances.size(); i++){
    if (MIN_CIRCLE_RADIUS + appliances[i]->energy/GROWTH_ANCHOR > MAX_CIRCLE_RADIUS){
      appliances[i]->circle->pulse();
    } else {
      appliances[i]->circle->radius_goal = min(MIN_CIRCLE_RADIUS + appliances[i]->energy/GROWTH_ANCHOR,
					       (double)MAX_CIRCLE_RADIUS);
    }
    appliances[i]->circle->opacity_goal = min(MIN_OPACITY +
					      (appliances[i]->power/appliances[i]->max_power)*
					      (MAX_OPACITY - MIN_OPACITY),
					      (double)MAX_OPACITY);
    if (appliances[i]->power > 0) {
      appliances[i]->on = true;

    }
  }
}
void update_size_color2(){
  int i;
  for (i = 0; i < appliances.size(); i++){
    if (appliances[i]->energy > appliances[i]->max_energy){
      appliances[i]->circle->pulse();
    } else {
      appliances[i]->circle->radius_goal = min(MIN_CIRCLE_RADIUS +
					       (appliances[i]->energy/appliances[i]->max_energy)*
					       (MAX_CIRCLE_RADIUS - MIN_CIRCLE_RADIUS),
					       (double)MAX_CIRCLE_RADIUS);
      appliances[i]->circle->opacity_goal = min(MIN_OPACITY +
						(appliances[i]->power/appliances[i]->max_power)*
						(MAX_OPACITY - MIN_OPACITY),
						(double)MAX_OPACITY);
    }
    if (appliances[i]->power > 0) appliances[i]->on = true;
  }
}
void check_stuck_circles(){
 int i;
  for (i = 0; i < appliances.size(); i++){
    if (appliances[i]->circle->pos.y +
	appliances[i]->circle->radius > TOP_BORDER + 1)
      appliances[i]->circle->pos.x -= abs(appliances[i]->circle->pos.y - TOP_BORDER);
    else if (appliances[i]->circle->pos.y -
	appliances[i]->circle->radius <= BOTTOM_BORDER - 1)
      appliances[i]->circle->pos.x += abs(appliances[i]->circle->pos.y - BOTTOM_BORDER);
    else if (appliances[i]->circle->pos.x +
	appliances[i]->circle->radius >= RIGHT_BORDER + 1)
      appliances[i]->circle->pos.x -= abs(appliances[i]->circle->pos.x - RIGHT_BORDER);
    else if (appliances[i]->circle->pos.x -
	appliances[i]->circle->radius <= LEFT_BORDER - 1)
      appliances[i]->circle->pos.x += abs(appliances[i]->circle->pos.x - LEFT_BORDER);
  }
}
void check_border_collisions(){
  int i;
  for (i = 0; i < appliances.size(); i++){
    if (appliances[i]->circle->pos.y +
	appliances[i]->circle->radius >= TOP_BORDER ||
	appliances[i]->circle->pos.y -
	appliances[i]->circle->radius <= BOTTOM_BORDER)
      appliances[i]->circle->mov.dy *= -1;
    if (appliances[i]->circle->pos.x +
	appliances[i]->circle->radius >= RIGHT_BORDER ||
	appliances[i]->circle->pos.x -
	appliances[i]->circle->radius <= LEFT_BORDER)
	appliances[i]->circle->mov.dx *= -1;
  }
}
void move_circles(){
  int i;
  for (i = 0; i < appliances.size(); i++){
    appliances[i]->circle->resize();
    appliances[i]->circle->recolor();
    appliances[i]->circle->maintain_speed();
    appliances[i]->circle->move();
  }
}

void makeCircle(float radius, Position pos, Color color, float opacity){
  int circle_points = 100;
  double angle = 2*PI/circle_points ;
  glPolygonMode(GL_FRONT,GL_FILL);
  glColor4f(color.x,color.y,color.z, opacity);
  glBegin(GL_POLYGON);
  double angle1 = 0.0;
  glVertex2d(pos.x + radius*cos(0.0), pos.y + radius*sin(0.0));
  int n;
  for (n = 0; n < circle_points; n++){ // fill inside of circle
    glVertex2d(pos.x + radius*cos(angle1), pos.y + radius*sin(angle1));
     angle1 += angle ;
  }
  glEnd();
  glFlush();
  int lineAmount = 100;
  glBegin(GL_LINE_LOOP);
  for(n = 0; n <= lineAmount; n++){ // draw a line around circle for better res
    glVertex2f(pos.x + (radius*cos(n*2*PI/lineAmount)),
	       pos.y + (radius*sin(n*2*PI/lineAmount)));
  }
  glEnd();
}

void draw_circles(){
  int i;
  for (i = 0; i < appliances.size(); i++)
    makeCircle(appliances[i]->circle->radius,
	       appliances[i]->circle->pos,
	       appliances[i]->circle->color,
	       appliances[i]->circle->opacity);
}
void pull_data(){
  // calculate the amount of time passed in seconds
  double seconds_passed = difftime(time(0), start);
  // iterate over all devices (ie, wemo, egauge, zwave)
  int appliance_count = 0;
  for (int d = 0; d < devices.size(); d++){
    // iterate over each one of the readings that these devices are getting
    vector<reading> reads = devices[d]->reader->getNewReadings();
    for (int m = 0; m < devices[d]->appliances->size(); m++){
      // if this is one is not in our ignore list
      if (find(devices[d]->ignore->begin(),devices[d]->ignore->end(),
	       reads[m].deviceID) == devices[d]->ignore->end()){
	devices[d]->appliances->at(m)->power = abs(reads[m].data)/1000; // change to kW
      }
    }
  }

  int i,j,n;
  n = 0;
  for (i = 0; i < devices.size(); i++){
    for (j = 0; j < devices[i]->appliances->size(); j++){
      /*
      cout << appliances[n]->name + "  power: " +
	to_string(appliances[n]->power) + " max power: " +
	to_string(appliances[n]->max_power) + " energy: " +
	to_string(appliances[n]->energy) + " max energy: " +
	to_string(appliances[n]->max_energy) << "\n";
      */

      appliances[n]->max_energy += appliances[n]->max_power * (seconds_passed/360);
      appliances[n]->energy += appliances[n]->power * (seconds_passed/360);
      appliances[n++]->power = devices[i]->appliances->at(j)->power;
      if (appliances[n-1]->on) cout << appliances[n-1]->name + ":  " + to_string(appliances[n-1]->power) << "\n";
    }
  }
  start = time(0);
}
void addDevice(ifstream *myfile, string line, string type){
  // parses string to add a given device... not pretty... and why I dislike C++/C
  vector<string> *ignores = new vector<string>;
  string ip;

  if (type != "egauge" && type != "wemo" && type != "sine" && type != "zwave"){
    return;
  }
  while(getline(*myfile,line)){
    if (line.find("</"+ type)!= string::npos){
      break;
    }
    if (line.find("<ip") != string::npos){
      ip = line.substr(line.find(">") + 1,
		       line.find("</") -line.find(">") - 1);
      printf("Using ip : %s\n", ip.c_str());
    }
    if (line.find("<ignore") != string::npos){
      printf("Ignoring: %s\n", line.substr(line.find(">") + 1,
					   line.find("</") -line.find(">") - 1).c_str());
      line = line.substr(line.find(">") + 1, line.find("</") -line.find(">") - 1);
      line.erase(remove_if(line.begin(),line.end(),::isspace),line.end());
      ignores->push_back(line);
    }
  }
  if (ip == "" && (type == "egauge" || type == "wemo")){
    perror(("No IP provided for "
	    + type + ",check configuration file.").c_str());
    return;
  }
  e_device *found = new e_device();
  found->ignore = ignores;
  if (type == "egauge"){
    found->reader = new egauge_reader(ip);
  }
  else if (type == "wemo"){
    found->reader = new wemo_reader(ip);
  }
  else if (type == "sine"){
    found->reader = new sine_reader();
  }
  else if (type == "zwave"){
    found->reader = new zwave_reader();
  }
  vector<appliance *> *d_appliances = new vector <appliance *>;
  found->appliances = d_appliances;
  devices.push_back(found);
}

void renderFunction(){
  // extemely hacky way to have data pulled less often
  data_counter++;
  if (data_counter > 500){
    data_counter = 0;
    pull_data(); // we need this to get real data
  }
  glClearColor(1.0,1.0,1.0,0.0);
  glClear(GL_COLOR_BUFFER_BIT);
  check_border_collisions();
  check_stuck_circles();
  update_size_color1(); // 1 for ..
  move_circles();
  draw_circles();
  glutSwapBuffers();
  usleep(RENDER_DELAY);
}
void on_idle(){
  // don't know what this does but without it, things die...
  glutPostRedisplay();
}
void close_window(){
  appliances.clear();
  appliances.shrink_to_fit();
  devices.clear();
  devices.shrink_to_fit();
  glutLeaveMainLoop();
}
void init(){
  glOrtho(-1 * ASPECT * VIEW_DIM , 1 * ASPECT * VIEW_DIM,
	  -1 * VIEW_DIM, 1 * VIEW_DIM,
	  -1.0, 1.0);
}

void on_click(int button, int state, int x, int y){
  int i,j;
  for (i = 0; i < devices.size(); i++){
    for (j = 0; j < devices[i]->appliances->size(); j++){
      devices[i]->appliances->at(j)->energy = 0.0;
      devices[i]->appliances->at(j)->max_energy = 0.00001;
    }
  }
}
vector<Position> get_starting_positions(){
  vector<Position> positions;
  float x = 0.0;
  float y = 0.0;
  int i,j;
  for (i = 0; i < VIEW_DIM/(MIN_CIRCLE_RADIUS*2)*2 - 2; i++){
    x = 0.0;
    for (j = 0; j < VIEW_DIM/(MIN_CIRCLE_RADIUS*2)*2 - 2; j++){
      Position new_pos = {x + MIN_CIRCLE_RADIUS + 1 - VIEW_DIM,
			  y + MIN_CIRCLE_RADIUS + 1 - VIEW_DIM };
      positions.push_back(new_pos);
      x += MIN_CIRCLE_RADIUS*2;
    }
    y += MIN_CIRCLE_RADIUS*2;
  }
  return positions;
}

//PRE: meter exists and is not being ignored.
//POST: returns pointer to the meter with meter name
// by Lylia Li :)
appliance* find_appliance(string appliance_name){
  appliance* result;
  // trim spaces in meter_name
  appliance_name.erase(remove_if(appliance_name.begin(),
				 appliance_name.end(), ::isspace), appliance_name.end());
  for (int d = 0; d < devices.size(); ++d) {
    e_device *cur_device = devices[d];
    int m = cur_device->appliances->size();
    for (int i = 0; i < m; ++i) {
      appliance* cur_appliance = cur_device->appliances->at(i);
      // If not ignoring this meter
      if (find(ignores.begin(), ignores.end(),
	       cur_appliance->name) == ignores.end()){
	if (cur_appliance->name.compare(appliance_name) == 0) {
	  result = cur_appliance;
	  return result;
	}
      }
    }
  }
  return result;
}

int main(int argc, char**argv){
  // read from circles.conf
  string line;
  ifstream myfile ("circles.conf");
  if (myfile.is_open()){
    while (getline(myfile,line)){
      if (line == "<readers>"){
	while(getline(myfile,line)){
	  if (line == "</readers>"){
	    break;
	  }
	  if (line.find("#") != string::npos){}
	  else if (line.find("egauge") != string::npos){
	    addDevice(&myfile, line, "egauge");
	  }
	  else if (line.find("wemo") != string::npos){
	    addDevice(&myfile, line, "wemo");
	  }
	  else if (line.find("sine") != string::npos){
	    addDevice(&myfile, line, "sine");
	  }
	  else if (line.find("zwave") != string::npos){
	    addDevice(&myfile, line, "zwave");
	  }
	}
      }
    }
    myfile.close();
  }
  vector<Position> positions = get_starting_positions();
  printf("%lu\n", positions.size());
  for (int i = 0; i < positions.size(); i++){
  }
  int appliance_count = 0;
  for (int ed = 0; ed < devices.size(); ed++){
    e_device *current = devices[ed];
    int m = current->reader->getNumDevices();
    vector<reading> reads = current->reader->getNewReadings();
    for (int i = 0; i < m; i++){
      if (appliance_count >= NUM_COLORS){
	printf("There are too many appliances in configuration file. Remove devices using ignores");
	exit(0);
      }
      if (find(current->ignore->begin(),
	       current->ignore->end(), reads[i].deviceID)
	  == current->ignore->end()){
	       appliance * app = new appliance();
	       string name = reads[i].deviceID.c_str();
	       name.erase(remove_if(name.begin(),name.end(),::isspace),name.end());
	       app->name = name;
	       app->energy = 0.0;
	       app->max_energy = 0.00001;
	       app->power = abs(reads[i].data)/1000; // read as watts, we change to kW

	       app->on = app->power > 0;
	       int pos_num = rand()%positions.size();
	       app->circle = new Circle(positions[pos_num], palette[appliance_count],
					MIN_CIRCLE_RADIUS);
	       positions.erase(positions.begin() + pos_num);
	       current->appliances->push_back(app);
	       appliance_count++;
      }
    }
  }




  printf("Individual data points found: %i\n", appliance_count);

  int i,j;
  for (i = 0; i < devices.size(); i++){
    for (j = 0; j < devices[i]->appliances->size(); j++){
      appliances.push_back(devices[i]->appliances->at(j));
    }}

  // read max power and energy values from LimitValues.csv and attribute them to each meter
  ifstream limitvals ("LimitValues.csv");
  vector<string> data;
  if (limitvals.is_open()){
    while (getline(limitvals, line)){
      // add all data in the CSV to a buffer
      getline(limitvals, line, ',');
      line.erase(remove_if(line.begin(), line.end(), ::isspace), line.end());
      if (line == "") break;
      if (find(ignores.begin(),
	       ignores.end(), line)
	  != ignores.end()) continue;
      appliance* cur_appliance = find_appliance(line);
      getline(limitvals, line, ',');
      cur_appliance->max_power = stof(line);
    }
    limitvals.close();
  }
  glutInit(&argc,argv);
  glutSetOption(GLUT_ACTION_ON_WINDOW_CLOSE, GLUT_ACTION_GLUTMAINLOOP_RETURNS);
  glutInitDisplayMode(GLUT_DOUBLE);
  glutInitWindowSize(SCREEN_WIDTH,SCREEN_HEIGHT);
  glutInitWindowPosition(100,100);
  int x = glutCreateWindow("Circles");
  glutSetWindow(x);
  glutCloseFunc(close_window);
  glutMouseFunc(on_click);
  start = time(0);
  glutDisplayFunc(renderFunction);
  glutIdleFunc(on_idle);
  //  These enables flags are extremely important if debugging a new feature look for
  //  more flags that can be turned on!

  glEnable(GL_BLEND);
  glEnable(GL_LINE_SMOOTH);
  glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
  init();
  glutMainLoop();
  return 0;
}
