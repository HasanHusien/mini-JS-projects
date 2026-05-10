let area = document.getElementById("text");
let count = document.getElementById("count");
let maxlength = area.getAttribute("maxlength"); // <= for get any atributs
let arr = area.getAttribute("cols");
area.oninput = function () {
  count.innerHTML = maxlength - this.value.length;

  if (count.innerHTML == 0) {
    count.classList.add("last");
  } else {
    count.classList.remove("last");
  }
};

console.log(arr);
