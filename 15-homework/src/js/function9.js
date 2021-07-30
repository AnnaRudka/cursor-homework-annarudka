export default function generateBlocks() {
  const container = document.querySelector(".output9");
  container.innerHTML = "";
  const columns = 5;
  const rows = 5;
  const size = 20;
  container.style.width = `${columns * size}px`;

  for (let i = 0; i < columns * rows; i++) {
    const block = document.createElement("div");

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    block.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    block.style.width = `${size}px`;
    block.style.height = `${size}px`;

    container.append(block);
  }
}
