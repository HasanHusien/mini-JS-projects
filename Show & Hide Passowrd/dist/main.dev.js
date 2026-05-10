"use strict";

var inp = document.getElementById('inp');
var btn = document.getElementById('btn');

btn.onclick = function () {
  if (this.textContent === 'Show Password') {
    inp.setAttribute("type", "text");
    this.textContent = 'Hide Password';
  } else {
    inp.setAttribute("type", "password");
    this.textContent = 'Show Password';
  }

  ;
};