$(document).ready(function() {
    console.log("hello there!");

    $(".jump").on("mouseenter", function() {
        $(this).addClass("hover");
    });

    $(".jump").on("mouseleave", function() {
        $(this).removeClass("hover");
    })

    $(".jump").on("click", function() {
        $(this).toggleClass("active");
        $("body").toggleClass("dark");
    })

});

