'use strict'

function play(e) {
  e.target.classList.toggle('list__key_pressed');
//   sound(e.target.innerHTML);
};
function stop(e) {
  e.target.classList.toggle('list__key_pressed');
};
// function sound(note) {
//    var audio = new Audio();
//    audio.currentTime = 0;
//    audio.src = `sound/${note}2.mp3`;
//    audio.autoplay = true;
//  };

var $ul = document.querySelector('ul');
// var audio = new Audio(); //single sound(
// MOBIL TOUCH
$ul.addEventListener('touchstart', function(e) {
  event.preventDefault();
  if (e.target.tagName === 'LI') {
     play(e);
     var audio = new Audio();
     audio.currentTime = 0;
     audio.src = `sound/${e.target.innerHTML}4.mid`;
     audio.autoplay = true;
  }
});
$ul.addEventListener('touchend', function(e) {
  event.preventDefault();
  if (e.target.tagName === 'LI') {
     stop(e);
   //   audio.paused ? audio.play() : audio.pause(); //single sound(
  }
});
