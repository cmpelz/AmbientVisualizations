function print( text, ID ) {
    document.getElementById( ID ).innerHTML = text;
}

function KitchenZilk() {
    this.sim_appliances = [new ZilkhaAppliance("microwave"), new ZilkhaAppliance("fridge"), new ZilkhaAppliance("oven"), new ZilkhaAppliance("dishwasher"), new ZilkhaAppliance("stove")],
    this.get_appliances = function() { return this.sim_appliances; },
    this.switchState = function(appliance) {
	       this.sim_appliances[this.sim_appliances.indexOf(appliance)].switchState();
    }
}

kitchen = new KitchenZilk();
sim_appliances = kitchen.get_appliances();

var imId;

function insertImg( imgSrc, width, height, alt, id ){
   var img = document.createElement("img");
   img.src = imgSrc;
   img.width = width;
   img.height = height;
   img.alt = alt;
   img.id = id;

   imId = id;

   document.write('<img id = "id" src = "' + imgSrc + '" style = "margin:0px auto;display:block" width = "' + width + '" height = "' + height + '" />');
}

function checkChange(name) {
  for(i = 0; i < this.sim_appliances.length; i++) {
    if(this.sim_appliances[i].name == name) {
      changePic(i);
    }
  }
}


function changePic(num){
    var filePath1 = KITCHEN_VIS_IMAGES_PATH;
    var srcImg = document.getElementById( "id" ).src;
    var filePath2 = KITCHEN_VIS_IMAGES_PATH;


// Fridge lights up
if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_toaster_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_oven_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_toaster_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_light_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_light_oven_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_light_oven_toaster_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_light_toaster_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_all_off.jpg";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_oven_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_oven_toaster_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_toaster_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_hood_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_all_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_oven_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_toaster_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
sim_appliances[1].change = false;

// LIGHT lights up

} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_hood_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_all_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_oven_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_oven_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_all_off.jpg";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_oven_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_oven_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_oven_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_oven_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_toaster_on.png";
sim_appliances[0].change = false;

// HOOD lights up

} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_oven_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_toaster_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_hood_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_all_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_all_off.jpg";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_oven_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_oven_toaster_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_toaster_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_oven_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_oven_toaster_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_toaster_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_oven_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_toaster_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_toaster_on.png";
sim_appliances[2].change = false;

// OVEN lights up

} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_oven_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_hood_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_all_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_oven_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_toaster_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_toaster_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_oven_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_toaster_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_oven_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_toaster_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_oven_toaster_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_all_off.jpg";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_toaster_on.png";
sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_oven_toaster_on.png";
sim_appliances[4].change = false;

// TOASTER lights up

} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_toaster_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_all_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_hood_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_toaster_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_oven_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_light_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_toaster_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_toaster_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_oven_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_hood_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_toaster_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_oven_toaster_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_oven_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_light_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_oven_toaster_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_oven_on.png";
sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_all_off.jpg";
sim_appliances[3].change = false;
} else {
console.log( "Error  " + filePath1);
}
}
