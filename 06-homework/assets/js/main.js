const outputs = document.querySelectorAll(".output");
const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

// 1. Створіть функцію, яка повертає список предметів для конкретного студента.

document.querySelector(".btn1").addEventListener("click", () => {
  const index = document.querySelector(".select1").value; // Отримаємо індекс студента від користувача
  // Отримуємо та форматуємо список предметів
  let subjects = Object.keys(students[index].subjects);
  let listOfsubjects = subjects.map((subject) => {
    return subject[0].toUpperCase() + subject.slice(1).replaceAll("_", " ");
  });
  outputs[0].innerHTML = `Список предметів студента ${students[index].name}: ${listOfsubjects}`;
});

// 2. Створіть функцію, яка поверне середню оцінку по усім предметам для переданого студента.

document.querySelector(".btn2").addEventListener("click", () => {
  const index = document.querySelector(".select2").value; // Отримаємо індекс студента від користувача
  let averageMark = getAverageMark(index);
  outputs[1].innerHTML = `Середній бал студента ${students[index].name}: ${averageMark}`;
});

function getAverageMark(index) {
  // Отримуємо масив оцінок студента по індексу
  let marks = [].concat(...Object.values(students[index].subjects));
  // Розраховуємо середнє значення масиву оцінок, округлене до 2 знаків після коми
  return (averageMark = (
    marks.reduce((sum, mark) => sum + mark) / marks.length
  ).toFixed(2));
}

// 3.Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту.

document.querySelector(".btn3").addEventListener("click", () => {
  const index = document.querySelector(".select3").value; // Отримаємо індекс студента від користувача
  let studentInfo = JSON.stringify(getStudentInfo()[index], null, 2); // Відображаємо дані відповідно до індексу
  outputs[2].innerHTML = `Загальна інформація по студенту = ${studentInfo}`;
});

function getStudentInfo() {
  // Формуємо масив з інформацією по всіх студентах
  return students.map((student, index) => ({
    name: student.name,
    course: student.course,
    averageMark: getAverageMark(index),
  }));
}

// 4. Створіть функцію, яка повертає імена студентів у алфавітному порядку

document.querySelector(".btn4").addEventListener("click", () => {
  let sortedStudents = students // Створюємо масив імен студентів і сортуємо по імені
    .map((student) => {
      return student.name;
    })
    .sort();
  outputs[3].innerHTML = `${sortedStudents}`;
});

// 5. Створіть функцію, яка повертає кращого студента зі списку по показнику середньої оцінки.

document.querySelector(".btn5").addEventListener("click", () => {
  let studentsInfo = getStudentInfo(); // Отримуємо масив даних з інформацією по кожному студенту
  // Сортуємо цей масив по показнику середньої оцінки
  let sortedStudentsInfo = studentsInfo.sort((a, b) =>
    a.averageMark < b.averageMark ? 1 : -1
  );
  let bestStudentsName = sortedStudentsInfo[0].name;
  outputs[4].innerHTML = `Найкращий студент: ${bestStudentsName}`;
});

// 6.Створіть функцію, яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

document.querySelector(".btn6").addEventListener("click", () => {
  const word = document
    .querySelector("#input06")
    .value.toLowerCase()
    .replaceAll(/\d/g, ""); // Отримуємо дані від користувача
  if (!word) {
    outputs[5].innerHTML = `Введіть будь ласка слово`;
  } else {
    let quantityOfLetters = {};
    for (let i = 0; i < word.length; i++) {
      quantityOfLetters[word[i]] = word.split(word[i]).length - 1; // Вносимо в масив дані літери і кількості повторів в слові
    }

    outputs[5].innerHTML = `Кількість букв в слові ${word}: ${JSON.stringify(
      quantityOfLetters,
      null,
      2
    )}`;
  }
});
