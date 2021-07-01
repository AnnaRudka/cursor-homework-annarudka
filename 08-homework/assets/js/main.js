class Student {
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

const orest = new Student("Harvard University", 1, "Orest Rudka");
orest.getInfo();
orest.studentMarks;
orest.studentMarks = 5;
orest.studentMarks;
console.log(orest.getAverageMark());
orest.dismissStudent();
orest.studentMarks = 4;
orest.studentMarks;
console.log(orest.getAverageMark());
orest.recoverStudent();
orest.studentMarks = 4;
orest.studentMarks;
console.log(orest.getAverageMark());

// Advanced

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    setInterval(() => this.getScholarship(), 30000); // Періодичний виклик методу
  }

  getScholarship() {
    // Метод отримання стипендії за умови активного статусу і високого середнього балу
    const scholarship = 1400;
    this.isActive && this.getAverageMark() >= 4
      ? console.log(`Ви отримали ${scholarship} грн. стипендії`)
      : console.log(`У ${this.fullname} немає стипендії`);
  }
}

const viktoria = new BudgetStudent(
  "University of Oxford",
  1,
  "Viktoria Maksymchuk"
);
viktoria.getInfo();
viktoria.getScholarship();
viktoria.dismissStudent();
viktoria.getScholarship();
viktoria.recoverStudent();
viktoria.getScholarship();
