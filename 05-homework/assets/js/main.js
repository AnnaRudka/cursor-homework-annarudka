const outputs = document.querySelectorAll(".output");
let array = [15, 10, 4, 30, 8, 2, 9, 14, 6, 2, 3, 2, 6];

// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.

document.querySelector(".btn1").addEventListener("click", () => {
  const firstNumber = document.querySelector("#input01-first").value; // Отримаємо діапазон та довжину масиву від користувача
  const secondNumber = document.querySelector("#input01-second").value;
  const length = document.querySelector("#input01-length").value;
  if (firstNumber === "" || secondNumber === "" || length === "") {
    outputs[0].innerHTML = "Будь ласка введіть значення";
  } else {
    let randomArr = [];
    const startValue = Math.min(firstNumber, secondNumber); // Сортуємо значення початку і кінця діапазону
    const endValue = Math.max(firstNumber, secondNumber);
    // Заповнюємо масив рандомними числами в діапазоні
    for (let i = 0; i < length; i++) {
      randomArr.push(
        Math.trunc(startValue + Math.random() * (endValue - startValue))
      );
    }
    outputs[0].innerHTML = `Масив в діапазоні від ${startValue} до ${endValue}: ${randomArr}`;
  }
});

// 3.Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.

document.querySelector(".btn3").addEventListener("click", () => {
  const arrayOfIntegers = array.filter((element) => Number.isInteger(element));
  let sum = 0;
  for (let element of arrayOfIntegers) {
    sum += element;
  }
  let averageValue = sum / arrayOfIntegers.length;
  outputs[1].innerHTML = `Середнє арифметичне чисел в масиві = ${averageValue}`;
});

// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.

document.querySelector(".btn4").addEventListener("click", () => {
  // Ігноруємо нецілі числа та отримаємо впорядкований масив за допомогою сортування
  const arrayOfIntegers = array
    .filter((element) => Number.isInteger(element))
    .sort((a, b) => {
      return a - b;
    });
  let median = 0;
  let middleOfArray = arrayOfIntegers.length / 2;
  // Розраховуємо медіану залежно від кількості елементів в масиві
  if (middleOfArray % 1 == 0) {
    median =
      (arrayOfIntegers[middleOfArray - 1] + arrayOfIntegers[middleOfArray]) / 2;
  } else {
    median = arrayOfIntegers[Math.floor(middleOfArray)];
  }
  outputs[2].innerHTML = `Медіана масиву = ${median}`;
});

// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції

document.querySelector(".btn5").addEventListener("click", () => {
  let arrayOfOdd = array.filter((element) => element % 2 !== 0);
  outputs[3].innerHTML = `Масив без парних чисел: ${arrayOfOdd}`;
});

// 6.Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0

document.querySelector(".btn6").addEventListener("click", () => {
  let lengthArrayOfPositive = array.filter((element) => element > 0).length;
  outputs[4].innerHTML = `Кількість додатніх чисел в масиві: ${lengthArrayOfPositive}`;
});

// 7.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5

document.querySelector(".btn7").addEventListener("click", () => {
  let arrayOfDividedByFive = array.filter((element) => element % 5 == 0);
  outputs[5].innerHTML = `Числа, що кратні 5: ${arrayOfDividedByFive}`;
});

// 8. Створіть функцію, яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).

document.querySelector(".btn8").addEventListener("click", () => {
  const sentence = document.querySelector("#input08-sentence").value; // Отримуємо дані від користувача
  const badword = document.querySelector("#input08-word").value.toLowerCase();
  if (sentence === "") {
    outputs[6].innerHTML = `Введіть будь ласка речення`;
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
    outputs[6].innerHTML = `Відредаговане речення: ${correctSentence}`;
  }
});

// 9.Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.

document.querySelector(".btn9").addEventListener("click", () => {
  const word = document.querySelector("#input09").value.toLowerCase(); // Отримаємо дані від користувача
  let arrayOfletters = word.replaceAll(" ", "").split(""); // Cтворюємо масив з букв слова
  let result = [];
  for (let i = 0; i < arrayOfletters.length; i++) {
    [a, b, c, ...arrayOfletters] = arrayOfletters; // Використовуємо деструктуризацію масиву для об'єднання елементів по 3
    result.push(a + b + c);
  }
  outputs[7].innerHTML = `Слово ${word} складається з таких складів: ${result}`;
});
