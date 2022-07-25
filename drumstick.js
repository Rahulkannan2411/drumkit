for(var i=0;i<document.querySelectorAll(".button").length;i++){
     document.querySelectorAll(".button")[i].addEventListener('click',function (){
     makeSound(this.innerHTML);


});
}


//For Detecting Keyboard key press
document.addEventListener("keypress", function(event) {
    console.log(event);
    makeSound(event.key);

  });



//For making sounds
function makeSound(key){
    switch(key.toUpperCase()){
        case 'Q':
            var tom1 = new Audio("piano-a.wav");
            tom1.play();
            break;
        case 'W':
            var tom2 = new Audio("piano-b.wav");
            tom2.play();
            break;
        case 'E':
            var tom3 = new Audio("piano-c.wav");
            tom3.play();
            break;
        case 'R':
            var tom4 = new Audio("piano-d.wav");
            tom4.play();
            break;
        case 'T':
            var snare = new Audio("piano-e.wav");
            snare.play();
            break;
        case 'Y':
            var crash = new Audio("piano-f.mp3");
            crash.play();
            break;
        default :
          console.log(this.textContent);
    }
}
