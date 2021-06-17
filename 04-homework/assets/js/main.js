const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];
const outputs = document.querySelectorAll(".output");

// Розділіть студентів на пари(хлопець + дівчина) для роботи над проєктом.

function getPairs(students) {
  let maleStudents = [];
  let femaleStudents = [];
  let result = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].charAt(students[i].length - 1) === "а") {
      femaleStudents.push(students[i]);
    } else {
      maleStudents.push(students[i]);
    }
  }
  for (let i = 0; i < 3; i++) {
    result.push([maleStudents[i], femaleStudents[i]]);
  }
  return result;
}
const pairs = getPairs(students);
for (let i = 0; i < pairs.length; i++) {
  outputs[0].innerHTML += `<li>${pairs[i]}</li>`;
}

// Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.

function getStudentThemes(pairs, themes) {
  const result = [];
  for (let i = 0; i < pairs.length; i++) {
    result.push([pairs[i], themes[i]]); // Створюємо новий масив (пара + тема)
  }
  return result;
}
const studentThemes = getStudentThemes(pairs, themes);
for (let i = 0; i < studentThemes.length; i++) {
  outputs[1].innerHTML += `<li>${studentThemes[i]}</li>`;
}

// Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function getStudentMarks(students, marks) {
  const result = [];
  for (let i = 0; i < students.length; i++) {
    result.push([students[i], marks[i]]); // Створюємо новий масив (студенти + оцінки)
  }
  return result;
}
const studentMarks = getStudentMarks(students, marks);
for (let i = 0; i < studentMarks.length; i++) {
  outputs[2].innerHTML += `<li>${studentMarks[i]}</li>`;
}

// Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив)

function getMarksForPairs(studentThemes) {
  const result = [];
  for (let i = 0; i < studentThemes.length; i++) {
    const mark = Math.floor(Math.random() * 5 + 1); // Генеруємо рандомну оцінку
    result.push([studentThemes[i], mark]); // Створюємо новий масив (пара + тема + оцінка)
  }
  return result;
}
const marksForPairs = getMarksForPairs(studentThemes);
for (let i = 0; i < marksForPairs.length; i++) {
  outputs[3].innerHTML += `<li>${marksForPairs[i]}</li>`;
}
