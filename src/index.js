'use strict'

function press(e) {
  e.target.classList.toggle(e.target.classList + '_pressed');
};
function unpress(e) {
  e.target.classList.remove('list__key_white_pressed', 'list__key_black_pressed');
};

var $ul = document.querySelector('ul');
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
  if (e.target.tagName === 'LI') {
     unpress(e);
  }
});
