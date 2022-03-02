// let inc = 1;
// for (let i = 0; i < 8; i++) {
//   switch (i) {
//     case 1:
//       console.log("Dushanba");
//       break;

//     case 2:
//       console.log("seshanba");
//       break;

//     case 3:
//       console.log("chorshanba");
//       break;

//     case 4:
//       console.log("payshanba");
//       break;
//     case 5:
//       console.log("Juma");
//       break;
//     case 6:
//       console.log("shanba");
//       break;
//     case 7:
//       console.log("Yakshanba");
//       break;

//     default:
//       console.log(" ");
//       break;
//   }
//   for (let j = 1; j < inc; j++) {
//     if (inc === 8) {
//       console.log("dars yoq");
//       break;
//     }
//     console.log(`${j} para`);
//   }
//   inc++;
// }

// let soqqa = Math.trunc(Math.random() * 9 + 1);

// while (!(soqqa > 5 && soqqa % 2 !== 0)) {
//   console.log(`ishlaydi ${soqqa}`);
//   soqqa = Math.trunc(Math.random() * 9 + 1);
// }
// console.log(`ishlamaydi ${soqqa}`);

// for (let i = 0; i < 3; i++) {
//   console.log(`${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`${j}`);
//   }
// }
// function miniMaxSum(arr) {
//   // Write your code here
//   let min = arr[0];
//   let max = arr[0];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//     sum = sum + arr[i];
//   }
//   let max1 = sum - min;
//   let min1 = sum - max;
//   let w = [];
//   w.push(min1, max1);
//   let c = w.join(" ");
//   return c;
// }
// console.log(miniMaxSum([1, 2, 3, 4, 5]));

// let vaqt = String(prompt("vaqtni kiritng"));
// let arr = vaqt.split("");
// let pops = arr;

// for (i = 0; i < arr.length; i++) {
//   if (arr[arr.length - 2] === "P" && arr[arr.length - 1] === "M") {
//     pops.pop("M");
//     pops.pop("P");
//     if(arr[0]==="0"){

//     }
//     // let r = pops.join("");
//     alert(`${}`);
//   }
// }
// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   let scoreOl = 0;
//   let scoreOr = 0;
//   for (let i = 0; i < apples.length; i++) {
//     if (apples[i] >= 0 && Math.abs(s - a) <= apples[i] && t - a >= apples[i])
//       scoreOl++;
//   }
//   for (let i = 0; i < oranges.length; i++) {
//     if (
//       oranges[i] <= 0 &&
//       b - t <= Math.abs(oranges[i]) &&
//       b - s >= Math.abs(oranges[i])
//     )
//       scoreOr++;
//   }
//   console.log(scoreOl);
//   console.log(scoreOr);
// }
// countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
// function kangaroo(x1, v1, x2, v2) {
//   while (true) {
//     x2 = v2 + x2;
//     x1 = v1 + x1;
//     if (v1 <= v2) return "NO";
//     if (x1 == x2) return "YES";
//     else if (x1 > x2) return "NO";
//   }
// }

// console.log(kangaroo(0, 3, 4, 2));
// let hisobla = function (a) {
//   let s = 0;
//   let b = 0;
//   let const1 = 0;
//   while (a !== 0) {
//     s = a % 10;
//     b = s + b;
//     const1++;
//     a = Math.trunc(a / 10);
//   }
//   console.log(b);
//   console.log(const1);
// };

// hisobla(645);
// function breakingRecords(scores) {
//   let min = scores[0];
//   let max = scores[0];
//   let cont = 0;
//   let cont1 = 0;
//   for (let i = 0; i < scores.length; i++) {
//     if (max < scores[i]) {
//       max = scores[i];
//       cont++;
//     }
//     if (min > scores[i]) {
//       min = scores[i];
//       cont1++;
//     }
//   }
//   console.log(`${cont} ${cont1}`);
// }
// breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
// function birthday(s, d, m) {
//   let sum = 0;
//   let sana = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < m; j++) {
//       sum = sum + s[j];
//       if (sum === d) {
//         sana++;
//       }
//     }
//     sum = 0;
//   }
//   return sana;
// }

// function divisibleSumPairs(n, k, ar) {
//   let cont = 0;
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n && j !== i; j++) {
//       sum = ar[i] + ar[j];
//       if (sum % k === 0) {
//         cont++;
//       }
//     }
//   }

//   console.log(cont);
// }
// divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
// let str = "Toshkent gozal toshkent";
// let str1 = "jyfffffffffffgh";
// let ful = "          salom    dunoy    rthhhhhhhhhh  ";
// // ful = ful.concat(str, str1);
// console.log(ful.charAt(10));
// let str = "salom";
// str = str.toLocaleUpperCase();
// // let arr = [];
// let arr = str.split("");
// for (let i = 0; i < arr.length; i++) {
//   // console.log(arr[i]);
//   if (arr[i] === "L") {
//     arr[i] = "LL";
//   }
// }
// console.log(arr);
// let yakk = function (str) {
//   let str1 = str.split("yak");
//   str1 = str1.join("");
//   console.log(str1);
// };
// yakk("yakpak");
// function migratoryBirds(arr) {
//   // Write your code here
//   let num;
//   let count1;
//   let str = 0;
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     count1 = 0;
//     for (let j = i; j < n; j++) {
//       if (arr[i] == arr[j]) {
//         count1++;
//       }
//     }
//     if (count1 > str) {
//       str = count1;
//       num = arr[i];
//     }
//   }
//   console.log(num);
// }
// migratoryBirds([1, 4, 4, 4, 4, 5, 3, 3, 3, 3, 3, 3]);
// function myFunction(x, y) {
//   let c = 0;
//   if (x / y === 0) {
//     c = x;
//   } else {
//     c = y * Math.ceil(x / y);
//   }
//   return c;
// }
// console.log(myFunction(1, 23));

// function myFunction(a) {
//   for (let j = 0; ; j++) {
//     let sana = 0;
//     for (let i = 2; i <= a; i++) {
//       if (a % i === 0) {
//         sana++;
//       }
//     }
//     if (sana === 1) {
//       return a;
//     }
//     a++;
//   }
// }
// console.log(myFunction(2000));

function myFunction(a) {
  let myFunc = (num) => Number(num);

  var intArr = Array.from(String(a), myFunc);

  return intArr;
}
