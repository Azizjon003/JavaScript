document.querySelector(".message").textContent = "Topish jarayoni...";
let random = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = random;
let kiruvci = 0;
let yutdiz = 0;
let ball = 20;
let score = 0;
let ballfunc = function () {
  if (ball <= 0) {
    document.querySelector(".salom").textContent = "Game Over";
    document.querySelector(".checked").style.display = "block";
    document.querySelector(".score").textContent = "0";
    document.querySelector("body").style.backgroundColor = "#000000";
  }
};

document.querySelector(".check").addEventListener("click", function () {
  kiruvci = Number(document.querySelector(".guess").value);
  // document.querySelector(".number").textContent = kiruvci;
  if (kiruvci > 20) {
    yutdiz = document.querySelector(".message").textContent =
      "20dan kamroq kiriting";
    ball--;
    document.querySelector(".score").textContent = ball;
    ballfunc();
  } else {
    if (kiruvci < 0) {
      yutdiz = document.querySelector(".message").textContent =
        "Musbat son kiriting";
      ball--;
      document.querySelector(".score").textContent = ball;
      ballfunc();
    } else {
      if (kiruvci > random) {
        yutdiz = document.querySelector(".message").textContent =
          "Kichikroq son kiriting";
        ball--;
        document.querySelector(".score").textContent = ball;
        ballfunc();
      } else {
        if (kiruvci < random) {
          yutdiz = document.querySelector(".message").textContent =
            "Kattaroq son kiriting";

          ball--;
          document.querySelector(".score").textContent = ball;
          ballfunc();
        } else {
          yutdiz = document.querySelector(".message").textContent =
            "siz yutdingiz";
          document.querySelector(".number").textContent = kiruvci;
          document.querySelector("body").style.backgroundColor = "#60b347";
          document.querySelector(".salom").textContent = "Siz yutdingiz";
          document.querySelector(".salom").style.color = "#FF0000";
          document.querySelector(".number").style.borderRadius = "50%";
          if (ball > document.querySelector(".highscore").textContent) {
            document.querySelector(".highscore").textContent = ball;
          }
        }
      }
    }
  }
});

document.addEventListener("keydown", function (e) {
  kiruvci = Number(document.querySelector(".guess").value);
  // document.querySelector(".number").textContent = kiruvci;
  if (e.key === "Enter") {
    if (kiruvci > 20) {
      yutdiz = document.querySelector(".message").textContent =
        "20dan kamroq kiriting";
      ball--;
      document.querySelector(".score").textContent = ball;
      ballfunc();
    } else {
      if (kiruvci < 0) {
        yutdiz = document.querySelector(".message").textContent =
          "Musbat son kiriting";
        ball--;
        document.querySelector(".score").textContent = ball;
        ballfunc();
      } else {
        if (kiruvci > random) {
          yutdiz = document.querySelector(".message").textContent =
            "Kichikroq son kiriting";
          ball--;
          document.querySelector(".score").textContent = ball;
          ballfunc();
        } else {
          if (kiruvci < random) {
            yutdiz = document.querySelector(".message").textContent =
              "Kattaroq son kiriting";
            ball--;
            document.querySelector(".score").textContent = ball;
            ballfunc();
          } else {
            yutdiz = document.querySelector(".message").textContent =
              "Siz yutdingiz";
            document.querySelector(".number").textContent = kiruvci;
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".salom").textContent = "Siz yutdingiz";
            document.querySelector(".salom").style.color = "#FF0000";
            document.querySelector(".number").style.borderRadius = "50%";

            if (ball > document.querySelector(".highscore").textContent) {
              document.querySelector(".highscore").textContent = ball;
            }
          }
        }
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".salom").style.color = "#Fff";
  document.querySelector(".salom").textContent = "Men o'ylagan raqamni top!";
  document.querySelector(".number").textContent = "?";
  yutdiz = document.querySelector(".message").textContent = "Oyinni boshlang";
  document.querySelector(".number").style.borderRadius = "0";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".checked").style.display = "none";
  ball = 20;
  document.querySelector(".score").textContent = ball;
  random = Math.trunc(Math.random() * 20) + 1;
});
