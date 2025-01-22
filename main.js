let arrow = document.getElementById("arrow");
let choices = [
  `<i class="fas fa-arrow-left-long"></i>`,
  `<i class="fas fa-arrow-right-long"></i>`
];
setInterval(() => {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];

  arrow.innerHTML = randomChoice;
  arrow.style.visibility = "visible";

  setTimeout(() => {
    arrow.style.visibility = "hidden";
  }, 500);
}, 1000);
