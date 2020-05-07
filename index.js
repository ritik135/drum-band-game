numberOfDrumSticks = document.querySelectorAll(".drum").length;
var i=0;
while(i<numberOfDrumSticks){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHtml = this.innerHTML ;
    makesound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    }) ;
  i++;
}

document.addEventListener("keypress",function(event){
  makesound(event.key);
  buttonAnimation(event.key);
})

function makesound(key){
  switch (key) {
    case "w":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
    case "a":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
    case "s":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
    case "d":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
    case "j":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
    case "k":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
    case "l":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
    default:
        console.log(this.innerHTML);
    }
}

function buttonAnimation(currentkey){
  var pressedkey = document.querySelector("." + currentkey );
  pressedkey.classList.add("pressed");
  setTimeout(function(){
    pressedkey.classList.remove("pressed");
},100);
}
