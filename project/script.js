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
  e.stopPropagation();
  e.preventDefault();
  let ad = random(0, 255);
  console.log(1);
  link.style.backgroundColor = `rgba(${ad[0]},${ad[1]},${ad[2]})`;
});
let links = document.querySelector('.nav__links');
links.addEventListener('click', e => {
  e.preventDefault();
  e.stopPropagation();
  let ad = random(0, 255);
  console.log(1);
  links.style.backgroundColor = `rgba(${ad[0]},${ad[1]},${ad[2]})`;
});
let links1 = document.querySelector('.nav');
links1.addEventListener('click', e => {
  e.preventDefault();
  let ad = random(0, 255);
  console.log(1);
  links1.style.backgroundColor = `rgba(${ad[0]},${ad[1]},${ad[2]})`;
});
let links2 = document.querySelector('.nav__links');
links2.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const href = e.target.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
});
