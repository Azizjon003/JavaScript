let son1 = Number(prompt("birinchi son"));
let son2 = Number(prompt("ikkinchi son"));
function calc(a, b) {
  let kiruvchi = String(prompt("`*` `/` `+` `-` amalalarini tanlang"));
  switch (kiruvchi) {
    case "+":
      alert(` ${a} + ${b} = ${a + b}`);
      break;

    case "-":
      alert(` ${a} - ${b} = ${a - b}`);
      break;
    case "/":
      alert(` ${a} / ${b} = ${a / b}`);
      break;
    case "*":
      alert(` ${a} * ${b} = ${a * b}`);
      break;
    default:
      alert("error");
      break;
  }
}
calc(son1, son2);
