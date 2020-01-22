window.addEventListener("keydown", playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add("playing")
};

//on va mettre un event listenner sur toutes les touches pour que quand la transition ce fini on va runner une fonction
const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
    if (e.propertyName !== "transform") return; //quand la transformation à eu lieu le pN passe à transform
    //this est égale au div avec la class playing
    this.classList.remove("playing");
};