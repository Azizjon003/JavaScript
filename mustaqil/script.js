"use strickt";
let usluga1 = function (summa) {
  if (summa > 50 && summa < 300) {
    return summa * 0.15;
  } else {
    return summa * 0.2;
  }
};
let total1 = function (usluga, summa) {
  return summa + usluga;
};

let arraySoni = Number(prompt("Array elementlari sonini kiriting"));
let bills = [];
let usluga = [];
let total = [];

for (let i = 0; i < arraySoni; i++) {
  let qiymat = Number(
    prompt(
      ` element raqami ${
        i + 1
      } elemntlarni kiriting(biz u qiymatlarni arrayga joylaymiz)`
    )
  );
  bills.push(qiymat);
}
console.log(bills);

for (let i = 0; i < bills.length; i++) {
  usluga.push(usluga1(bills[i]));
  total.push(total1(usluga1(bills[i]), bills[i]));
}
console.log(usluga);
console.log(total);
let calcAverage = function (a) {
  let sum = Number(0);
  for (let i = 0; i < a.length; i++) {
    sum = Number(sum + a[i]);
  }
  console.log(sum / a.length);
};
calcAverage(bills);

// let a = array[0];
// let b = array[0];
// for (let i = 0; i < array.length; i++) {
//   if (b > array[i]) {
//     b = array[i];
//   }

//   if (a < array[i]) {
//     a = array[i];
//   }
// }

// alert(`kichik son ${b}`);
// alert(`kattason son ${a}`);
// let d = "joylaymiz";
// let r = d.split("");
// console.log(r.join(" azizjon "));
