// let sana = prompt("Sanani kiriting 16/03/2002");
// let sanaArr = sana.split("/").reverse();
// let sana1 = prompt("Sanani kiriting 17/03/2022");
// let sanaArr2 = sana.split("/").reverse();
// let hozirgi = new Date(...sanaArr);
// let hozirgi2 = new Date(...sanaArr2);
// console.log(hozirgi);
// let oy = sanaArr[1];
// let kun = sanaArr[2];
// let yil1 = sanaArr2[0];
// let oy1 = sanaArr2[1];
// let kun1 = sanaArr2[2];
// let yilFarqi = console.log(yil);
// console.log(sanaArr2);

// let a = 1596789854.1596;
// let convert = new Intl.NumberFormat(navigator.languages).format(a);
// console.log(convert);
let sana = 60;
let min = 9;
let tuxta = true;

let timer = setInterval(() => {
  sana--;

  if (sana == 0) {
    sana = 59;
    min = min - 1;
  }
  if (sana == 1 && min == 0) {
    clearInterval(timer);
  }
  console.log(`${min}:${sana}`);
}, 10000);
