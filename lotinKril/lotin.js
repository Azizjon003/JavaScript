let lotinMap = new Map([
  ["a", "а"],
  ["b", "б"],
  ["d", "д"],
  ["e", "е"],
  ["f", "ф"],
  ["g", "г"],
  ["h", "ҳ"],
  ["i", "и"],
  ["j", "ж"],
  ["k", "к"],
  ["l", "л"],
  ["m", "м"],
  ["n", "н"],
  ["o", "о"],
  ["p", "п"],
  ["q", "қ"],
  ["r", "р"],
  ["s", "с"],
  ["u", "у"],
  ["v", "в"],
  ["x", "х"],
  ["y", "й"],
  ["z", "з"],
  [" ", " "],
  ["yo", "ё"],
  ["Yo", "Ё"],
  ["yu", "ю"],
  ["Yu", "Ю"],
  ["ya", "я"],
  ["Ya", "Я"],
  ["сh", "ч"],
  ["Ch", "Ч"],
  ["sh", "ш"],
  ["Sh", "Ш"],
  ["t", "т"],
  ["o'", "ў"],
  ["g'", "ғ"],
]);
function convert() {
  let suz1 = document.querySelector(".lotin").value;
  let suz = suz1.split("");
  for (let [a, b] of lotinMap) {
    for (let i = 0; i < suz.length; i++) {
      if (suz[i] == "y" && suz[i + 1] == "u") {
        suz[i] = "yu";
        delete suz[i + 1];
      }
      if (suz[i] == "Y" && suz[i + 1] == "u") {
        suz[i] = "Yu";
        delete suz[i + 1];
      }
      if (suz[i] == "o" && suz[i + 1] == "'") {
        suz[i] = "o'";
        delete suz[i + 1];
      }
      if (suz[i] == "g" && suz[i + 1] == "'") {
        suz[i] = "g'";
        delete suz[i + 1];
      }
      if (suz[i] == "y" && suz[i + 1] == "a") {
        suz[i] = "ya";
        delete suz[i + 1];
      }
      if (suz[i] == "Y" && suz[i + 1] == "a") {
        suz[i] = "Ya";
        delete suz[i + 1];
      }
      if (suz[i] == "y" && suz[i + 1] == "o") {
        suz[i] = "yo";
        delete suz[i + 1];
      }
      if (suz[i] == "Y" && suz[i + 1] == "o") {
        suz[i] = "Yo";
        delete suz[i + 1];
      }
      if (suz[i] == "s" && suz[i + 1] == "h") {
        suz[i] = "sh";
        delete suz[i + 1];
      }
      if (suz[i] == "S" && suz[i + 1] == "h") {
        suz[i] = "Sh";
        delete suz[i + 1];
      }
      if (suz[i] == "c" && suz[i + 1] == "h") {
        suz[i] = "сh";
        delete suz[i + 1];
      }

      if (suz[i] == "C" && suz[i + 1] == "h") {
        suz[i] = "Ch";
        delete suz[i + 1];
      }
      if (
        suz[i] !== a &&
        typeof suz[i] === "string" &&
        suz[i].toLowerCase() == a
      ) {
        suz[i] = b.toUpperCase();
      }
      if (a == suz[i]) {
        suz[i] = b;
      }
    }
  }
  let result = suz.join("");
  document.querySelector(".Krill").value = result;
}

setInterval(() => {
  convert();
  krilLotin();
}, 1000);

function krilLotin() {
  let kril1 = document.querySelector(".lotin1").value;
  let kril = kril1.split("");
  for (let [a, b] of lotinMap) {
    for (let i = 0; i < kril.length; i++) {
      if (
        kril[i] !== b &&
        typeof kril[i] === "string" &&
        kril[i].toLowerCase() == b
      ) {
        kril[i] = a.toUpperCase();
      }
      if (b == kril[i]) {
        kril[i] = a;
      }
    }
  }
  let sprit = kril.join("");
  document.querySelector(".Krill1").value = sprit;
}

// console.log(kril);

// a b c d e f g h i j k l m n o p q r s t u v w x y z
// а	a
// б	b
// в	v
// г	g
// д	d
// е	e
// ё	yo
// ж	j
// з	z
// и	i
// й	y
// к	k
// л	l
// м	m
// 	n
// о	o
// п	p
// р	r
// с	s
// т	t
// у	u
// ф	f
// х	x
// ц	s
// ч	ch
// ш	sh
// щ	sh
// ъ	'
// ы	i
// ь	'
// э	e
// ю	yu
// я	ya
// ў	o‘
// ғ	g‘
// қ	q
// ҳ	h
// е
