function print( text, ID ) {
    document.getElementById( ID ).innerHTML = text;
}

function KitchenSim() {
    this.sim_appliances = [new Appliance("fridge"), new Appliance("light"), new Appliance("oven"), new Appliance("rangehood"), new Appliance("toaster")],
    this.get_appliances = function() { return this.sim_appliances; },
    this.switchState = function(appliance) {
	     this.sim_appliances[this.sim_appliances.indexOf(appliance)].switchState();
    }
}

kitchen = new KitchenSim();
sim_appliances = kitchen.get_appliances();

function insertImg( imgSrc, divID, width, height ){

    var mapShape1 = '<area alt="" title="" href="javascript:changePic( 0 )" shape="poly" coords="48,310,45,293,44,280,42,265,40,247,40,231,40,212,40,198,41,178,44,159,46,140,50,127,57,122,68,121,84,118,98,117,116,119,130,120,141,121,154,124,164,126,169,133,167,145,166,157,165,169,163,183,162,197,160,214,159,229,157,242,156,255,155,266,153,282,152,294,151,302,150,308" />';
    var mapShape2 = '<area alt="" title="" href="javascript:changePic( 1 )" shape="poly" coords="200,1,200,37,193,38,197,44,171,59,178,64,185,64,195,65,214,65,230,63,233,58,205,42,209,37,203,37" />';
    var mapShape3 = '<area alt="" title="" href="javascript:changePic( 2 )" shape="poly" coords="420,137,413,146,414,159,533,163,533,158,528,156,521,144,501,137" />';
    var mapShape4 = '<area alt="" title="" href="javascript:changePic( 3 )" shape="poly" coords="420,210,415,212,412,218,412,230,423,230,420,305,535,305,532,229,522,228,521,216,515,210" />';
    var mapShape5 = '<area alt="" title="" href="javascript:changePic( 4 )" shape="poly" coords="539,199,543,226,540,229,586,229,585,225,589,207,586,201,580,199,547,196" />';

    document.write('<img id="x" src="' + imgSrc + '" style="margin:0px auto;display:block" usemap="#workmap" width="' + width + '" height="' + height + '"> <map name="workmap"> ' + mapShape1 + mapShape2 + mapShape3 + mapShape4 + mapShape5 + '</map>');
    document.getElementById( divID );
}

var score = 0;
var clock;

function updateScoreClick(){
  score = score + 5;
  document.getElementById("score").innerHTML = "Score: " + score.toString();
}

function scoreClock(){
  clock = setInterval(updateScoreTime, 3000);
  console.log("we on");
}

function updateScoreTime(){
  score = score + 3;
  document.getElementById("score").innerHTML = "Score: " + score.toString();
}

function stopFunc(){
  clearInterval(clock);
  console.log("we out");
}


function changePic( num ){
    var filePath1 = KITCHEN_IMAGES_PATH;
    var srcImg = document.getElementById( "x" ).src;
    var filePath2 = KITCHEN_IMAGES_PATH;

    // Fridge pressed
    if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_toaster_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_toaster_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_toaster_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_toaster_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_off.jpg";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_toaster_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_toaster_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_toaster_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
	kitchen.switchState(sim_appliances[0]);
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
	kitchen.switchState(sim_appliances[0]);

	// LIGHT PRESSED

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_all_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_toaster_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_toaster_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_hood_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_hood_toaster_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_all_off.jpg";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_oven_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_oven_toaster_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_toaster_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_toaster_on.png";
kitchen.switchState(sim_appliances[1]);
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_toaster_on.png";
kitchen.switchState(sim_appliances[1]);

	// HOOD PRESSED

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_hood_on.png";
kitchen.switchState(sim_appliances[2]);

  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_toaster_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_all_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.png";
kitchen.switchState(sim_appliances[2]);

  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_all_off.jpg";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_oven_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_oven_toaster_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_toaster_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_toaster_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_toaster_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_toaster_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
kitchen.switchState(sim_appliances[2]);
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_hood_toaster_on.png";
kitchen.switchState(sim_appliances[2]);

	// OVEN PRESSED

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_oven_on.png";
kitchen.switchState(sim_appliances[3]);

  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_all_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_toaster_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_hood_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_hood_toaster_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_toaster_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_toaster_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_toaster_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_all_off.jpg";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_toaster_on.png";
kitchen.switchState(sim_appliances[3]);
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_oven_toaster_on.png";
kitchen.switchState(sim_appliances[3]);

	// TOASTER PRESSED

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_toaster_on.png";
kitchen.switchState(sim_appliances[4]);

  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_all_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_toaster_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_fridge_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_hood_toaster_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_hood_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_toaster_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_toaster_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_toaster_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_light_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_oven_toaster_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_oven_on.png";
kitchen.switchState(sim_appliances[4]);
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
      document.getElementById("x").src = filePath2 + "kitchen_2_all_off.jpg";
kitchen.switchState(sim_appliances[4]);
    } else {
	console.log( "Error" + srcImg + "   " + filePath1);
    }


}
