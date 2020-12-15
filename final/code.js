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
 
 
 
 
 function Playborrowed() {
     var myAudio = document.getElementById("audio");
     if(myAudio.paused) {
        myAudio.play();
     }
     else {
        myAudio.pause();
     }
 }
 
 function Play21() {
     var myAudio = document.getElementById("audio2");
     if(myAudio.paused) {
        myAudio.play();
     }
     else {
        myAudio.pause();
     }
 }
 
 function Playflex() {
     var myAudio = document.getElementById("audio3");
     if(myAudio.paused) {
        myAudio.play();
     }
     else {
        myAudio.pause();
     }
 }
 
 function Playbirds() {
     var myAudio = document.getElementById("audio4");
     if(myAudio.paused) {
        myAudio.play();
     }
     else {
        myAudio.pause();
     }
 }
 
 function Playarcade() {
     var myAudio = document.getElementById("audio5");
     if(myAudio.paused) {
        myAudio.play();
     }
     else {
        myAudio.pause();
     }
 }
 
 function Playstereo() {
     var myAudio = document.getElementById("audio6");
     if(myAudio.paused) {
        myAudio.play();
     }
     else {
        myAudio.pause();
     }
 }
 
 function Playoutnumbered() {
     var myAudio = document.getElementById("audio7");
     if(myAudio.paused) {
        myAudio.play();
     }
     else {
        myAudio.pause();
     }
 }
 
 function Playsia() {
     var myAudio = document.getElementById("audio8");
     if(myAudio.paused) {
        myAudio.play();
     }
     else {
        myAudio.pause();
     }
 }
 
 function Playcoldplay() {
     var myAudio = document.getElementById("audio9");
     if(myAudio.paused) {
        myAudio.play();
     }
     else {
        myAudio.pause();
     }
 }
 
 function Playbatyr() {
     var myAudio = document.getElementById("audio10");
     if(myAudio.paused) {
        myAudio.play();
     }
     else {
        myAudio.pause();
     }
 }
 
 function Playmichael() {
     var myAudio = document.getElementById("audio11");
     if(myAudio.paused) {
        myAudio.play();
     }
     else {
        myAudio.pause();
     }
 }
 
 function Playlonely() {
     var myAudio = document.getElementById("audio12");
     if(myAudio.paused) {
        myAudio.play();
     }
     else {
        myAudio.pause();
     }
 }
 
 function Playrunaway() {
     var myAudio = document.getElementById("audio13");
     if(myAudio.paused) {
        myAudio.play();
     }
     else {
        myAudio.pause();
     }
 }
 
 function Playrook1e() {
     var myAudio = document.getElementById("audio14");
     if(myAudio.paused) {
        myAudio.play();
     }
     else {
        myAudio.pause();
     }
 }
 
 function Playhopes() {
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