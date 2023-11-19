
var buttonsColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSquence() {
    let n = Math.random();
    n = n * 4;
    n = Math.floor(n);
    var randomChosenColor = buttonsColors[n];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
}

$(".btn").on("click", function () {
    var clickedButtonId = $(this).attr("id");
    userClickedPattern.push(clickedButtonId);
    playSounds(clickedButtonId);
    console.log(clickedButtonId);
});

function playSounds(id){
    $("#" + id).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + id + ".mp3");
    audio.play();
}