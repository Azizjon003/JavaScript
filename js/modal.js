document.querySelector("#btn").addEventListener("click", function () {
  document.querySelector("#popup1").style.display = "flex";
  console.log("salom");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    console.log(1);
    document.querySelector("#popup1").style.display = "none";
  }
});
