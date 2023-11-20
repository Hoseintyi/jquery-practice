
var buttonsColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started= false;
function nextSquence() {
    level++;
    $("#level-title").text("Level " + level);
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
    playSoundsAndAnimate(clickedButtonId);
    console.log(clickedButtonId);
});

function playSoundsAndAnimate(id){
    $("#" + id).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + id + ".mp3");
    audio.play();
}

$(document).keypress(function(){
if(!started){
  $("#level-title").text("level"+ level);  
  nextSquence();
  started=true;
}
});