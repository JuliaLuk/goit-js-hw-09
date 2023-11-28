function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector('button[data-start]');
// console.log(startBtn);
const stopBtn = document.querySelector('button[data-stop]');
// console.log(stopBtn);

stopBtn.disabled = true;

startBtn.addEventListener('click', handelStart);
function handelStart(event) {
  if (event) {
    const colorChange = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;

    stopBtn.addEventListener('click', handelStop);
    function handelStop(event) {
      if (event) {
        clearInterval(colorChange);
        // document.body.style.backgroundColor = white;
      }
      startBtn.disabled = false;
      stopBtn.disabled = true;
    }
  }
}
