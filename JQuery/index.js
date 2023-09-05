$("h1").addClass("btn");
// This would change the text of property
$("h1").text("Text-Format");

// Select property and change the css' properties
$("button").css("background-color", "brown");

$("button").text("Don't click me!");

$("button").html("\
    <b>Click me now!</b> \
");

// Set attribute
$("a").attr("href", "https://www.google.com");

// Tracing value of getting attribute
console.log($("a").attr("href"));

// Adding event-listener to properties
$("h1").click(function() {
    console.log($("a").attr("href"));
});

$("button").click(function() {
    console.log($("h1"));
    $("h1").css("color", "purpose");
});

$("input").keypress(function(event) {
    console.log(event.key)
})

// Animation
