// bu elementlarni guruhlab olish uchun
let btn = document.querySelectorAll("button");
console.log(btn);
// bu head body va htmlni olish uchun
let html = document.head;
console.log(html);
// bunda faqat taglarni chaqirishimiz mumkun
let tagName = document.getElementsByTagName("header");
console.log(tagName);
// bunda bir xil class nomli html elemenlarni chiqarishimiz mumkun
let ClassName = document.getElementsByClassName("btn");
console.log(ClassName);
// bunda id orqali chaquirishim mumkun
let getId = document.getElementById("salom");
console.log(getId);
//
let box = document.createElement("button");
let header = document.querySelector("#salom");
box.classList.add("salom-dunyo", "salom");
// box.classList.remove("salom");
// box.classList.toggle("salom-dunyo");
// box.classList.contains("salom");

box.innerHTML = `<p> salom dunyo </p>`;

header.after(box.cloneNode(true));
header.before(box.cloneNode(true));
