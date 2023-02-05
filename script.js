const startSection = document.querySelector(".startSection");
const movesSection = document.querySelector(".movesSection");
const playerSection = document.querySelector(".playerSection");
const winnerSection = document.querySelector(".winnerSection");
const resetSection = document.querySelector(".resetSection");

let roundWinner = document.querySelector(".roundWinner");
let playerMove = document.querySelector(".playerMove");
let compMove = document.querySelector(".compMove");
let playerSum = document.querySelector(".playerSum");
let compSum = document.querySelector(".compSum");
let results = document.querySelector(".results");
let reset = document.querySelector(".reset");
let winnerQuote = document.querySelector(".winnerQuote");
let winner = document.querySelector(".winner");
const buttons = document.querySelectorAll(".optionBtn");

reset.textContent = "Start game";

//computer choice
function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

//player choice
let playerSelection = "";
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", playGame);
}

//game score
let playerScore = 0;
let compScore = 0;

//play the game
function playGame(e) {
  if (playerScore < 5 && compScore < 5) {
    playerSelection = e.target.id;
    console.log(playerSelection);
    const computerSelection = computerChoice();
    roundResult(playerSelection, computerSelection);
    showWinner();
  } else if (playerScore === 5 || compScore === 5) {
    return;
  }
}

//round's result & updated scroe
function roundResult(playerSelection, computerSelection) {
  compMove.textContent = `${computerSelection}`;
  playerMove.textContent = `${playerSelection}`;
  if (playerSelection === computerSelection) {
    roundWinner.textContent = `You both picked ${playerSelection}: it's a tie!`;
    return;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    ++playerScore;

    playerSum.textContent = `Player: ${playerScore}`;
    roundWinner.textContent = `${playerSelection} beats ${computerSelection}: player wins!`;
    return;
  } else {
    ++compScore;
    compSum.textContent = `Computer: ${compScore}`;
    roundWinner.textContent = `${computerSelection} beats ${playerSelection}: computer wins!`;
    return;
  }
}

//determine final winner
function finalWinner() {
  if (playerScore > compScore) {
    winnerQuote.textContent = "Congratulations!";
    winner.textContent = "You're \n the winner!";
    return;
  } else if (playerScore < compScore) {
    winnerQuote.textContent = "Better luck next time!";
    winner.textContent = "The computer \n just beat you!";
    return;
  } else {
    winnerQuote.textContent = "It's a tie!";
    winner.textContent = "There's no \n winner!";
    return;
  }
}

//show final winner
function showWinner() {
  if (playerScore === 5 || compScore === 5) {
    movesSection.classList.add("displayNone");
    playerSection.classList.add("displayNone");
    winnerSection.classList.remove("displayNone");
    reset.classList.remove("displayNone");
    finalWinner();
    roundWinner.textContent = "Game over!";
    resetSection.classList.remove("displayNone");
    reset.textContent = "Play again";
    return;
  }
}

function resetGame() {
  roundWinner.textContent = "Rock paper scissors";
  playerMove.textContent = ".";
  playerSum.textContent = "Player: 0";
  compMove.textContent = ".";
  compSum.textContent = "Computer: 0";
  movesSection.classList.remove("displayNone");
  playerSection.classList.remove("displayNone");
  resetSection.classList.add("displayNone");
  startSection.classList.add("displayNone");
  winnerSection.classList.add("displayNone");
  playerSelection = "";
  playerScore = 0;
  compScore = 0;
  playGame;
}

reset.addEventListener("click", resetGame);
