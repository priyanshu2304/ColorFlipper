const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const clr = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNum = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNum];
  clr.textContent = colors[randomNum];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
