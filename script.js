//function declaration with computer choices and return for a random choice
function computerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

//player choice function declaration
function playerChoice() {
  let playerInput = prompt("Rock, Paper or Scissors?");
  //makes input first letter uppercase and the rest lowercase
  playerInput =
    playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

  return playerInput;
}

//game results
let playerScore = 0;
let compScore = 0;

//function declaration with playRound and adding score to the round's winner
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    playerScore++;
    return "Player wins this round!";
  } else {
    compScore++;
    return "Computer wins this round!";
  }
}

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
