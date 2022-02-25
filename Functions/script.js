// // let a = Number(prompt("Sonni kiriting "));
// // let b = Number(prompt("Sonni kiriting "));
// // alert(`biz ${a} va ${b} sonlridan qaysi biri katta ekanligini aniqlab aytamiz`);
// // let katta = function (a, b) {
// //   if (a > b) {
// //     alert(`${a} soni katta`);
// //   } else {
// //     if (a === b) {
// //       alert(`${a} va ${b} soni teng`);
// //     } else {
// //       alert(`${b} soni katta`);
// //     }
// //   }
// // };
// // katta(a, b);
let a = Number(prompt("oylik maoshingizni kiriting"));
let b = Number(prompt("Necha kun Ishlaganingizni kiriting"));

let hisobla = function (a, b) {
  alert(
    "kuniga qancha ishlaganingizni hisoblamoqchimisz Unda `Kun` `Soat` `Min` `Son` kalit so'zlaridan birini yozing"
  );
  let kun = String(prompt("Kalit sozini kiriting"));
  if (kun == "Kun") {
    let c = Math.floor(Number(a / b));
    alert(`siz kuniga ${c} ishlab topasz `);
  } else {
    if (kun == "Soat") {
      let c = Math.floor(Number(a / (b * 24)));
      alert(`siz soatiga ${c} ishlab topasz `);
    } else {
      if (kun == "Min") {
        let c = Math.floor(Number(a / (b * 24 * 60)));
        alert(`siz minutiga ${c} ishlab topasz `);
      } else {
        if (kun == "Son") {
          let c = Math.floor(Number(a / (b * 24 * 3600)));
          alert(`siz soniyasiga ${c} ishlab topasz `);
        } else {
          alert("dasturni yangilang");
        }
      }
    }
  }
};

hisobla(a, b);

// let hisobla = (a, b) => {
//   return a + b;
// };
// alert(`${hisobla(100, 200)}`);
