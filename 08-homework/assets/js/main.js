class Student {
  constructor(university, course, fullname) {
    // Набір властивостей студента
    this.university = university;
    this.course = course;
    this.fullname = fullname;
    this.marks = [5, 5];
    this.status = status;
  }
  getInfo() {
    //Метод повертає сукупну інформацію про студента
    this.status === "dissmissed"
      ? console.log(null, `Студент ${this.fullname} виключений`)
      : console.log(
          `Студент ${this.course}го курсу ${this.university}, ${this.fullname}`
        );
  }
  get getMarks() {
    //Геттер оцінок
    this.status === "dissmissed"
      ? console.log(null, `Студент ${this.fullname} виключений`)
      : console.log(`Оцінки студента: ${this.marks}`);
  }
  set newMark(mark) {
    // Сеттер оцінок
    this.status === "dissmissed"
      ? console.log(null, `Студент ${this.fullname} виключений`)
      : this.marks.push(mark);
    console.log(`Оновлені оцінки студента: ${this.marks}`);
  }
  getAverageMark() {
    // метод отримання середнього балу
    return (
      this.marks.reduce((sum, mark) => sum + mark) / this.marks.length
    ).toFixed(2);
  }
  dismissStudent() {
    // Метод виключення студента (унеможливлює отримання загальної інформації і нові оцінки )
    this.status = "dissmissed";
  }
  recoverStudent() {
    // Метод поновлення студента
    this.status = "recovered";
  }
}

const orest = new Student("Harvard University", 1, "Orest Rudka");
orest.getInfo();
orest.getMarks;
orest.newMark = 5;
orest.getMarks;
console.log(orest.getAverageMark());
orest.dismissStudent();
orest.newMark = 4;
orest.getMarks;
console.log(orest.getAverageMark());
orest.recoverStudent();
orest.newMark = 4;
orest.getMarks;
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
    this.status === "dissmissed" || this.getAverageMark() < 4
      ? console.log(`У ${this.fullname} немає стипендії`)
      : console.log(`Ви отримали ${scholarship} грн. стипендії`);
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
