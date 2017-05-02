$(document).ready(function(){


console.log("THE TRIP");

$(".button").on("click",function(){
	$(this).toggleClass("active");
	$("body").toggleClass("phase2");
	$("h1").html("ACID");
});

$("h1").on("click", function(){
	$(this).html("Lysergic Acid Diethylamide");

});




});