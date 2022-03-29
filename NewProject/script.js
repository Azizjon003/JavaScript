'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let letitut = 0;
let longitut = 0;
let map;
let eventMap;
navigator.geolocation.getCurrentPosition(e => {
  console.log(e.coords);
  letitut = e.coords.latitude;
  longitut = e.coords.longitude;
  map = L.map('map').setView([letitut, longitut], 18);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  map.on('click', el => {
    eventMap = el;
    console.log(el);
    form.classList.remove('hidden');
    inputDistance.focus();
    L.circle([el.latlng.lat, el.latlng.lng], { radius: 50 }).addTo(map);
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';
  L.marker([eventMap.latlng.lat, eventMap.latlng.lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        Maxwidth: 500,
        Minwidth: 50,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      }).setContent('<p>Hello Dunyo</p>')
    )

    .openPopup();
});
setTimeout(() => {
  console.log(letitut, longitut);
}, 3000);
// inputType.addEventListener('change', () => {

inputType.addEventListener('change', () => {
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
});
