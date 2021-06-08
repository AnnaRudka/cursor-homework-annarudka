/* Необхідно написати програму, яка виконує складання чисел від N до M (N та M – задаються користувачем),
а також програма має вміти пропускати парні числа */

// Додаємо функцію, яка реагує на подію

const form = document.querySelector("form");
const output = document.querySelector(".output");

form.addEventListener("submit", (event) => {
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
    alert("Будь ласка введіть цілі числа");
    output.innerHTML = "Суму чисел неможливо розрахувати!";
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
    output.innerHTML = `Сума чисел в діапазоні:  ${sum}`;
  }
  form.reset(); // Очищаємо форму
});
