let item2 = document.querySelectorAll(".item2");
let item3 = document.querySelectorAll(".item3");
console.log(item2);
addEventListener("scroll", function () {
  for (let i = 0; i < item2.length; i++) {
    let top = item2[i].getBoundingClientRect().top;
    if (top < 600) {
      item2[i].style.opacity = "1";
      item2[i].style.transform = "translateX(0)";
    } else {
      item2[i].style.opacity = "0";
      item2[i].style.transform = "translateX(400px)";
    }
  }
  for (let i = 0; i < item3.length; i++) {
    let top = item3[i].getBoundingClientRect().top;
    if (top < 400) {
      item3[i].style.opacity = "1";
      item3[i].style.transform = "translateX(0)";
    } else {
      item3[i].style.opacity = "0";
      item3[i].style.transform = "translateX(-400px)";
    }
  }
});
