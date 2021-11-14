'use strict'

function press(e) {
  e.target.classList.toggle(e.target.classList + '_pressed');
//   sound(e.target.innerHTML);
};
function unpress(e) {
//  e.target.classList.toggle(/.+pressed/);
  e.target.classList.remove('list__key_white_pressed', 'list__key_black_pressed');
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
     press(e);
     var audio = new Audio();
     audio.currentTime = 0;
     audio.src = `sound/${e.target.innerHTML}.mp3`;
     audio.autoplay = true;
  }
});
$ul.addEventListener('touchend', function(e) {
  // event.preventDefault(); //?
  if (e.target.tagName === 'LI') {
     unpress(e);
   //   audio.paused ? audio.play() : audio.pause(); //single sound(
  }
});
