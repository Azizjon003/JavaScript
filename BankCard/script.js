"use strict";

let shifrla = document.querySelector(".shifrInput");
let shifrniOch = document.querySelector(".deshifrInput");
function stringToShifr(a) {
  let son = [];
  let ikkilikSon = [];
  for (let i = 0; i < a.length; i++) {
    son.push(a[i].charCodeAt(a[i]));
  }
  console.log(son);
  for (let j = 0; j < son.length; j++) {
    let i = 0;
    let ikki = [];
    while (son[j] > 1) {
      if (Math.floor(son[j] / 2 ** i) == 1) {
        break;
      }
      i++;
    }
    let sana = i;
    console.log(sana);
    son[j] = son[j] % 2 ** sana;
    ikki.push(1);
    sana = sana - 1;
    for (let k = sana; k >= 0; k--) {
      if (son[j] / 2 ** k >= 1) {
        son[j] = son[j] % 2 ** k;
        ikki.push(1);
      } else ikki.push(0);
    }
    ikkilikSon.push(ikki.join(""));
  }
  let textShifr = ikkilikSon.join("");
  return textShifr;
}

let sana;

function shifrOch(string) {
  let numberArr = [];
  let kattaString = [];
  for (let i = 0; i < string.length; i += 7) {
    if (i % 7 == 0) {
      for (let j = i; j < i + 7; j++) {
        numberArr.push(Number(string[j]));
      }
      kattaString.push(numberArr);
      numberArr = [];
    }

    // console.log(i);
  }
  console.log(kattaString);
  let onlikarr = [];
  let harf = "";
  for (let k = 0; k < kattaString.length; k++) {
    let onlik = 0;
    let arr1 = kattaString[k].reverse();
    for (let i = 0; i <= arr1.length; i++) {
      if (arr1[i] == 1) {
        onlik = onlik + 2 ** i;
        harf = String.fromCharCode(onlik);
      }
    }
    onlikarr.push(harf);
  }
  console.log(onlikarr);
  let soz = onlikarr.join("");
  return soz;
  // let tartib = new Array(onlikarr.length);

  // console.log(tartib);
  // if (onlikarr.length % 2 == 0) {
  //   for (let i = onlikarr.length - 1; i >= 0; i--) {
  //     if (!(i % 2 == 0)) {
  //       for (let j = 0; j < onlikarr.length / 2; j++) {
  //         onlikarr[i].push(onlikarr[j]);
  //       }
  //     }
  //   }
  // }
  // console.log(tartib);
}
// shifrOch("101001111000011101100110111111011011111010");
// function ikkilikToOnlik(arr) {
//
// }
// ikkilikToOnlik([1, 0, 0, 1, 1, 1, 1]);
document.querySelector(".btn1").addEventListener("click", function () {
  let sana = stringToShifr(shifrla.value);
  document.querySelector(".result1").textContent = `${sana}`;
});
document.querySelector(".btn2").addEventListener("click", function () {
  let sana1 = shifrOch(shifrniOch.value);
  document.querySelector(".result2").textContent = `${sana1}`;
});
let m = 97;
console.log(String.fromCharCode(m));
