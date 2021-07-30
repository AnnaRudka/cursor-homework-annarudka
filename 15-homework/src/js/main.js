import "../css/style.css";
import getAveragePrice from "./function1";
import getNumbersSum from "./function2";
import getCorrectName from "./function3";
import { getPairs } from "./function4";
import getOnlyGoodWords from "./function5";
import getNumberOfLetters from "./function6";
import { getAverageTaxes, getMiddleTaxes } from "./function7";
import Student from "./function8";
import generateBlocks from "./function9";
import getRandomChinese from "./function11";
import { getGeneratorValue, startGenerator } from "./function14";
import { createPlanets, onPrevClick, onNextClick } from "./function13";
import "regenerator-runtime/runtime";

// 1 homework

document.querySelector(".btn1").addEventListener("click", getAveragePrice);

//3 homework
document.querySelector(".btn3").addEventListener("click", getCorrectName);

// 4 homework
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
getPairs(students);

//5 homework
document.querySelector(".btn5").addEventListener("click", getOnlyGoodWords);

//6 homework

document.querySelector(".btn6").addEventListener("click", getNumberOfLetters);

//7 homework

document.querySelector(".btn7").addEventListener("click", getAverageTaxes);

// 8 homework
console.log("8 homework");
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

//9 homework
document.querySelector(".btn9").addEventListener("click", generateBlocks);

//11 homework
document.querySelector(".btn11").addEventListener("click", getRandomChinese);

//13 homework

document.querySelector(".btn13").addEventListener("click", createPlanets(1));
document.getElementById("btnPrev").addEventListener("click", onPrevClick);
document.getElementById("btnNext").addEventListener("click", onNextClick);

//14 homework

document
  .getElementById("btn-next")
  .addEventListener("click", getGeneratorValue);
document.getElementById("btn-start").addEventListener("click", startGenerator);
