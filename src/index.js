'use strict'
// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
//mousedown / mouseup
function play(event) {
  console.log(event.type + "; " + event.currentTarget);
};
function stop(event) {
  console.log(event.type);
};
keyboard.addEventListener("mousedown", play);
keyboard.addEventListener("mouseup", stop);