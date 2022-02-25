let son1 = Number(prompt("birinchi son"));
let son2 = Number(prompt("ikkinchi son"));
let son3 = Number(prompt("uchinchi son"));
function kattason(a, b, c) {
  if (a > b && a > c) {
    alert(` ${a} katta`);
  }
  if (b > a && b > c) {
    alert(` ${b} katta`);
  }
  if (c > a && c > b) {
    alert(` ${c} katta`);
  }
}

function kichikSon(b, a, c) {
  if (a < b && a < c) {
    alert(` ${a} kichik`);
  }
  if (b < a && b < c) {
    alert(` ${b} kichik`);
  }
  if (c < a && c < b) {
    alert(` ${c} kichik`);
  }
}
kattason(son1, son2, son3);
kichikSon(son1, son2, son3);
