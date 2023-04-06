const bruhValue = 0.014;
const start = document.querySelector("#start");
const enter = document.querySelector("#enter");
const waveParent = [...document.querySelectorAll(".wave")];
const computer = document.querySelector("#computer");
const btn = document.querySelector("#sound-btn").childNodes;
let isComputerOn = false;
let wave;

function buttonAnimation() {
  btnClicked.classList.add("active-btn");
  setTimeout(() => {
    btnClicked.classList.remove("active-btn");
  }, 100);
}

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
    console.log(wave);
    wave.forEach((x) => {
      let value = ([...x.classList][0] * bruhValue).toFixed(2) + "s";
      x.style.animationDelay = value;
    });
  });
}

function changeScreen() {
  createChild(waveParent[0]);
  createChild(waveParent[1]);
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

  if (e.key === "Enter") {
    enter.classList.add("active");
    setTimeout(() => {
      enter.classList.remove("active");
      changeScreen();
    }, 100);
  }

  if (isComputerOn && audios.includes(e.key)) {
    document.getElementById(e.key).play();
    buttonAnimation();
  }
});
