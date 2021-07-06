const outputs = document.querySelectorAll(".output");
const container = document.querySelector(".container-blocks");
const size = document.getElementById("size");
const columns = document.getElementById("columns");
const rows = document.getElementById("rows");
let timerId;

size.addEventListener("input", () => {
  outputs[0].innerHTML = size.value;
});
columns.addEventListener("input", () => {
  outputs[1].innerHTML = columns.value;
});
rows.addEventListener("input", () => {
  outputs[2].innerHTML = rows.value;
});

function generateBlocks() {
  container.innerHTML = "";
  container.style.width = `${columns.value * size.value}px`;

  for (let i = 0; i < columns.value * rows.value; i++) {
    const block = document.createElement("div");

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    block.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    block.style.width = `${size.value}px`;
    block.style.height = `${size.value}px`;

    container.append(block);
  }
}

function generateBlocksInterval() {
  generateBlocks();
  clearTimeout(timerId);
  timerId = setInterval(() => generateBlocks(), 1000);
}

document.querySelector(".btn1").addEventListener("click", generateBlocks);
document
  .querySelector(".btn2")
  .addEventListener("click", generateBlocksInterval);
