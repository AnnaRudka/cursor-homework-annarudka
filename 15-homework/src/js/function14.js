// Function from 14 homework
import "regenerator-runtime/runtime";

const idGeneratorOutput = document.getElementById("igValue");
let idGenerator = createIdGenerator();

export function* createIdGenerator() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

export function getGeneratorValue() {
  idGeneratorOutput.innerHTML = idGenerator.next().value;
}

export function startGenerator() {
  idGenerator = null;
  idGenerator = createIdGenerator();
  idGeneratorOutput.innerHTML = "0";
}
