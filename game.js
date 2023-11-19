
var buttonsColors=["red" , "blue" , "green" , "yellow"];
var gamePattern = [];

function nextSquence(){
    let n = Math.random();
    n= n*4;
    n=Math.floor(n);
    var randomChosenColor= buttonsColors[n]; 
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
}

