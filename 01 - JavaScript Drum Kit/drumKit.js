function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    key.classList.add("playing");
}


const keys = document.querySelectorAll(".key");

function removeTransition(e){
    if(e.propertyName !== "transform") return; // skip it if its not a transition
    this.classList.remove("playing");
}

keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playSound);