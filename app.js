const enter = document.querySelector("#enter");
const start = document.querySelector("#start");
const computer = document.querySelector("#computer");
const btn = document.querySelector("#sound-btn").childNodes;
let isComputerOn = false;

function changeScreen() {
  document.documentElement.requestFullscreen();
  start.classList.add("slide-up");
  computer.classList.add("slide-down");
  computer.style.display = "grid";
  isComputerOn = true;
}

btn.forEach((x) => {
  x.addEventListener("click", () => {
    document.getElementById(x.textContent.toLowerCase()).play();
  });
});

enter.addEventListener("click", changeScreen, { once: true });

document.addEventListener("keypress", (e) => {
  const audios = ["b", "c", "d", "e", "f"];
    let btnClicked = document.querySelector(`button:contains(${e.key})`);

  if (e.key === "Enter") {
    enter.classList.add("active");
    setTimeout(() => {
      enter.classList.remove("active");
      changeScreen();
    }, 100);
  }

  if (isComputerOn && audios.includes(e.key)) {
    document.getElementById(e.key).play();
    btnClicked.classList.add("active-btn");
    setTimeout(() => {
      btnClicked.classList.remove("active-btn");
    }, 100);
  }
});
