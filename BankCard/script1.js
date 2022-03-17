"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
let trn = navigator.language;
console.log(trn);
let sana = new Date();
let Options = {
  day: `numeric`,
  month: "numeric",
  weekday: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
};
let formatUzb = new Intl.DateTimeFormat(trn, Options).format(sana);

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  movements1: [200, 450, -400, 3000, -650, -130, 70, 1300],
  movementsDate: [
    `2022-03-16T11:46:08.964Z`,
    `2022-02-16T11:46:08.964Z`,
    `2022-04-16T11:46:08.964Z`,
    `2022-05-16T11:46:08.964Z`,
    `2022-06-16T11:46:08.964Z`,
    `2022-07-16T11:46:08.964Z`,
    `2022-08-16T11:46:08.964Z`,
    `2022-09-16T11:46:08.964Z`,
  ],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  movements1: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  movements1: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, -50, 90],
  movements1: [430, 1000, 700, -50, 90],
  interestRate: 1,
  pin: 4444,
};

const accountObj = [account1, account2, account3, account4];

accountObj.forEach((val) => {
  val.username = val.owner
    .toLowerCase()
    .split(" ")
    .map((val) => {
      return val[0];
    })
    .join("");
});

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
let total = function (obj) {
  let yig = obj.movements.reduce((qosh, val) => {
    return qosh + val;
  }, 0);
  return yig;
};
labelDate.textContent = formatUzb;
let musbat = 0;
let manfiy = 0;
let komissiya = 0;
let stependiya = function (obj) {
  musbat = obj.movements

    .filter((val) => {
      return val > 0;
    })
    .reduce((sum, val) => {
      return sum + val;
    });
  manfiy = obj.movements
    .filter((val) => {
      return val < 0;
    })
    .reduce((sum, val) => {
      return sum + val;
    });
  komissiya = (manfiy * obj.interestRate) / 100;
};
let kirganUser;
btnLogin.addEventListener("click", (defaults) => {
  defaults.preventDefault();
  let login = inputLoginUsername.value;
  let parol = Number(inputLoginPin.value);
  kirganUser = accountObj.find((val) => {
    return val.username === login;
  });
  if (kirganUser?.pin === parol) {
    inputLoginUsername.value = inputLoginPin.value = "";
    labelWelcome.textContent = `Welcome ${kirganUser.owner}`;
    containerApp.style.opacity = 1;
    labelWelcome.style.color = `#333`;
  } else {
    labelWelcome.textContent = `Try again`;
    labelWelcome.style.color = `red`;
    inputLoginUsername.value = inputLoginPin.value = "";
  }
  transaksiyaniEkrangaChiqar(kirganUser);
  labelBalance.textContent = `${total(kirganUser)} €`;
  stependiya(kirganUser);
  labelSumIn.textContent = `${musbat} €`;
  labelSumOut.textContent = `${Math.abs(manfiy)} €`;
  labelSumInterest.textContent = `${Math.abs(komissiya)} €`;
});

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
const transaksiyaniEkrangaChiqar = function (obj) {
  containerMovements.innerHTML = " ";
  obj.movements.forEach(function (val, key) {
    let baza = new Date(obj.movementsDate[obj.movementsDate.length - key - 1]);
    let kun = Number(baza.getDate());
    let oy = Number(baza.getMonth());
    let yil = baza.getFullYear();
    let hozirgiKun = Number(new Date().getDate());
    let hozirgiOy = Number(new Date().getMonth());
    if (hozirgiKun == kun && hozirgiOy == oy) {
      kun = "Today";
      let yoz = val > 0 ? "deposit" : "withdrawal";
      let qalay = `<div class="movements__row" >
      <div class="movements__type movements__type--${yoz}">${
        key + 1
      }  ${yoz}</div>
      <div class="movements__date">${kun}</div>
      <div class="movements__value">${val}$</div>
    </div>`;
      containerMovements.insertAdjacentHTML("afterbegin", qalay);
    } else {
      kun = "oldingi kunlar";
      let yoz = val > 0 ? "deposit" : "withdrawal";
      let qalay = `<div class="movements__row" >
    <div class="movements__type movements__type--${yoz}">${
        key + 1
      }  ${yoz}</div>
    <div class="movements__date">${kun}</div>
    <div class="movements__value">${val}$</div>
  </div>`;
      containerMovements.insertAdjacentHTML("afterbegin", qalay);
    }
  });
};

let transfer = function (arr, obj) {
  let transferTo = inputTransferTo.value;
  let amountTrans = Number(inputTransferAmount.value);

  for (let key of arr) {
    if (
      key.username === transferTo &&
      amountTrans >= 0 &&
      !(inputTransferTo.value === obj.username)
    ) {
      key.movements.push(amountTrans);
      key.movements1.push(amountTrans);
      obj.movements.push(amountTrans * -1);
      obj.movements1.push(amountTrans * -1);

      console.log(1596);
    }
  }
  inputTransferAmount.value = inputTransferTo.value = "";
};
let qarz = function (obj) {
  let qoshibQoy = Number(inputLoanAmount.value);
  if (qoshibQoy < musbat * 0.1 && qoshibQoy > 0) {
    obj.movements.push(qoshibQoy);
  } else {
    alert(`Siz ${musbat * 0.1} miqdorgacha qarz ololasz`);
  }
  inputTransferAmount.value = inputTransferTo.value = "";
};
let deleteAccount = function () {
  let users = inputCloseUsername.value;
  let pins = Number(inputClosePin.value);
  if (users == kirganUser?.username && pins == kirganUser?.pin) {
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
};
let shart = 0;
let sortArr = function (obj) {
  obj.movements.sort((a, b) => {
    return a - b;
  });
};
let UnSortArr = function (obj) {
  obj.movements = [...obj.movements1];
};
btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  transfer(accountObj, kirganUser);
  let baza1 = new Date();
  let sana1 = baza1.toISOString();
  kirganUser.movementsDate.push(sana1);

  if (!(kirganUser.username == inputTransferTo.value)) {
    transaksiyaniEkrangaChiqar(kirganUser);
    labelBalance.textContent = `${total(kirganUser)}€`;
    stependiya(kirganUser);
    labelSumIn.textContent = `${musbat} €`;
    labelSumOut.textContent = `${Math.abs(manfiy)} €`;
    labelSumInterest.textContent = `${Math.abs(komissiya)} €`;
  }
});
btnLoan.addEventListener("click", (a) => {
  a.preventDefault();
  qarz(kirganUser);
  let baza1 = new Date();
  let sana1 = baza1.toISOString();
  kirganUser.movementsDate.push(sana1);
  transaksiyaniEkrangaChiqar(kirganUser);
  labelBalance.textContent = `${total(kirganUser)} €`;
  stependiya(kirganUser);
  labelSumIn.textContent = `${musbat} €`;
  labelSumOut.textContent = `${Math.abs(manfiy)} €`;
  labelSumInterest.textContent = `${Math.abs(komissiya)} €`;
});
btnClose.addEventListener("click", (b) => {
  b.preventDefault();
  deleteAccount();
  let top = accountObj.indexOf(kirganUser);
  accountObj.splice(top, 1);
});

btnSort.addEventListener("click", (a) => {
  // a.preventDefault();
  if (shart == 0) {
    sortArr(kirganUser);
    shart = 1;
  } else {
    UnSortArr(kirganUser);
    shart = 0;
  }

  transaksiyaniEkrangaChiqar(kirganUser);
  labelBalance.textContent = `${total(kirganUser)} €`;
  stependiya(kirganUser);
  labelSumIn.textContent = `${musbat} €`;
  labelSumOut.textContent = `${Math.abs(manfiy)} €`;
  labelSumInterest.textContent = `${Math.abs(komissiya)} €`;
});
// let min = 4;
// let soniya = 59;
// let timerLimed = function () {
//   setInterval(() => {}, 1000);
// };
// function dateLand() {
//   let soat = String(new Date().getHours()).padStart(2, 0);
//   let minut = String(new Date().getMinutes()).padStart(2, 0);
//   let sek = String(new Date().getSeconds()).padStart(2, 0);
//   let kun = String(new Date().getDate()).padStart(2, 0);
//   let oy = String(new Date().getMonth() + 1).padStart(2, 0);
//   let yil = String(new Date().getFullYear());
//   labelDate.textContent = `${kun}/${oy}/${yil} ${soat}:${minut}:${sek}`;
// }
// setInterval(dateLand, 1000);
// function timerEnd() {
//   if (labelTimer.textContent === `00:00`) {
//     containerApp.style.opacity = "0";
//     timerLand();
//   }
// }
// let vaqt = 4;
// let sekund = 59;
// function timerLand() {
//   sekund = sekund - 1;
//   if (sekund == 0) {
//     vaqt = vaqt - 1;
//     sekund = 59;
//   }
//   if (sekund < 10) {
//     sekund = `0${sekund}`;
//   }

//   labelTimer.textContent = `0${vaqt}:${sekund}`;
//   timerEnd();
// }

// setInterval(timerLand, 1000);
// let shart1 = 1;

// labelWelcome.addEventListener("click", () => {
//   let arr = Array.from(
//     document.querySelectorAll(".movements__value"),
//     (val, key) => {
//       return Number(val.textContent.slice(0, val.textContent.length - 1));
//     }
//   );
//   console.log(arr);
//   let p = [...document.querySelectorAll(".movements__value")];
//   let q = p.map((val) => {
//     return Number(val.textContent.slice(0, val.textContent.length - 1));
//   });
//   console.log(q);
//   [...document.querySelectorAll(".movements__row")].forEach((val, key) => {
//     if (shart1 == 1) {
//       shart1 = 0;
//       if (key % 2 == 0) {
//         val.style.backgroundColor = "red";
//       } else val.style.backgroundColor = "green";
//     } else {
//       val.style.backgroundColor = "white";
//       shart1 = 1;
//     }
//   });
// });

/////////////////////////////////////////////////
