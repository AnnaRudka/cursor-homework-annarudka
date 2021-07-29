// Function from 7 homework

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMiddleTaxes() {
  return Math.round(this.tax * this.middleSalary);
}

export function getAverageTaxes() {
  const country = document.querySelector(".select7").value;
  let middleTaxes = 0;
  switch (country) {
    case "ukraine":
      middleTaxes = getMiddleTaxes.call(ukraine);
      break;
    case "latvia":
      middleTaxes = getMiddleTaxes.call(latvia);
      break;
    case "litva":
      middleTaxes = getMiddleTaxes.call(litva);
  }
  document.querySelector(
    ".output7"
  ).innerHTML = `The average tax amount of an IT specialist in this country ${middleTaxes} $`;
}
