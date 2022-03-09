"use strict";
// const kafe = {
//   title: "MagicKafe",
//   taomlar: ["osh", "shurva", "bishteks", "shashlik"],
//   shirinlik: ["muzqaymoq", "tort", "paxlava"],
//   ichimliklar: ["kola", "choy", "kampot"],
//   ochiqVaqti: {
//     dushanba: { open: "8:00", close: "22:00" },
//     seshanba: { open: "9:00", close: "21:00" },
//     chorshanba: { open: "8:00", close: "22:00" },
//     payshanba: { open: "9:00", close: "21:00" },
//     yakshanba: { open: "9:00", close: "21:00" },
//   },
//   locationKafe: "Tashkent Yunusabad  TATU",
//   order: function (toam, ichimlik) {},
//   buyurtmaniYetkazish: function (p) {
//     const { x: toam, y, z } = p;
//   },
//   muzqaymoq: function (first, second, third) {},
// };
// let arr5 = [...kafe.taomlar, ...kafe.shirinlik];

// for (let [a, b] of arr5.entries()) {
//   console.log(`${a + 1} --> ${b}`);
// }
// function ayrish(...raqamlar) {
//   let sum = 0;
//   for (let i = 0; i < raqamlar.length; i++) {
//     sum = sum - raqamlar[i];
//   }
//   console.log(sum);
// }
// ayrish(1, 2, 3, 4);

// console.log(NaN || 0 || false);
// const obj = {
//   name: "Aziz",
//   job: "Dev",
//   city: "Navai",
//   age: 23,
// };
// const keylar = Object.entries(obj);
// console.log(keylar);
// for (let el of keylar) {
//   console.log(`${el[0]}   -->   ${el[1]}`);
// }

// const arr = [1, 2, 3, 45, 46, 50];
// let [x, y, ...arr1] = arr;
// console.log(arr1);

// let a = 20;
// let soni = 0;

// for (let j = 2; j < a; j++) {
//   let cont = 0;
//   for (let i = 2; i <= j; i++) {
//     if (j % i == 0) {
//       cont++;
//     }
//   }
//   if (cont === 1) {
//     console.log(`${j} tubson`);
//     soni++;
//   }
// }
// console.log(soni);
// let sum = function (c) {
//   let summ = 0;
//   for (let el of c) {
//     summ = summ + el;
//   }
//   console.log(summ);
// };
// let c;
// let d = [];
// for (let i = 0; i < 5; i++) {
//   c = Number(prompt("Sonni kiriting"));
//   d.push(c);
// }
// sum(d);

// let a = "happy,newyear,enjoy";
// for (let i = 0; i < a.length; i++) {}
// console.log(c);

// function yech(k, s) {
//   let cont = 0;
//   for (let i = 0; i <= k; i++) {
//     for (let j = 0; j <= k; j++) {
//       if (s - (i + j) <= k && s - (i + j) >= 0) {
//         cont++;
//       }
//     }
//   }
//   console.log(cont);
// }
// yech(k, s);
// function check(a, b, c, d) {
//   let w;
//   let s1 = a * b;
//   let s2 = c * d;
//   s1 > s2 ? (w = s1) : (w = s2);
//   console.log(w);
// }

// check(a, b, c, d);
// function check(s) {
//   let c = 0;
//   let a = 0;
//   let b = s;
//   while (s !== 0) {
//     c = s % 10;
//     a = c + a;
//     s = Math.trunc(s / 10);
//   }
//   if (b % a == 0) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }
// }

// check(101);

// function IsPrime(input) {
//   let nol = 0;
//   if (input > 0) {
//     let cont = 0;
//     for (let i = 2; i <= input; i++) {
//       if (input % i == 0) {
//         cont++;
//       }
//     }
//     if (cont === 1) {
//       return 1;
//     } else {
//       return 0;
//     }
//   } else {
//     return nol;
//   }
// }
// console.log(IsPrime(10));
// function Checker(input) {
//   let alif = "abcdefghijklmnopqrstuvwxyz";
//   let alif1 = alif.split("");
//   let c = input.split("");
//   let s = [];
//   let cont = 0;
//   for (let i = 0; i < c.length; i++) {
//     if (!s.includes(c[i]) && alif1.includes(c[i].toLowercase())) {
//       cont++;
//     }
//   }
//   return cont;
// }
// console.log(Checker("Ali"));

// function Checker(input) {
//   let s = "abcdefghijklmnopqrstuvwxyz";
//   let b = s.split("");
//   let a = input.split("");
//   let sum = [];
//   for (let i = 0; i < a.length; i++) {
//     if (!sum.includes(a[i]) && b.includes(a[i].toLowerCase())) {
//       sum.push(a[i]);
//     }
//   }

//   return sum.length;
// }
// console.log(Checker("Ali"));
// function check(a) {
//   let arr = [2, 1];
//   let arr1 = arr;
//   for (let i = 2; i <= a; i++) {
//     arr1.push(arr1[i - 1] + arr1[i - 2]);
//   }

//   return arr1[a];
// }

// console.log(check(86));

// function arrayLength(input) {
//   let cont = [...input];
//   for (let i = 0; i < cont.length; i++) {
//     if (cont[i].length > 0) {
//       input = [...cont[i]];
//       cont = [...cont, ...input];
//     }
//   }

//   console.log(cont);
// }
// arrayLength([1, 2, [3, 2, 1]]);

// let ofisIshcilari = new Array([
//   "frontent",
//   "frontent",
//   "frontent",
//   "backend",
//   "backend",
//   "backend",
//   "backend",
//   "mobil",
//   "mobil",
//   "mobil",
//   "hisobci",
// ]);
// let newSet = new Set(ofisIshcilari);

// console.log(newSet.size);
// let ishKunlari = ["dushanba", "seshanba", "chorshanba", "payshanba", "juma"];
// let kirit = prompt("kunlarni kirit").toLowerCase();
// const me = new Map([
//   [false, "Ishlamaydi"],
//   [true, "Ishlaydi"],
//   ["haftaKunlari", ishKunlari],
//   ["open", 9],
//   ["close", 18],
// ]);
// if (me.get("haftaKunlari").includes(kirit)) {
//   alert(`${kirit} kuni ${me.get("open")}  ${me.get("close")} gacha ishlaydi`);
// } else {
//   alert(me.get(false));
// }

// const savol = new Map([
//   ["Savol", "Yoshingiz nechada"],
//   [true, "raxmat yoshingizni kiritganingiz uchun"],
//   [false, "Qaytadan kiriting yoshingizni"],
//   ["max Yosh", 10],
//   ["minYosh", 0],
// ]);

// console.log(check("ox????xox"));
// function check(l1, l2) {
//   let arr1 = [];
//   let arr2 = [];
//   for (let i = 0; i < l1.length; i++) {
//     arr1.unshift(l1[i]);
//   }
//   for (let i = 0; i < l2.length; i++) {
//     arr2.unshift(l2[i]);
//   }

//   let r1 = arr1.join("");
//   let n1 = Number(r1);
//   let r2 = arr2.join("");
//   let n2 = Number(r2);
//   let arr;
//   let sum = n1 + n2;
//   arr = String(sum);
//   let num = arr.split("");
//   let teskari = [];

//   for (let i = 0; i < num.length; i++) {
//     teskari.unshift(Number(num[i]));
//   }

//   let str = teskari.join(",");
//   console.log(`[${str}]`);
// }
// check([4, 8, 9, 7], [2, 5, 7]);

// function check(l1, l2) {
//   let arr1 = [];
//   let arr2 = [];
//   let arr3 = [];
//   let javob;
//   for (let i = 0; i < l1.length; i++) {
//     arr1.unshift(l1[i]);
//   }
//   for (let i = 0; i < l2.length; i++) {
//     arr2.unshift(l2[i]);
//   }
//   let r1 = arr1.join("");
//   let n1 = Number(r1);
//   let r2 = arr2.join("");
//   let n2 = Number(r2);
//   let sum = n1 + n2;
//   let toString = String(sum);
//   javob = toString.split("");
//   for (let i = 0; i < javob.length; i++) {
//     arr3.unshift(Number(javob[i]));
//   }
//   let str = arr3.join(",");
//   console.log(`[${str}]`);
// }

// let text = "i have learned something new today";
// let capitalize = text.split(" ");
// let salom = 0;
// let katta;
// let univers = " ";
// for (let i = 0; i < capitalize.length; i++) {
//   salom = [...capitalize[i]];
//   for (let j = 0; j < capitalize[i].length; j++) {
//     salom = salom[0].toUpperCase();
//   }
//   katta = salom + capitalize[i].substr(1);
//   univers = univers + " " + katta;
// }
// console.log(univers);

// let plastik = "8600 2156 0158 2365 \t";
// let qirq = plastik.slice(-4);
// // console.log(qirq.padStart(16, "*").padEnd(32, "*"));
// console.log(plastik.repeat(5));

// const str = "";

//split the above string into an array of strings
//whenever a blank space is encountered
// let arr = [
//   { name: "S20", price: 100, color: "black" },
//   { name: "S10", price: 300, color: "black" },
//   { name: "S21", price: 200, color: "black" },
//   { name: "S22", price: 400, color: "black" },
// ];
// let market = function (cat = "Samsung", price = 400) {
//   switch (cat) {
//     case "Samsung":
//       for (let i = 0; i < arr.length; i++) {
//         if (arr[i].price <= price) {
//           console.log(
//             `Siz ${arr[i].name} telefonini ${arr[i].price}$ ga ${arr[i].color} rangini olishingiz mumkin`
//           );
//         }
//       }
//   }
// };

// market(undefined, 400);

// let obj1 = {
//   name: "Umid",
//   id: 123456,
// };
// let library = function (obj, id) {
//   console.log(`Salom ${obj.name} xush kelibsiz Id raqamingizni kirting `);
//   if (id === obj.id) {
//     console.log(`Xush kelibsiz Kutubxonadan foydalanishingiz mumkin`);
//   } else {
//     console.log(`Qayta urinib koring`);
//     let ha = prompt("id ni o'zgartirmoqchimisz");
//     if (ha === "Ha") {
//       let ozgartir = Number(prompt("Id ni ozgartiring"));
//       obj.id = ozgartir;
//     } else {
//       console.log("qayta urining");
//     }
//   }
// };
// let id = Number(prompt("id raqamingizni kiriting"));

// library(obj1, id);
// console.log(obj1.id);

// function check(a) {
//   let arr = a.split("");
//   let arr1 = [];
//   let cont = 0;
//   let sana = 0;
//   let sana2 = 0;
//   function fact(num) {
//     if (num < 0) return -1;
//     else if (num == 0) return 1;
//     else {
//       return num * fact(num - 1);
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== "x") {
//       arr1.push(arr[i]);
//     }
//     if (arr[i] === "o") {
//       cont++;
//     }
//   }
//   console.log(arr1);
//   let soroqSoni = arr1.length - cont;
//   let xsoni = 10 - soroqSoni - cont;
//   if (cont > 4 || cont == 0) {
//     sana = 0;
//   } else {
//     for (let i = 0; i < 10; i++) {
//       for (let j = 0; j < 10; j++) {
//         if (cont == 4) {
//           sana = 24;
//         }
//         if (cont == 3) {
//           sana = 3 * 4 * 3 + 24 * soroqSoni;
//         }

//         if (cont == 2) {
//           if (soroqSoni == 1) {
//             sana = 14 + 24 + 36;
//           }
//           if (soroqSoni == 2) {
//             sana = 14 + 24 * soroqSoni + 36 * soroqSoni;
//           }
//           if (soroqSoni > 2) {
//             sana =
//               14 +
//               24 * soroqSoni +
//               36 * soroqSoni +
//               48 * (fact(soroqSoni) / fact(soroqSoni - 2));
//           }
//         }
//         if (cont == 1) {
//           if (soroqSoni == 1) {
//             sana = 15;
//           }
//           if (soroqSoni == 2) {
//             sana = 1 + 8 + 12 * 2 + 12 + 12 + 8;
//           }
//           if (soroqSoni >= 3) {
//             sana =
//               1 +
//               4 * soroqSoni +
//               6 * soroqSoni +
//               (12 * fact(soroqSoni)) / fact(soroqSoni - 2) +
//               4 * soroqSoni +
//               (24 * fact(soroqSoni)) / fact(soroqSoni - 3);
//           }
//         }
//       }
//     }
//   }
//   return sana;
// }

// // console.log(check("o????xxxx"));

// function check(a) {
//   let input = a.split("");
//   let cont = 0;
//   let sana = 0;

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === "o") {
//       cont++;
//     }
//   }

//   for (let i = 0; i <= 9; i++) {
//     for (let j = 0; j <= 9; j++) {
//       for (let k = 0; k <= 9; k++) {
//         for (let l = 0; l <= 9; l++) {
//           let myset = new Set();
//           if (
//             input[i] == "x" ||
//             input[j] == "x" ||
//             input[k] == "x" ||
//             input[l] == "x"
//           )
//             continue;

//           if (input[i] == "o") myset.add(i);
//           if (input[j] == "o") myset.add(j);
//           if (input[k] == "o") myset.add(k);
//           if (input[l] == "o") myset.add(l);
//           if (myset.size == cont) {
//             sana++;
//             console.log(`"i" ${i} "j" ${j} "k" ${k} "" ${l}`);
//             console.log(myset);
//           }
//         }
//       }
//     }
//   }
//   return sana;
// }
// console.log(check("ooo???xxxx"));
