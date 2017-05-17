$(document).ready(function() {
var appId="15080664";
var key="0d2bf652ee041a96c32ef6e065acfbe6";
var food= "chicken";

var url = "https://api.edamam.com/search?q=" + food + "&app_id=" + appId + "&app_key=" + key;

var d = new Date(); // for now



$.getJSON(url,function(data) {
  console.log(data) 
//   if (data["current"]["hits:0"] > 2300) {
// $("#calories").addClass("surplus");
// $("#calories").html("Calorie Surplus");
// }
// else  {
// $("#calories").addClass("deficit");
// $("#calories").html("Calorie Deficit");
// }
d.getHours(); // => 9
d.getMinutes(); // =>  30
d.getSeconds(); // => 51

// console.log(d.getHours());
// $("calories").html(d.getHours());

	console.log(data["hits"]["1"]["recipe"]["label"]);

//if morning{
// 	recipe 1
// }else if afternoon{
// 	recipe 2
// }else if night{
// 	recipe 3
// }


});

});