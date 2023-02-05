let roundWinner = document.querySelector(".roundWinner");
let roundResults = document.querySelector(".roundResults");
let playerMove = document.querySelector(".playerMove");
let compMove = document.querySelector(".compMove");
let playerSum = document.querySelector(".playerSum");
let compSum = document.querySelector(".compSum");
let results = document.querySelector(".results");
let reset = document.querySelector(".reset");
const buttons = document.querySelectorAll("button");

//computer choice
function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

//game score
let playerScore = 0;
let compScore = 0;

//round's result & updated scroe
function roundResult(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner.textContent = `It's a tie! You both picked ${playerSelection}`;
    roundResults.textContent = `Both picked ${playerSelection}`;
    return `It's a tie! You both picked ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    ++playerScore;

    playerSum.textContent = `Player: ${playerScore}`;
    roundWinner.textContent = `You win!`;
    roundResults.textContent = `${playerSelection} beats ${computerSelection}!`;
    return `Player wins this round because ${playerSelection} beats ${computerSelection}!`;
  } else {
    ++compScore;
    compSum.textContent = `Computer: ${compScore}`;
    roundWinner.textContent = `Computer wins!`;
    roundResults.textContent = `${computerSelection} beats ${playerSelection}!`;
    return `Computer wins this round because ${computerSelection} beats ${playerSelection}!`;
  }
}


//play the game: player choice + computer choice
function playGame() {
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function () {
      if (playerScore === 5 || compScore === 5) {
        return;
      } else {
        let id = button.getAttribute("id");
        let playerSelection = id;
        const computerSelection = computerChoice();
        roundResult(playerSelection, computerSelection);
        compMove.textContent = `Computer choose ${computerSelection}`;
        playerMove.textContent = `P choose ${playerSelection}`;
        showWinner();
      }
    });
  }
}

playGame();


//determine final winner
function finalWinner() {
  if (playerScore > compScore) {
    return "The human player it's the winner!";
  } else if (playerScore < compScore) {
    return "The computer beaten with you!";
  } else {
    return "No one won!";
  }
}

//shpw final winner
function showWinner() {
  if (playerScore === 5 || compScore === 5) {
    results.textContent = `The winner is: ${finalWinner()}`;
    return;
  }
}
