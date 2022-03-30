'use strict';

// prettier-ignore
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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
class Mashq {
  datePerson = new Date();
  id = (Date.now() + '').slice(-8);
  constructor(masofa, vaqt, coodrs) {
    this.masofa = masofa;
    this.vaqt = vaqt;
    this.coodrs = coodrs;
  }
  _setTavsif() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.malumot = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.datePerson.getMonth()]
    } ${this.datePerson.getDay()}`;
  }
}
class Yugurish extends Mashq {
  type = 'running';
  constructor(masofa, vaqt, coodrs, qadamlarSoni) {
    super(masofa, vaqt, coodrs);
    this.qadamlarSoni = qadamlarSoni;
    this._setTavsif();
  }
}
class Velik extends Mashq {
  type = 'cycling';
  constructor(masofa, vaqt, coodrs, qiyalik) {
    super(masofa, vaqt, coodrs);
    this.qiyalik = qiyalik;
    this._setTavsif();
  }
}
class App {
  #arr = [];
  constructor() {
    this._getCurrentPosition();
    inputType.addEventListener('change', this._selectToggle);
    form.addEventListener('submit', this._obyektYaratish.bind(this));
  }
  // turgan ornimni olaish
  _getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      this._showMap.bind(this),
      function () {
        alert('Erorr');
      }
    );
  }
  _showMap(e) {
    console.log(e.coords);
    letitut = e.coords.latitude;
    longitut = e.coords.longitude;
    map = L.map('map').setView([letitut, longitut], 18);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    this._showForm();
    this._getLocalStorage();
  }
  // forma ochish
  _showForm() {
    map.on('click', el => {
      eventMap = el;
      console.log(el);
      form.classList.remove('hidden');
      inputDistance.focus();
      L.circle([el.latlng.lat, el.latlng.lng], { radius: 50 }).addTo(map);
    });
  }
  //formani yopish
  _hiddenForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.classList.add('hidden');
  }
  /// select option runningdang ozgarganda ozgartirish
  _selectToggle() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }
  // ikonkachani ornatish
  _setMarker(obj) {
    L.marker(obj.coodrs)
      .addTo(map)
      .bindPopup(
        L.popup({
          Maxwidth: 500,
          Minwidth: 50,
          autoClose: false,
          closeOnClick: false,
          className: `${obj.type}-popup`,
        }).setContent(`${obj.malumot}`)
      )

      .openPopup();
    this._hiddenForm();
  }
  // Farmadan malumotlarni olish Yugurish va velik degan obyektlarni qaytarish
  _obyektYaratish(e) {
    e.preventDefault();
    let yugurish1;
    let numbermi = (...inputs) => {
      return inputs.every(val => Number.isFinite(val));
    };
    let musbatmi = (...inputs) => {
      return inputs.every(val => val > 0);
    };
    let masofa = +inputDistance.value;
    let vaqt = +inputDuration.value;
    let inputTuri = inputType.value;
    if (inputTuri == 'running') {
      let cadence = +inputCadence.value;
      if (
        !numbermi(masofa, vaqt, cadence) ||
        !musbatmi(masofa, vaqt, cadence)
      ) {
        return alert('Dasturda Xatolik bor');
      }

      yugurish1 = new Yugurish(
        masofa,
        vaqt,
        [eventMap.latlng.lat, eventMap.latlng.lng],
        cadence
      );
      // this._setMarker(yugurish1);
      console.log(yugurish1);
    } else {
      if (inputTuri == 'cycling') {
        let elevation = +inputElevation.value;
        if (!numbermi(masofa, vaqt) || !musbatmi(masofa, vaqt)) {
          return alert('Dasturda Xatolik bor');
        }

        yugurish1 = new Velik(
          masofa,
          vaqt,
          [eventMap.latlng.lat, eventMap.latlng.lng],
          elevation
        );
      }
    }
    // Arrayga push qilish
    this.#arr.push(yugurish1);

    console.log(this.#arr);

    // MAshq objdagi malumotlarni mapga chiqarish metodi
    this._setMarker(yugurish1);
    // MAshqlar obyektini chiqarish
    this._ruyxatniCiqarish(yugurish1);
    // loaal storagedan fodalanish
    this._setLocalStorage();
  }

  _ruyxatniCiqarish(obj) {
    let htmlCreate = `<li class="workout workout--running" data-id="${obj.id}">
    <h2 class="workout__title">${obj.malumot}</h2>
    <div class="workout__details">
      <span class="workout__icon">${obj.type == 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
      <span class="workout__value">${obj.masofa}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${obj.vaqt}</span>
      <span class="workout__unit">min</span>
    </div>`;
    if (obj.type == 'running') {
      htmlCreate += ` <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${obj.masofa / obj.vaqt}</span>
      <span class="workout__unit">km/min</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">🦶🏼</span>
      <span class="workout__value">${obj.qadamlarSoni}</span>
      <span class="workout__unit">spm</span>
    </div>
  </li>`;
    }
    if (obj.type == 'cycling') {
      htmlCreate += ` <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${obj.masofa / (obj.vaqt / 60)}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${obj.qiyalik}</span>
      <span class="workout__unit">m</span>
    </div>
  </li>`;
    }
    form.insertAdjacentHTML('afterend', htmlCreate);
    // local storagega saqlash
  }
  _setLocalStorage() {
    localStorage.setItem('mashqlar', JSON.stringify(this.#arr));
  }
  _getLocalStorage() {
    let data = JSON.parse(localStorage.getItem('mashqlar'));
    if (!data) return;
    this.#arr = data;
    this.#arr.forEach(val => {
      this._ruyxatniCiqarish(val);
      this._setMarker(val);
    });
  }
  _removeLocalStorage() {
    localStorage.remove('mashqlar');
    location.reload();
  }
}
const magicMap = new App();
