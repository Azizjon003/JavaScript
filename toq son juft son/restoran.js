let sum = Number(prompt("summani kiriting"));
if (sum >= 50 && sum <= 300) {
  let b = sum * 0.15;
  console.log(b);
  let c = b + sum;
  alert(`usluga ${b} umumiy qiymat ${c}`);
} else {
  let b = sum * 0.2;
  let c = b + sum;
  alert(`usluga ${b} umumiy qiymat ${c}`);
}
