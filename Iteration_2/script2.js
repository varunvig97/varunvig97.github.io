$(document).ready(function() { //always do this first. A special event 
  
  //call the function
  drawGridObjects();
  drawRandomObject();
  
  
  //mouse interaction
  $('.element').mouseover(function(){
    $(this).css('background-color','black');
  });
  $('.element').mouseout(function(){
    $(this).css('background-color','#E3425A');
  });
  
  //custom functions
  function drawRandomObject(){
    //store random value between 0 to 100 to rw and rh
    var rx = Math.floor(Math.random()*100);
    var ry = Math.floor(Math.random()*100);
    var color = "#000";
    if (ry < 50) {
      color = "yellow";
    }
    else if (rx < 50){
      color = "limegreen";
    }
    else {
      color = "crimson"; 
    }
    console.log("rx: " + rx + " ry: " + ry);
    $("body").append( "<div class='element random' style='left:" + rx + "vw; top:" + ry + "vh; background-color:" + color + ";transform:rotate(" + i * 12 + "deg);'></div>" );

  }

  function drawGridObjects(){
    //append new element 20 times, and repeat that 100 times
    for (j = 0; j < 100; j++) {
      for (i = 0; i < 10; i++) { 
        $("body").append( "<div class='element' style='left:" + i*10 + "vw; top:" + j*70 + "px; transform:rotate(" + i * -100 + "deg);'></div>" );

        // console.log("element " + j + ", " + i + " added");
      }
    }
  }
});