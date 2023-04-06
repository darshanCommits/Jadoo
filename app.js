
const bruhValue = 0.014;
const start = document.querySelector("#start");
const enter = document.querySelector("#enter");
const waveParent = [...document.querySelectorAll(".wave")];
const computer = document.querySelector("#computer");
const btn = document.querySelector("#sound-btn").childNodes;
let isComputerOn = false;
let wave;

function createChild(whichWave) {
  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= 100; i++) {
    const waveChild = document.createElement("div");
    waveChild.classList.add(i);
    waveChild.classList.add("wave-child");
    fragment.appendChild(waveChild);
  }

  requestAnimationFrame(() => {
    whichWave.appendChild(fragment);
    wave = document.querySelectorAll(".wave-child");

    // Wave animation

    wave.forEach((x) => {
      let value = ([...x.classList][0] * bruhValue).toFixed(2) + "s";
      x.style.animationDelay = value;
    });
  });
}

function changeScreen() {
  document.documentElement.requestFullscreen();
  start.classList.add("slide-up");
  computer.classList.add("slide-down");
  computer.style.display = "grid";
  isComputerOn = true;
}

function enterAnim(e) {
  if (e.key === "Enter") {
    enter.classList.add("active");
    setTimeout(() => {
      enter.classList.remove("active");
      changeScreen();
    }, 100);
  }
  document.removeEventListener("keypress", enterAnim);
}

btn.forEach((x) => {
  x.addEventListener("click", () => {
    document.getElementById(x.textContent.toLowerCase()).play();
  });
});

enter.addEventListener("click", changeScreen, { once: true });

document.addEventListener("keypress", enterAnim);

document.addEventListener("keypress", (e) => {
  const audios = ["b", "c", "d", "e", "f"];
  if (isComputerOn && audios.includes(e.key)) {
    document.getElementById(e.key).play();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  createChild(waveParent[0]);
  createChild(waveParent[1]);
})