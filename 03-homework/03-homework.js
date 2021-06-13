// Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі

const output01 = document.querySelector(".output01");

document.querySelector(".btn1").addEventListener("click", () => {
  const number = Math.abs(+document.querySelector("#input01").value); // Отримаємо число від користувача (не враховуємо "-")
  const arrayOfDigits = number.toString().replace(".", "").split(""); // Створюємо масив з цифр числа
  const maxDigit = Math.max(...arrayOfDigits); // Шукаємо максимальне значеня в масиві
  output01.innerHTML = `Найбільша цифра в числі:  ${maxDigit}`;
});

// Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

const output02 = document.querySelector(".output02");

document.querySelector(".btn2").addEventListener("click", () => {
  const number = +document.querySelector("#input02-number").value;
  const degree = +document.querySelector("#input02-degree").value; // Отримаємо число і значення степеня від користувача
  if (
    number === "" || // Перевіряємо на валідність
    isNaN(number) ||
    !Number.isInteger(degree) ||
    degree === "" ||
    isNaN(degree)
  ) {
    output02.innerHTML = "Будь ласка введіть числа (степінь - ціле число)";
  } else {
    let result = 1;
    for (let i = 1; i <= Math.abs(degree); i++) {
      //Розрахунок результату у випадках додатнього і від'ємного степеня
      if (degree > 0) {
        result *= number;
      } else if (degree < 0) {
        result /= number;
      }
    }
    output02.innerHTML = `${number} в степені ${degree} = ${result}`;
  }
});

// Створити функцію, яка форматує ім'я, роблячи першу букву великою.
const output03 = document.querySelector(".output03");

document.querySelector(".btn3").addEventListener("click", () => {
  const incorrectName = document.querySelector("#input03").value.toLowerCase();
  let correctName = incorrectName[0].toUpperCase() + incorrectName.slice(1);
  output03.innerHTML = `Правильний формат імені: ${correctName}`;
});

// Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%).

const output04 = document.querySelector(".output04");

document.querySelector(".btn4").addEventListener("click", () => {
  const totalIncome = Math.abs(+document.querySelector("#input04").value);
  const taxValue = 19.5;
  const salary = ((totalIncome * (100 - taxValue)) / 100).toFixed(2);
  output04.innerHTML = `Чистий дохід: ${salary} грн.`;
});

// Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

const output05 = document.querySelector(".output05");

document.querySelector(".btn5").addEventListener("click", () => {
  const firstNumber = +document.querySelector("#input05-first").value; // Отримаємо діапазон від користувача
  const secondNumber = +document.querySelector("#input05-second").value;
  if (
    firstNumber === "" || // Перевіряємо на валідність
    isNaN(firstNumber) ||
    secondNumber === "" ||
    isNaN(secondNumber)
  ) {
    output05.innerHTML = "Будь ласка введіть числа";
  } else {
    let randomValue = 0;
    const startValue = Math.min(firstNumber, secondNumber); // Сортуємо значення початку і кінця діапазону
    const endValue = Math.max(firstNumber, secondNumber);
    randomValue = Math.trunc(
      startValue + Math.random() * (endValue - startValue)
    ); // Розраховуємо рандомне число
    output05.innerHTML = `Число в діапазоні від ${startValue} до ${endValue}: ${randomValue}`;
  }
});

// Створити функцію, яка рахує скільки разів певна буква повторюється в слові

const output06 = document.querySelector(".output06");

document.querySelector(".btn6").addEventListener("click", () => {
  const word = document.querySelector("#input06-first").toLowerCase(); // Отримаємо дані від користувача
  const letter = document.querySelector("#input06-second").toLowerCase();
  let quantity = word.split(letter).length - 1;
  output06.innerHTML = `Кількість повторів літери ${letter} в слові ${word}: ${quantity}`;
});

// Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.

const output07 = document.querySelector(".output07");

document.querySelector(".btn7").addEventListener("click", () => {
  const amount = document.querySelector("#input07").value.toLowerCase(); // Отримаємо дані від користувача
  const exchangeRate = 27;
  let amountAfterExchange = 0;
  let currency = "";
  // Відповідно до наявних символів валюти розраховуємо нову суму коштів
  if (amount.includes("uah")) {
    amountAfterExchange = (amount.replace("uah", "") / exchangeRate).toFixed(2);
    currency = "$";
  } else if (amount.includes("$")) {
    amountAfterExchange = (amount.replace("$", "") * exchangeRate).toFixed(2);
    currency = "UAH";
  } else {
    output07.innerHTML = "Будь ласка введіть суму у UAH або $";
  }
  output07.innerHTML = `Ви отримаєте: ${amountAfterExchange} ${currency}`;
});

// Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем

const output08 = document.querySelector(".output08");

document.querySelector(".btn8").addEventListener("click", () => {
  const quantity = document.querySelector("#input08").value || 8; // Отримаємо дані від користувача
  let password = "";
  for (let i = 0; i < quantity; i++) {
    let number = Math.floor(Math.random() * 10); // Генеруємо випадкове число від 1 до 9
    password += number;
  }
  output08.innerHTML = `Випадковий пароль на ${quantity} символів: ${password}`;
});

// Створіть функцію, яка видаляє всі букви з речення

const output09 = document.querySelector(".output09");

document.querySelector(".btn9").addEventListener("click", () => {
  const sentence = document.querySelector("#input09-first").value.toLowerCase(); // Отримаємо дані від користувача
  const letter = document.querySelector("#input09-second").value.toLowerCase();
  const newSentence = sentence.replaceAll(letter, ""); // Робимо заміну символа на порожній рядок
  output09.innerHTML = `Речення без букви ${letter}: ${newSentence}`;
});

// Створіть функцію, яка перевіряє, чи є слово паліндромом.

const output10 = document.querySelector(".output10");

document.querySelector(".btn10").addEventListener("click", () => {
  const word = document.querySelector("#input10").value.replaceAll(" ", ""); // Отримаємо дані від користувача
  // Розвертаємо слово в зворотньому порядку
  const reverseword = word.toLowerCase().split("").reverse().join("");
  // Перевіряємо тотожність з оригіналом
  if (reverseword === word.toLowerCase()) {
    output10.innerHTML = `Це слово є паліндромом`;
  } else {
    output10.innerHTML = `Це слово не є паліндромом`;
  }
});

// Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

const output11 = document.querySelector(".output11");

document.querySelector(".btn11").addEventListener("click", () => {
  const sentence = document.querySelector("#input11").value; // Отримаємо дані від користувача
  let newSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    // Перевіряємо в циклі чи індекс символу = останньому індексу цього символу
    if (
      sentence.toLowerCase().indexOf(sentence[i]) ===
      sentence.lastIndexOf(sentence[i].toLowerCase())
    ) {
      newSentence += sentence[i];
    }
  }
  output11.innerHTML = `Речення без букв, що повторюються: ${newSentence}`;
});
