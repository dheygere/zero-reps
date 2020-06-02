import "./styles.css";

const dayOne = new Date("2020-05-25T00:00:00");
const daysDiff = Math.floor((new Date() - dayOne) / (1000 * 60 * 60 * 24));

if (localStorage.getItem("reps") === null) {
  localStorage.setItem("reps", 0);
}
let repsDone = +localStorage.getItem("reps");

updateCounter();

document
  .getElementById("add20")
  .addEventListener("click", () => addReps(20), false);
document
  .getElementById("add1")
  .addEventListener("click", () => addReps(1), false);
document
  .getElementById("del1")
  .addEventListener("click", () => addReps(-1), false);
document
  .getElementById("del20")
  .addEventListener("click", () => addReps(-20), false);

function addReps(num) {
  repsDone += num;
  localStorage.setItem("reps", repsDone);
  updateCounter();
}

function updateCounter() {
  let counter = daysDiff * 100 - repsDone;
  document.getElementById("counter").innerHTML = counter;
}
