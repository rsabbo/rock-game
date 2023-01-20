//computer choices & function for random choice of 1 array's item

const choices = ["Rock", "Paper", "Scissors"];

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//player choice function
function playerChoice() {
  let playerInput = prompt("Rock, Paper or Scissors?");
  //makes input first letter uppercase and the rest lowercase
  playerInput =
    playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

  return playerInput;
}

//save the result of each function (computerChoice and playerchoice) inside variables
const playerSelection = playerChoice();
const computerSelection = computerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(gameResults(playerSelection, computerSelection));

function gameResults(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    return "Player wins!";
  } else {
    return "Computer wins!";
  }
}

function game() {
  gameResults(playerSelection, computerSelection);
}

game();
