// Function from 3 homework

export default function getCorrectName() {
  const incorrectName = document
    .querySelector("#input03")
    .value.toLowerCase()
    .replace(/\d/g, "");

  let correctName = incorrectName[0].toUpperCase() + incorrectName.slice(1);
  document.querySelector(
    ".output3"
  ).innerHTML = `Correct name format: ${correctName}`;
}
