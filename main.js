let arrow = document.getElementById("arrow");
let choices = [
  `<i class="fas fa-arrow-left-long"></i>`,
  `<i class="fas fa-arrow-right-long"></i>`
];
let counter = 4;
let interval = setInterval(() => {
  counter--;
  if (counter === 0) {
    clearInterval(interval);
  }
  document.getElementById("arrow").innerText = counter;
}, 1000);

setTimeout(() => {
  setInterval(() => {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];

    arrow.innerHTML = randomChoice;
    arrow.style.visibility = "visible";

    setTimeout(() => {
      arrow.style.visibility = "hidden";
    }, 500);
  }, 2000);
}, 3000);
