'use strict'
// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
//mousedown / mouseup

function play(e) {
  e.target.classList.toggle('list__key--pressed');
  console.log(e.type + "; " + e.currentTarget + "; " + e.target.innerHTML + "; " + e.target.classList);
};
function stop(e) {
  e.target.classList.toggle('list__key--pressed');
  console.log(e.type + "; " + e.currentTarget + "; " + e.target.innerHTML + "; " + e.target.classList);
};

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
