let download = document.querySelector("button");
let img = document.querySelector(".div");
// let
// let ozgar =
let i = 0;

download.addEventListener("click", () => {
  let clear = setInterval(() => {
    download.style.opacity = "0";

    img.style.filter = `blur(${10 - i / 10}px)`;
    i++;
    document.querySelector(".sana").textContent = `${i}%`;
    console.log(i);
    if (i == 100) {
      clearInterval(clear);
    }
  }, 50);
});
