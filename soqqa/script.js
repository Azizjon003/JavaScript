let sum = document.querySelector(".score--0");
let sum1 = document.querySelector(".score--1");
let corrent = document.querySelector(".current--0");
let corrent1 = document.querySelector(".current--1");
let randnum = Math.trunc(Math.random() * 6 + 1);
let summ = 0;
let score = 0;
document.querySelector(".btn--roll").addEventListener("click", function () {
  if (randnum !== 1) {
    randnum = Math.trunc(Math.random() * 6 + 1);
    let img1 = (document.querySelector(".dice").src = `dice-${randnum}.png`);
    summ = randnum + summ;
    corrent.textContent = `${summ}`;
    document.querySelector(".btn--hold").addEventListener("click", function () {
      score = summ + score;
      summ = 0;
      console.log(score);
      sum.textContent = ` ${score} `;
      document.querySelector(".player--1").classList.add("player--active");
      document.querySelector(".player--0").classList.remove("player--active");
    });
  } else {
    document.querySelector(".player--1").classList.add("player--active");
    document.querySelector(".player--0").classList.remove("player--active");
  }
});
