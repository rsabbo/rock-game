//function expression for computer choices and return for a random choice
const computerChoice = function () {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

//function expression for player choice
const playerChoice = function () {
  let playerInput = prompt("Rock, Paper or Scissors?");
  //makes input first letter uppercase and the rest lowercase
  playerInput =
    playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

  return playerInput;
};

//game results
let playerScore = 0;
let compScore = 0;

//function expression for playRound and adding score to the round's winner
const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    playerScore++;
    return "Player wins!";
  } else {
    compScore++;
    return "Computer wins!";
  }
};

//winner
function winner() {
  if (playerScore > compScore) {
    return "The human player it's the winner!";
  } else if (playerScore < compScore) {
    return "The computer beaten with you!";
  } else {
    return "No one won!";
  }
}

//5 rounds game
function game() {
  for (let i = 1; i <= 5; i++) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    console.log(
      playerSelection,
      computerSelection,
      playRound(playerSelection, computerSelection),
      playerScore,
      compScore
    );
  }
  console.log(winner());
}

game();
