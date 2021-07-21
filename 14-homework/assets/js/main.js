const idGeneratorBtn = document.getElementById("btn-next");
const idGeneratorBtnStart = document.getElementById("btn-start");
const fontGeneratorUpBtn = document.getElementById("btn-up");
const fontGeneratorDownBtn = document.getElementById("btn-down");
const idGeneratorOutput = document.getElementById("igValue");
const fontGeneratorOutput = document.getElementById("fontgValue");

// Завдання 1:
// Створіть нескінченний генератор ідентифікаторів. Повинен працювати наступним чином:

function* createIdGenerator() {
  let i = 1;
  while (true) {
    yield i++;
  }
}
let idGenerator = createIdGenerator();

idGeneratorBtn.addEventListener("click", () => {
  idGeneratorOutput.innerHTML = idGenerator.next().value;
});

idGeneratorBtnStart.addEventListener("click", () => {
  idGenerator = null;
  idGenerator = createIdGenerator();
  idGeneratorOutput.innerHTML = "0";
});

// Завдання 2 (advanced)
// Створіть генератор, який буде регулювати розміри шрифту для вашого сайту.

function* newFontGenerator(fontSize) {
  let arg = yield fontSize;

  while (true) {
    if (arg === "up") {
      arg = yield (fontSize += 2);
    } else if (arg === "down") {
      arg = yield (fontSize -= 2);
    } else {
      arg = yield fontSize;
    }
  }
}

const fontGenerator = newFontGenerator(14);

fontGeneratorUpBtn.addEventListener("click", () => {
  let fontValue = fontGenerator.next().value;
  if (fontValue < 36) {
    fontValue = fontGenerator.next("up").value;
    fontGeneratorOutput.setAttribute("style", `font-size: ${fontValue}px`);
  } else fontGeneratorOutput.setAttribute("style", `font-size: 36px`);
});

fontGeneratorDownBtn.addEventListener("click", () => {
  let fontValue = fontGenerator.next().value;
  if (fontValue > 8) {
    fontValue = fontGenerator.next("down").value;
    fontGeneratorOutput.setAttribute("style", `font-size: ${fontValue}px`);
  } else fontGeneratorOutput.setAttribute("style", `font-size: 8px`);
});
