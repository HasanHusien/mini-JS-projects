let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let form = document.getElementById("form");

btn.onclick = function (e) {
  e.preventDefault();
  if (this.textContent === "Show Password") {
    inp.setAttribute("type", "text");
    this.textContent = "Hide Password";
  } else {
    inp.setAttribute("type", "password");
    this.textContent = "Show Password";
  }
};
