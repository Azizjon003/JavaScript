let del = Number(prompt("delfinlar balini kiriting"));
let del1 = Number(prompt("delfinlar balini kiriting"));
let del2 = Number(prompt("delfinlar balini kiriting"));
let kol = Number(prompt("kualalar balini kiriting "));
let kol1 = Number(prompt("kualalar balini kiriting "));
let kol2 = Number(prompt("kualalar balini kiriting "));
let ortacha = (del1 + del1 + del2) / 3;
let ortacha1 = (kol1 + kol1 + kol2) / 3;
console.log(ortacha);
console.log(ortacha1);
if (ortacha >= 100 && ortacha1 >= 100) {
  if (ortacha == ortacha1) {
    alert( `ball ${ortacha1}`);
  }
  if (ortacha > ortacha1) {
    alert(`delfinlar  g'olib ${ortacha}`);
  }
  if (ortacha < ortacha1) {
    alert(`kualalar g'olib ${ortacha1}`);
  }
} else {
  if (ortacha > ortacha1 && ortacha >= 100) {
    alert(`delfinlar  g'olib ${ortacha}`);
  } else {
    alert("eroor");
  }
  if (ortacha < ortacha1 && ortacha1 >= 100) {
    alert(`kualalar g'olib ${ortacha1}`);
  } else {
    alert("eroor");
  }
}
