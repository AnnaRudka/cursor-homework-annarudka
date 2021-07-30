// Function from 11 homework
import "regenerator-runtime/runtime";

export default async function getRandomChinese() {
  const length = document.querySelector("#length").value; // Received a length from the user
  if (!length) {
    //Сhecked if the value of length is valid
    document.querySelector(".output11").innerHTML = "Please enter a value";
  } else {
    let result = "";
    // Formed a loop with a promise for asynchronous operations
    for (let i = 0; i < length; i++) {
      let promise = new Promise((resolve) => {
        setTimeout(() => {
          // Received a hieroglyph from the value of Date.now()
          const sign = String.fromCharCode(String(Date.now()).slice(-5));
          resolve(sign);
        }, 50);
      });
      result += await promise; // Formed a result
    }
    document.querySelector(".output11").innerHTML = `${result}  <br>
    Execution time: ${length * 50} ms`;
  }
}
