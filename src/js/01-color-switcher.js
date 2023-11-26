function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector('button[data-start]');
// console.log(startBtn);
const stopBtn = document.querySelector('button[data-stop]');
// console.log(stopBtn);

startBtn.addEventListener('click', handelStart);
function handelStart(event) {
  startBtn.setAttribute('disable', true);

  if (event) {
    const colorChange = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 600);

    stopBtn.addEventListener('click', handelStop);
    function handelStop(event) {
      if (event) {
        clearInterval(colorChange);
        // document.body.style.backgroundColor = white;
      }
    }
  }
}
