// Function from 6 homework

// 6.Створіть функцію, яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

export default function getNumberOfLetters() {
  const word = document
    .querySelector("#input06")
    .value.toLowerCase()
    .replaceAll(/\d/g, ""); // Отримуємо дані від користувача
  if (!word) {
    outputs[5].innerHTML = `Please enter a word`;
  } else {
    let quantityOfLetters = {};
    for (let i = 0; i < word.length; i++) {
      quantityOfLetters[word[i]] = word.split(word[i]).length - 1; // Вносимо в масив дані літери і кількості повторів в слові
    }
    document.querySelector(
      ".output6"
    ).innerHTML = `The number of letters in a word ${word}: ${JSON.stringify(
      quantityOfLetters,
      null,
      2
    )}`;
  }
}
