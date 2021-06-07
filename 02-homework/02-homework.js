/* Необхідно написати програму, яка виконує складання чисел від N до M (N та M – задаються користувачем),
а також програма має вміти пропускати парні числа */

// Додаємо функцію, яка реагує на подію

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // Отримуємо дані від користувача з форми
  const form = document.querySelector("form");
  const startValue = +form.elements.start.value;
  const endValue = +form.elements.end.value;
  const onlyOddNumbers = form.elements.checkbox.checked;
  let sum = 0;

  // Перевіряємо чи отримані дані є коректними
  if (
    startValue >= endValue ||
    startValue === "" ||
    isNaN(startValue) ||
    !Number.isInteger(startValue) ||
    endValue === "" ||
    isNaN(endValue) ||
    !Number.isInteger(endValue)
  ) {
    alert(
      "Будь ласка введіть цілі числа і початкове значення більше за кінцеве"
    );
  } else {
    for (let i = startValue; i <= endValue; i++) {
      if (onlyOddNumbers && i % 2 === 0) {
        continue; // Пропускаємо парні числа, якщо користувач це вказав
      }
      sum += i; // Розраховуємо суму чисел в діапазоні
    }
  }

  // Виводимо результат користувачу
  document.querySelector(
    ".output"
  ).innerHTML = `Сума чисел в діапазоні від  ${startValue} до ${endValue}:  ${sum}`;

  form.reset(); // Очищаємо форму
});
