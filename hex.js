const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   const randomColor = getRandomNumber().toString().replaceAll(",", "");
//   document.body.style.backgroundColor = `#${randomColor}`;
//   color.textContent = `#${randomColor}`;
// });

// function getRandomNumber() {
//   let newArray = [];
//   for (let i = 0; i < 6; i++) {
//     let rn = Math.floor(Math.random() * hex.length);
//     newArray.push(hex[rn]);
//   }
//   return newArray;
// }

btn.addEventListener("click", function () {
  let hexClr = "#";
  for (let i = 0; i < 6; i++) {
    hexClr += hex[Math.floor(Math.random() * hex.length)];
  }
  document.body.style.backgroundColor = hexClr;
  color.textContent = hexClr;
});
