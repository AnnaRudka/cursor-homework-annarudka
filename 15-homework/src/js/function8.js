// Function from 8 homework

export default class Student {
  constructor(university, course, fullname) {
    // Набір властивостей студента
    this.university = university;
    this.course = course;
    this.fullname = fullname;
    this.marks = [5, 5];
    this.isActive = true;
  }
  getInfo() {
    //Метод повертає сукупну інформацію про студента
    this.isActive
      ? console.log(
          `Студент ${this.course}го курсу ${this.university}, ${this.fullname}`
        )
      : console.log(null, `Студент ${this.fullname} виключений`);
  }
  get studentMarks() {
    //Геттер оцінок
    console.log(`Оцінки студента: ${this.marks}`);
  }
  set studentMarks(mark) {
    // Сеттер оцінок
    this.isActive
      ? this.marks.push(mark)
      : console.log(null, `Студент ${this.fullname} виключений`);
  }
  getAverageMark() {
    // метод отримання середнього балу
    return (
      this.marks.reduce((sum, mark) => sum + mark) / this.marks.length
    ).toFixed(2);
  }
  dismissStudent() {
    // Метод виключення студента (унеможливлює отримання загальної інформації і нові оцінки )
    this.isActive = false;
  }
  recoverStudent() {
    // Метод поновлення студента
    this.isActive = true;
  }
}
