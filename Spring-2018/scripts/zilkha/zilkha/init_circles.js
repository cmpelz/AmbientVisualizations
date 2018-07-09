var NUM_CIRCLES = zilkha_appliances.length;
var MAX_SIZE = canvas.width/NUM_CIRCLES;
var STARTING_SIZE = 50;
var x = 1;
var y = 1;
var num;


var elems = new Array();
var on_apps = new Array();
for (i = 0; i < NUM_CIRCLES; i++){
    var p = new ColoredCircle("../../images/circles/" + i.toString() + "_circle.png",x,y,STARTING_SIZE,canvas.height,canvas.width);
    var app = zilkha_appliances[i];
    p.addAppliance(app);
    elems.push(p);
    x += MAX_SIZE;
    if (x + MAX_SIZE/2 > canvas.width) {
	     x = MAX_SIZE/2;
	     y += MAX_SIZE;
    }
}

setInterval(draw, REFRESH_RATE);
