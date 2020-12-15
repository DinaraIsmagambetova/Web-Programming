$(document).ready(function () {
    $("#read-button").click(function () {
        $("#text-ktl").slideToggle(400);
    });
 });
 
 $(document).ready(function () {
    $("#top-button").click(function () {
        $("#text-top").slideToggle(400);
    });
 });
 
 $(document).ready(function () {
    $("#code-button").click(function () {
        $("#text-code").slideToggle(400);
    });
 });
 
 $(document).ready(function () {
    $("#young-button").click(function () {
        $("#text-young").slideToggle(400);
    });
 });



function Playlana() {
    var myAudio = document.getElementById("audio");
    if(myAudio.paused) {
       myAudio.play();
        }
    else {
       myAudio.pause();
    }
}

function Playblood() {
    var myAudio = document.getElementById("audio2");
    if(myAudio.paused) {
       myAudio.play();
        }
    else {
       myAudio.pause();
    }
}

function Playasap() {
    var myAudio = document.getElementById("audio3");
    if(myAudio.paused) {
       myAudio.play();
        }
    else {
       myAudio.pause();
    }
}

function Playhozier() {
    var myAudio = document.getElementById("audio4");
    if(myAudio.paused) {
       myAudio.play();
        }
    else {
       myAudio.pause();
    }
}

function Playsweater() {
    var myAudio = document.getElementById("audio5");
    if(myAudio.paused) {
       myAudio.play();
        }
    else {
       myAudio.pause();
    }
}

function Playlorde() {
    var myAudio = document.getElementById("audio6");
    if(myAudio.paused) {
       myAudio.play();
        }
    else {
       myAudio.pause();
    }
}

function Playnf() {
    var myAudio = document.getElementById("audio7");
    if(myAudio.paused) {
       myAudio.play();
        }
    else {
       myAudio.pause();
    }
}

function Playscript() {
    var myAudio = document.getElementById("audio8");
    if(myAudio.paused) {
       myAudio.play();
        }
    else {
       myAudio.pause();
    }
}

function Playnevermind() {
    var myAudio = document.getElementById("audio9");
    if(myAudio.paused) {
       myAudio.play();
        }
    else {
       myAudio.pause();
    }
}

function Playcoolio() {
    var myAudio = document.getElementById("audio10");
    if(myAudio.paused) {
       myAudio.play();
        }
    else {
       myAudio.pause();
    }
}

function Playeminem() {
    var myAudio = document.getElementById("audio11");
    if(myAudio.paused) {
       myAudio.play();
        }
    else {
       myAudio.pause();
    }
}

function Playmichael() {
    var myAudio = document.getElementById("audio12");
    if(myAudio.paused) {
       myAudio.play();
        }
    else {
       myAudio.pause();
    }
}

function Playnf2() {
    var myAudio = document.getElementById("audio13");
    if(myAudio.paused) {
       myAudio.play();
        }
    else {
       myAudio.pause();
    }
}

function Playsansara() {
    var myAudio = document.getElementById("audio14");
    if(myAudio.paused) {
       myAudio.play();
        }
    else {
       myAudio.pause();
    }
}

function Playlyubov() {
    var myAudio = document.getElementById("audio15");
    if(myAudio.paused) {
       myAudio.play();
        }
    else {
       myAudio.pause();
    }
}

const menu = document.querySelector('.h-menu')
const nav = document.querySelector('.nav')

let isOpen = false

menu.addEventListener('click', () => {
   
   if (isOpen) {
      nav.style.display = 'none'
      isOpen = false
   } else {
      nav.style.display = 'block'
      isOpen = true
   }

   menu.classList.toggle('open')
});
