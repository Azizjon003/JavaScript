let user = String(prompt("loginni kiriting"));

if (user == "User") {
  let parol = String(prompt("parolinngizni kiriting"));
  if (parol == "user") {
    alert("tabriklaymiz user bolib tzimga kirdingiz");
  }
} else {
  alert("error");
}

if (user == "Admin") {
  let parol = String(prompt("parolinngizni kiriting"));
  if (parol == "admin") {
    alert("tabriklaymiz admin bolib tzimga kirdingiz");
  }
} else {
  alert("error");
}
