let text = "Hello From Hassan Hussien This Is Type Writer Efficte";
let btn = document.getElementById("btn");

let i = 0;
btn.onclick = function () {
  let countdown = setInterval(function () {
    document.getElementById("type").textContent += text[i];

    i++;
    if (i > text.length - 1) {
      clearInterval(countdown);
      btn.remove();
    }
  }, 150);
};
