'use strict'

function play(e) {
  e.target.classList.toggle('list__key--pressed');
  sound(e.target.innerHTML);
};
function stop(e) {
  e.target.classList.toggle('list__key--pressed');
};
function sound(note) {
   var audio = new Audio();
   audio.src = `sound/${note}2.mp3`;
   audio.autoplay = true;
 }

var $ul = document.querySelector('ul');
// MOBIL TOUCH
$ul.addEventListener('touchstart', function(e) {
  event.preventDefault();
  if (e.target.tagName === 'LI') play(e);
});
$ul.addEventListener('touchend', function(e) {
  event.preventDefault();
  if (e.target.tagName === 'LI') stop(e);
});
