$(document).ready(function() {

	console.log ("hello there!");

	$(".button").on("mouseenter", function() {

		$(this).addClass("focused")

	});

	$(".button").on("mouseleave", function() {
		$(this).removeClass("focused")

    })

    $(".button").on("click", function() {
    	$(this).toggleClass("active");
    	$("body").toggleClass("dark");


    });

   }); 