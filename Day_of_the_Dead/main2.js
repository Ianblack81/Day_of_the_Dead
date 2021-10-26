//audio
var llorona = document.querySelector(".llorona").addEventListener("click", function (){
    var audio = new Audio("audio/llorona.mp3");
    audio.play();
    });
var felipe = document.querySelector(".felipe").addEventListener("click", function (){
    var audio = new Audio("audio/felipe.mp3");
    audio.play();
    });
var felipe = document.querySelector(".animas").addEventListener("click", function (){
    var audio = new Audio("audio/animas.mp3");
    audio.play();
    });
var xochitl = document.querySelector(".xochitl").addEventListener("click", function (){
    var audio = new Audio("audio/xochitl.mp3");
    audio.play();
    });

//Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});