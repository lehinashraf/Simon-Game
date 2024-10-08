//for(var i=0;$(".btn").length;i++){
    $(".btn").click(function(){
        var userChosenColor = $(this).attr('id');
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer(userClickedPattern.length-1)


    })
//}
var started=false;
var level=0;
$(document).keydown(function(){
    if(!started){
        nextSequence();
        $("#level-title").html("Level "+level);
        started=true;
    }
});
var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*3+1);
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    $("."+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}


function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}
function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
    setTimeout(function() {
        $("."+currentColor).removeClass("pressed");
      }, 100);

}
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("sucess");
        if (userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000)
        }
    }else{
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    $("h1").html("Game Over, Press Any Key to Restart")
    startOver();
}

}
function startOver(){
    level=0;
    gamePattern=[];
    started=false;



}
