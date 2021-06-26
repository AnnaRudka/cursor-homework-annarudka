const outputs = document.querySelectorAll(".output");

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Створіть функцію, яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.

function getMyTaxes(salary) {
  return Math.round(salary * this.tax);
}

// 2. Створіть функцію, яка рахує скільки у середньому податків платять IT-спеціалісти у кожній країні.
function getMiddleTaxes() {
  return Math.round(this.tax * this.middleSalary);
}

// 3. Створіть функцію, яка рахує скільки всього податків платять IT-спеціалісти у кожній країні.

function getTotalTaxes() {
  return Math.round(this.tax * this.middleSalary * this.vacancies);
}

// 4. Створіть функцію, яка буде писати об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.

function getMySalary() {
  const startValue = 1500;
  const endValue = 2000;
  const salary = Math.trunc(
    startValue + Math.random() * (endValue - startValue)
  );
  const taxes = (salary * this.tax).toFixed(2);
  const profit = (salary - taxes).toFixed(2);
  return { salary, taxes, profit };
}

document.querySelector(".btn").addEventListener("click", () => {
  const country = document.querySelector(".select1").value; // Отримаємо назву країни та суму зарплати від користувача
  const salary = document.querySelector("#input01").value;
  if (salary === "") {
    outputs[0].innerHTML = `Введіть суму зарплати`;
  } else {
    let myTaxes = 0;
    let middleTaxes = 0;
    let totalTaxes = 0;
    let myprofit = {};
    let img = "";
    let timerId = 0;
    setTimeout(() => {
      clearInterval(timerId);
    }, 15000);
    switch (country) {
      case "ukraine":
        img = '<img src="./assets/images/ukraine.jpg">';
        myTaxes = getMyTaxes.call(ukraine, salary);
        middleTaxes = getMiddleTaxes.call(ukraine);
        totalTaxes = getTotalTaxes.call(ukraine);
        timerId = setInterval(() => {
          myprofit = JSON.stringify(getMySalary.call(ukraine), null, 2);
          outputs[3].innerHTML = `${img} Рандомні дані по країні ${myprofit}`;
        }, 10000);
        console.log(timerId);
        break;
      case "latvia":
        img = '<img src="./assets/images/latvia.png">';
        myTaxes = getMyTaxes.call(latvia, salary);
        middleTaxes = getMiddleTaxes.call(latvia);
        totalTaxes = getTotalTaxes.call(latvia);
        timerId = setInterval(() => {
          myprofit = JSON.stringify(getMySalary.call(latvia), null, 2);
          outputs[3].innerHTML = `${img} Рандомні дані по країні ${myprofit}`;
        }, 10000);
        break;
      case "litva":
        img = '<img src="./assets/images/litva.png">';
        myTaxes = getMyTaxes.call(litva, salary);
        middleTaxes = getMiddleTaxes.call(litva);
        totalTaxes = getTotalTaxes.call(litva);
        timerId = setInterval(() => {
          myprofit = JSON.stringify(getMySalary.call(litva), null, 2);
          outputs[3].innerHTML = `${img} Рандомні дані по країні ${myprofit}`;
        }, 10000);
    }
    outputs[0].innerHTML = `${img} В цій країні з ${salary} $ ви заплатите ${myTaxes} $ податку`;
    outputs[1].innerHTML = `${img} Середня сума податку ІТ-спеціаліста в цій країні ${middleTaxes} $`;
    outputs[2].innerHTML = `${img} Всього в цій країні IT-спеціалісти платять ${totalTaxes} $ податків`;
  }
});
