// Function from 5 homework
// Створіть функцію, яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).

export default function getOnlyGoodWords() {
  const output = document.querySelector(".output5");
  const sentence = document.querySelector("#input05-sentence").value; // Отримуємо дані від користувача
  const badword = document.querySelector("#input05-word").value.toLowerCase();
  if (!SVGComponentTransferFunctionElement) {
    output.innerHTML = `Введіть будь ласка речення`;
  } else {
    let correctSentence = "";
    let arrayOfwords = sentence.split(" "); // Розділяємо слова і записуємо в масив
    let arrayOfCorrectWords = [];
    arrayOfwords.forEach((word) => {
      arrayOfCorrectWords.push(
        word
          .toLowerCase()
          .replace("shit", "***")
          .replace("fuck", "***")
          .replace(badword, "***")
      );
    }); //В кожному слові масиву робимо заміну поганої частини слова (+ варіант користувача)
    correctSentence = arrayOfCorrectWords.join(" "); // Об"єднуємо відредаговані слова з масиву в нове речення
    output.innerHTML = `Відредаговане речення: ${correctSentence}`;
  }
}
