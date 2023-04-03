const enter = document.querySelector("#enter");
const start = document.querySelector("#start");
const computer = document.querySelector("#computer");
const btn = document.querySelector("#sound-btn")

function changeScreen() {
  start.classList.add("slide-up");

  computer.classList.add("slide-down");
  computer.style.display = "grid";
}

document.addEventListener("keypress", (e) => {
  if (computer.classList.contains("slide-down"))
    document.getElementById(e.key).play();
});

enter.addEventListener("click", changeScreen);
