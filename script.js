let userHP = 7;
let outLine = new Array();
const givenWord = ["testezjocul", "spanzuratoarea", "esteuntest", "hangman", "programare", "wellcode"];
let randomIndex = Math.floor(Math.random() * givenWord.length);

for (let i = 0; i < givenWord[randomIndex].length; ++i) {
  outLine.push("_");
}

function playGround() {
  document.getElementById("letterCount").innerHTML = givenWord[randomIndex].length;
  document.getElementById("hitpoints").innerHTML = userHP;
  document.getElementById("wordContainer").innerHTML = outLine.join(" ");
}

let validLetters = 0;

function checkLetter(event) {
  event.preventDefault();
  let letterInput = document.getElementById("letterInput");
  let currentLetter = letterInput.value.toLowerCase();
  letterInput.value = "";
  for (let i = 0; i < givenWord[randomIndex].length; ++i) {
    if (currentLetter == givenWord[randomIndex][i]) {
      outLine[i] = currentLetter;
      ++validLetters;
    }
  }
  document.getElementById("wordContainer").textContent = outLine.join(" ");
  if (!givenWord[randomIndex].includes(currentLetter)) {
    --userHP;
    document.getElementById("hitpoints").innerHTML = userHP;
  }
  if (userHP == 0) {
    loserParagraph();
  }
  if (validLetters == givenWord[randomIndex].length && userHP != 0) {
    winnerParagaph();
  }
}

function loserParagraph() {
  let lostParagraph = document.createElement("p");
  document.getElementById("wordContainer").textContent = "";
  lostParagraph.textContent = "You lost!";
  document.getElementById("wordContainer").appendChild(lostParagraph);
}

function winnerParagaph() {
  let wonParagraph = document.createElement("p");
  document.getElementById("wordContainer").textContent = "";
  wonParagraph.textContent = "You won!";
  document.getElementById("wordContainer").appendChild(wonParagraph);
}
