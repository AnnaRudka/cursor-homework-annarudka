const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];
const output = document.querySelector(".output");

// Розділіть студентів на пари(хлопець + дівчина) для роботи над проєктом.
function getPairs(students) {
  return [
    [students[0], students[2]],
    [students[1], students[3]],
    [students[4], students[5]],
  ];
}
const pairs = getPairs(students);

// Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.

function getStudentThemes(pairs, themes) {
  const result = [];
  for (let i = 0; i < pairs.length; i++) {
    result.push([pairs[i], themes[i]]); // Створюємо новий масив (пара + тема)
  }
  return result;
}
const studentThemes = getStudentThemes(pairs, themes);

// Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function getStudentMarks(students, marks) {
  const result = [];
  for (let i = 0; i < students.length; i++) {
    result.push([students[i], marks[i]]); // Створюємо новий масив (студенти + оцінки)
  }
  return result;
}
const studentMarks = getStudentMarks(students, marks);

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

output.innerHTML = `
<ul>1.Пари студентів:
<li>${pairs[0]}</li>
<li>${pairs[1]}</li>
<li>${pairs[2]}</li>
</ul>
<ul>2.Пари студентів і назви проектів:
<li>${studentThemes[0]}</li>
<li>${studentThemes[1]}</li>
<li>${studentThemes[2]}</li>
</ul>
<ul>3.Оцінки студентів::
<li>${studentMarks[0]}</li>
<li>${studentMarks[1]}</li>
<li>${studentMarks[2]}</li>
<li>${studentMarks[3]}</li>
<li>${studentMarks[4]}</li>
<li>${studentMarks[5]}</li>
</ul>
<ul>4.Оцінки пар студентів::
<li>${marksForPairs[0]}</li>
<li>${marksForPairs[1]}</li>
<li>${marksForPairs[2]}</li>
</ul>
`;
