'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

let btnScroll = document.querySelector('.btn--scroll-to');
let section1 = document.querySelector('.operations__tab--2');
btnScroll.addEventListener('click', () => {
  const scroll = section1.getBoundingClientRect();
  console.log(scroll);
  console.log(window.pageXOffset, window.pageYOffset);
  window.scrollTo(scroll.left, scroll.top + window.pageYOffset);
  // section1.scrollIntoView({ behavior: 'smooth' });
});
btnScroll.addEventListener('mauseenter', () => {});

const random = function (min, max) {
  let a = Math.floor(Math.random() * (max - min + 1) + min);
  let b = Math.floor(Math.random() * (max - min + 1) + min);
  let c = Math.floor(Math.random() * (max - min + 1) + min);
  return [a, b, c];
};

let link = document.querySelector('.nav__link');
link.addEventListener('click', e => {
  e.preventDefault();

  let ad = random(0, 255);
  console.log(1);
  link.style.backgroundColor = `rgba(${ad[0]},${ad[1]},${ad[2]})`;
});
let links = document.querySelector('.nav__links');
links.addEventListener('click', e => {
  let ad = random(0, 255);
  console.log(2);
  links.style.backgroundColor = `rgba(${ad[0]},${ad[1]},${ad[2]})`;
});
let links1 = document.querySelector('.nav');
links1.addEventListener('click', e => {
  e.preventDefault();
  let ad = random(0, 255);
  console.log(3);
  links1.style.backgroundColor = `rgba(${ad[0]},${ad[1]},${ad[2]})`;
});
// let links2 = document.querySelector('.nav__links');
// links2.addEventListener('click', function (e) {
//   e.preventDefault();
//   if (e.target.classList.contains('nav__link')) {
//     const href = e.target.getAttribute('href');
//     document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
//   }
// });

// /////
// function Talaba(name, age, unvers) {
//   this.name = name;
//   this.age = age;
//   this.unvers = unvers;
// }

// Talaba.prototype.BirthDay = function () {
//   return 2022 - this.age;
// };
// Talaba.prototype.fakultet = function (val) {
//   return val;
// };

// let aziz = new Talaba('Azizjon', 19, 'Tuit');
// let oybek = new Talaba('Oybek', 19, 'TDTU');
// console.log(oybek.BirthDay());
// console.log(aziz);
// console.log(oybek);

// class Talaba {
//   constructor(name, age, univers) {
//     this.name = name;
//     this.age = age;
//     this.univer = univers;
//   }
//   birthDay() {
//     return 2022 - this.age;
//   }
// }
// let oybek = new Talaba('Oybek', 19, 'TDTU');
// console.log(oybek.birthDay());

class BankAcount {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.pin = 1111;
    this.utkazma = [];

    this.LOcation = navigator.language;
  }
  stp(val) {
    return this.utkazma.push(val);
  }
  bnk(val) {
    return this.utkazma.push(-1 * val);
  }
  get qarz() {
    let sum = 0;
    for (let i = 0; i < this.utkazma.length; i++) {
      if (this.utkazma[i] >= 0) sum += this.utkazma[i];
    }
    return sum * 0.1;
  }
  get ismUzgar() {
    return this.name;
  }
  set ismUzgar(val) {
    this.name = val;
  }
}

let oybek = new BankAcount('oybek', 19);
oybek.stp(517);
oybek.stp(514);
oybek.bnk(100);
oybek.bnk(300);
oybek.ismUzgar = 'Jumayev';
console.log(oybek.qarz);
console.log(oybek);
console.log(oybek.name);

let linksNav = document.querySelectorAll('.nav__link')[1];
console.log(linksNav);

// console.log(oop);

linksNav.addEventListener('click', e => {
  e.preventDefault();
  let oop = document.getElementById('section--2').getBoundingClientRect().top;

  window.scrollTo(0, window.pageYOffset + oop);
});
// console.log(window.pageYOffset);
// console.log(window.pageXOffset);
