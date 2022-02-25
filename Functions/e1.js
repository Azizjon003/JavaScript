let kuala = Number(prompt(" kuala sonni kiriting"));
let kuala1 = Number(prompt(" kuala sonni kiriting"));
let kuala2 = Number(prompt(" kuala sonni kiriting"));

let delf = Number(prompt(" delfinlar sonni kiriting"));
let delf1 = Number(prompt(" delfinlar sonni kiriting"));
let delf2 = Number(prompt(" delfinlar sonni kiriting"));

let carceAverage = (a, b, c) => (a + b + c) / 3;

const kualaOrtacha = carceAverage(kuala, kuala1, kuala2);
const delfinOrtacha = carceAverage(delf, delf1, delf2);
if (kualaOrtacha > 2 * delfinOrtacha) {
  alert("kualalar g'olib");
} else if (kualaOrtacha * 2 < delfinOrtacha) {
  alert("delfinlar  g'olib");
} else {
  alert("error");
}
