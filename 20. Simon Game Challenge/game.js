// using this for random color
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextLevel();
        started = true;
    }
});

// First way of adding listener
$(".btn").on("click", function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animation(userChosenColor);
    playSound(userChosenColor);
    checkingResult(userClickedPattern.length - 1);
});

// Second way of adding listener
// $(".btn").click(function() {
//     var userChosenColor = $(this).attr("id");
//     userClickedPattern.push(userChosenColor);
//     animation(userChosenColor);
//     playSound(userChosenColor);
//     checkingResult(userClickedPattern.length - 1);
// });

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animation(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

function nextLevel() {
    // reset user clicking
    userClickedPattern = [];

    // Setting level on screen
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * buttonColors.length);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function checkingResult(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        // Correct Answer -> Next Level
        if (userClickedPattern.length == gamePattern.length) {
            setTimeout(function() {
                nextLevel();
            });
        }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game over! Press Any Key to Restart");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
}