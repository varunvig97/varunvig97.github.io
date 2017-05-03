$(document).ready(function() {

	
	var numberofcans = 50;
	var spraycount = 0;




	for(var i=0; i<numberofcans; i++){

		$("#can-container").append("<div class='cans'></div>");
		if(i % 2 === 0){
			
		}

	}

	$(".cans").on("mouseenter",function() {

		$(this).addClass("sprayed");
		spraycount = spraycount + 1;
		$("#target-sprays").html(spraycount);

		
		if(spraycount === numberofcans){
			$("#textbar").html("WELCOME TO THE STREETS!");
          } 
		
      });


});