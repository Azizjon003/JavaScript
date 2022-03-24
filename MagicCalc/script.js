let inputCalc = document.querySelector(".oyna");
let acNol = document.querySelector(".ac");
let plusMinus = document.querySelector(".plusAyrish");
let bolish = document.querySelector(".bolish");
let kopaytir = document.querySelector(".kopaytirish");
let ayirish = document.querySelector(".ayirish");
let qoshish = document.querySelector(".qoshish");
let javob = document.querySelector(".javob");
let item7 = document.querySelector(".item7");
let item8 = document.querySelector(".item8");
let item9 = document.querySelector(".item9");
let item4 = document.querySelector(".item4");
let item5 = document.querySelector(".item5");
let item6 = document.querySelector(".item6");
let item3 = document.querySelector(".item3");
let item2 = document.querySelector(".item2");
let item1 = document.querySelector(".item1");
let item0 = document.querySelector(".item0");
let yigindi;
let ayirma;
let kopaytma;
let bolinma;
let boxArr = [];
let boxArr1 = [];

item1.addEventListener("click", () => {
  boxArr.push(1);
  inputCalc.value = boxArr.join("");
});
item2.addEventListener("click", () => {
  boxArr.push(2);
  inputCalc.value = boxArr.join("");
});
item3.addEventListener("click", () => {
  boxArr.push(3);
  inputCalc.value = boxArr.join("");
});
item4.addEventListener("click", () => {
  boxArr.push(4);
  inputCalc.value = boxArr.join("");
});

item5.addEventListener("click", () => {
  boxArr.push(5);
  inputCalc.value = boxArr.join("");
});
item6.addEventListener("click", () => {
  boxArr.push(6);
  inputCalc.value = boxArr.join("");
});

item7.addEventListener("click", () => {
  boxArr.push(7);
  inputCalc.value = boxArr.join("");
});
item8.addEventListener("click", () => {
  boxArr.push(8);
  inputCalc.value = boxArr.join("");
});

item9.addEventListener("click", () => {
  boxArr.push(9);
  inputCalc.value = boxArr.join("");
});
item0.addEventListener("click", () => {
  boxArr.push(0);
  inputCalc.value = boxArr.join("");
});
bolish.addEventListener("click", () => {
  boxArr.push(" ", "/", " ");
  inputCalc.value = boxArr.join("");
});
kopaytir.addEventListener("click", () => {
  boxArr.push(" ", "*", " ");
  inputCalc.value = boxArr.join("");
});
ayirish.addEventListener("click", () => {
  boxArr.push(" ", "-", " ");
  inputCalc.value = boxArr.join("");
});
qoshish.addEventListener("click", () => {
  boxArr.push(" ", "+", " ");
  inputCalc.value = boxArr.join("");
});

// function mainFunc() {
//   qosh(boxArr);
//   Ayir(boxArr);
//   kopayt(boxArr);
//   bol(boxArr);
//   inputCalc.textContent = boxArr.join("");
// }

acNol.addEventListener("click", () => {
  boxArr.splice(0, boxArr.length);
  boxArr1.splice(0, boxArr1.length);
  inputCalc.value = boxArr;
});

javob.addEventListener("click", () => {
  console.log(boxArr);
  let boluvchi;
  boxArr = boxArr.join("").split(" ");
  console.log(boxArr);

  for (let i = 0; i < boxArr.length; i++) {
    if (boxArr[i] == "/") {
      let bir = boxArr[i - 1];
      console.log(bir);
      let ikkinchi = Number(boxArr[i + 1]);
      console.log(ikkinchi);
      let bolinma = bir / ikkinchi;
      console.log(Number(boxArr[i]) / Number(boxArr[i + 3]));
      inputCalc.value = bir / ikkinchi;
      console.log(boxArr);
      boxArr.splice(i - 1, 3, bolinma);
      // i = boxArr.length;
      console.log(i);
    }
  }
  for (let i = 0; i < boxArr.length; i++) {
    if (boxArr[i] == "*") {
      let bir = boxArr[i - 1];
      console.log(bir);
      let ikkinchi = Number(boxArr[i + 1]);
      console.log(ikkinchi);
      let bolinma = bir * ikkinchi;
      console.log(Number(boxArr[i]) / Number(boxArr[i + 3]));
      inputCalc.value = bir * ikkinchi;
      console.log(boxArr);
      boxArr.splice(i - 1, 3, bolinma);
      // i = boxArr.length;
      console.log(i);
    }
  }
  for (let i = 0; i < boxArr.length; i++) {
    if (boxArr[i] == "-") {
      let bir = boxArr[i - 1];
      console.log(bir);
      let ikkinchi = Number(boxArr[i + 1]);
      console.log(ikkinchi);

      let bolinma = bir - ikkinchi;
      console.log(Number(boxArr[i]) / Number(boxArr[i + 3]));
      inputCalc.value = bir - ikkinchi;
      boxArr.splice(i - 1, 3, bolinma);
      console.log(boxArr);
      // i = boxArr.length;
      console.log(i);
    }
  }
  for (let i = 0; i < boxArr.length; i++) {
    if (boxArr[i] == "+") {
      let bir = boxArr[i - 1];
      console.log(bir);
      let ikkinchi = Number(boxArr[i + 1]);
      console.log(ikkinchi);
      let bolinma = bir + ikkinchi;
      console.log(Number(boxArr[i]) / Number(boxArr[i + 3]));
      inputCalc.value = bir + ikkinchi;
      console.log(boxArr);
      boxArr.splice(i - 1, 3, bolinma);
      // i = boxArr.length;
      console.log(i);
    }
  }
});
// let inputCalc = document.querySelector(".oyna");
// let acNol = document.querySelector(".ac");
// let plusMinus = document.querySelector(".plusAyrish");
// let bolish = document.querySelector(".bolish");
// let kopaytir = document.querySelector(".kopaytirish");
// let ayirish = document.querySelector(".ayirish");
// let qoshish = document.querySelector(".qoshish");
// let javob = document.querySelector(".javob");
// let item7 = document.querySelector(".item7");
// let item8 = document.querySelector(".item8");
// let item9 = document.querySelector(".item9");
// let item4 = document.querySelector(".item4");
// let item5 = document.querySelector(".item5");
// let item6 = document.querySelector(".item6");
// let item3 = document.querySelector(".item3");
// let item2 = document.querySelector(".item2");
// let item1 = document.querySelector(".item1");
// let item0 = document.querySelector(".item1");
// let yigindi;
// let ayirma;
// let kopaytma;
// let bolinma;
// let boxArr = [];
// let boxArr1 = [];

// item1.addEventListener("click", () => {
//   boxArr.push(1);
//   boxArr1.push(1);
//   mainFunc();
//   console.log(boxArr);
// });
// item2.addEventListener("click", () => {
//   boxArr.push(2);
//   boxArr1.push(2);
//   mainFunc();
//   console.log(boxArr);
// });
// item3.addEventListener("click", () => {
//   boxArr.push(3);
//   boxArr1.push(3);
//   mainFunc();
//   console.log(boxArr);
// });
// item4.addEventListener("click", () => {
//   boxArr.push(4);
//   boxArr1.push(4);
//   mainFunc();
//   console.log(boxArr);
// });

// item5.addEventListener("click", () => {
//   boxArr.push(5);
//   boxArr1.push(5);
//   mainFunc();
//   console.log(boxArr);
// });
// item6.addEventListener("click", () => {
//   boxArr.push(6);
//   boxArr1.push(6);
//   mainFunc();
//   console.log(boxArr);
// });

// item7.addEventListener("click", () => {
//   boxArr.push(7);
//   boxArr1.push(7);
//   mainFunc();
//   console.log(boxArr);
// });
// item8.addEventListener("click", () => {
//   boxArr.push(8);
//   boxArr1.push(8);
//   mainFunc();
//   console.log(boxArr);
// });

// item9.addEventListener("click", () => {
//   boxArr.push(9);
//   boxArr1.push(9);
//   mainFunc();
//   console.log(boxArr);
// });
// bolish.addEventListener("click", () => {
//   boxArr.push("/");
//   boxArr1.push("/");
//   mainFunc();
//   console.log(boxArr);
// });
// kopaytir.addEventListener("click", () => {
//   boxArr.push("*");
//   boxArr1.push("*");
//   mainFunc();
//   console.log(boxArr);
// });
// ayirish.addEventListener("click", () => {
//   boxArr.push("-");
//   boxArr1.push("-");
//   mainFunc();
//   console.log(boxArr);
// });
// qoshish.addEventListener("click", () => {
//   boxArr.push("+");
//   boxArr1.push("+");
//   mainFunc();
//   console.log(boxArr);
// });

// function mainFunc() {
//   inputCalc.textContent = boxArr.join("");

//   qosh(boxArr);
//   Ayir(boxArr);
//   kopayt(boxArr);
//   bol(boxArr);
// }

// function qosh(arr) {
//   let ozgar = arr.join("").split("+");
//   let sum1 = Number(ozgar[0]);
//   let sum2 = Number(ozgar[1]);
//   yigindi = sum1 + sum2;
// }

// function Ayir(arr) {
//   let ozgar = arr.join("").split("-");
//   let sum1 = Number(ozgar[0]);
//   let sum2 = +ozgar[1];
//   ayirma = sum1 - sum2;
// }
// function kopayt(arr) {
//   let ozgar = arr.join("").split("*");
//   let sum1 = +ozgar[0];
//   let sum2 = +ozgar[1];
//   kopaytma = sum1 * sum2;
// }
// function bol(arr) {
//   let ozgar = arr.join("").split("/");
//   let sum1 = +ozgar[0];
//   let sum2 = +ozgar[1];
//   bolinma = sum1 / sum2;
// }
// acNol.addEventListener("click", () => {
//   boxArr = [];
//   mainFunc();
//   console.log(boxArr);
// });
// javob.addEventListener("click", () => {
//   if (boxArr1.includes("+")) inputCalc.textContent = yigindi;
//   if (boxArr1.includes("-")) inputCalc.textContent = ayirma;
//   if (boxArr1.includes("*")) inputCalc.textContent = kopaytma;
//   if (boxArr1.includes("/")) inputCalc.textContent = bolinma;
// });
