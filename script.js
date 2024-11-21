let userHP = 7;
const outLine = [];
let givenWord = [];
let randomIndex;

function randomWordGenerator() {
  givenWord = ["testezjocul", "spanzuratoarea", "esteuntest", "hangman", "programare", "wellcode",];
  randomIndex = Math.floor(Math.random() * givenWord.length);
  for (let i = 0; i < givenWord[randomIndex].length; ++i) {
    outLine.push("_");
  }
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
  const currentLetter = letterInput.value.toLowerCase();
  letterInput.value = "";
  for (let i = 0; i < givenWord[randomIndex].length; ++i) {
    if (currentLetter == givenWord[randomIndex][i] && outLine[i] == "_") {
      outLine[i] = currentLetter;
      ++validLetters;
    }
  }
  document.getElementById("wordContainer").textContent = outLine.join(" ");
  if (!givenWord[randomIndex].includes(currentLetter)) {
    --userHP;
    document.getElementById("hitpoints").innerHTML = userHP;
  }
  gameStatus();
}

function gameStatus() {
  let result = document.createElement("p");
  if (userHP == 0) {
    document.getElementById("wordContainer").textContent = "";
    result.textContent = "You lost!";
  }
  if (validLetters == givenWord[randomIndex].length && userHP != 0) {
    document.getElementById("wordContainer").textContent = "";
    result.textContent = "You won!";
  }
  document.getElementById("wordContainer").appendChild(result);
}
