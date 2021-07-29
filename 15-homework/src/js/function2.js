// Function from 2 homework
const form = document.querySelector("form");
form.addEventListener("submit", getNumbersSum);

export default function getNumbersSum(event) {
  event.preventDefault();

  // Отримуємо дані від користувача з форми
  const firstNumber = +form.elements.start.value;
  const secondNumber = +form.elements.end.value;
  const onlyOddNumbers = form.elements.checkbox.checked;
  let sum = 0;

  // Перевіряємо чи отримані дані є коректними
  if (
    firstNumber === "" ||
    isNaN(firstNumber) ||
    !Number.isInteger(firstNumber) ||
    secondNumber === "" ||
    isNaN(secondNumber) ||
    !Number.isInteger(secondNumber)
  ) {
    outputs[1].innerHTML = "Please enter integers!";
  } else {
    const startValue = Math.min(firstNumber, secondNumber);
    const endValue = Math.max(firstNumber, secondNumber);

    for (let i = startValue; i <= endValue; i++) {
      if (onlyOddNumbers && i % 2 === 0) {
        continue; // Пропускаємо парні числа, якщо користувач це вказав
      }
      sum += i; // Розраховуємо суму чисел в діапазоні
    }
    // Виводимо результат користувачу
    document.querySelector(
      ".output2"
    ).innerHTML = `Сума чисел в діапазоні з ${startValue} до ${endValue}:  ${sum}`;
  }
  form.reset(); // Очищаємо форму
}
