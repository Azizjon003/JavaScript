const deg = 6;
const hr = document.querySelector("#hr_mile");
const clockHr = document.querySelector(".clock_hour");
const mn = document.querySelector("#mn_mile");
const sc = document.querySelector("#sc_mile");
setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mnn = day.getMinutes() * deg;
  let scc = day.getSeconds() * deg;
  console.log(hh);
  console.log(scc);
  hr.style.transform = `rotateZ(${hh + mnn / 12}deg)`;
  mn.style.transform = `rotateZ(${mnn}deg)`;
  sc.style.transform = `rotateZ(${scc}deg)`;
}, 1000);
setInterval(() => {
  let day = new Date();
  let clockHour = day.getHours();
  let clockMIn = day.getMinutes();
  let clockSec = day.getSeconds();
  clockHr.innerHTML = `${clockHour}:${clockMIn}:${clockSec}`;
}, 1000);
let shart = true;
document.querySelector(".Light--dark").addEventListener("click", () => {
  if (shart == true) {
    document.body.style.backgroundColor = "black";
    document.querySelector(".clock_hour").style.color = "white";
    document.querySelector(".Light--dark").style.backgroundColor = "white";
    document.querySelector(".Light--dark").style.color = "black";
    shart = false;
  } else {
    document.body.style.backgroundColor = "white";
    document.querySelector(".clock_hour").style.color = "black";
    document.querySelector(".Light--dark").style.backgroundColor = "black";
    document.querySelector(".Light--dark").style.color = "white";
    shart = true;
  }
});
