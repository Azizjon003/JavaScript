let inputKir = document.querySelector(".input1");
let bos = document.querySelector(".submit1");
let arr = [];
let yangi = document.createElement("div");

yangi.classList.add("qoshilgan");
let chiqar = bos.addEventListener("click", (e) => {
  e.preventDefault();
  let val = inputKir.value;
  arr.push(val);
  yangi.innerHTML = `<p class = "sana">${arr[arr.length - 1]}</p>
  <p class="delete delete1">Delete</p>`;
  document.querySelector("main").append(yangi.cloneNode(true));
  console.log(arr);
  inputKir.value = "";
});
