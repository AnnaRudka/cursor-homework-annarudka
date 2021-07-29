// Function from 4 homework
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

export function getPairs(students) {
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
  document.querySelector(".output4").innerHTML += `<li>${pairs[i]}</li>`;
}
