//possible choices for the players
const choices = ["Rock", "Paper", "Scissors"];

//function declaration that returns a random choice from the choices array
function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//player choice function declaration
function playerChoice() {
  let playerInput = prompt(
    "Which one will you play?",
    "Rock, Paper or Scissors"
  );

  //check if the player input is null and if not transform the written word in a word with the first letter uppercase and the rest lowercase
  let input =
    playerInput === null
      ? "This is not a valid answer"
      : playerInput.charAt(0).toUpperCase() +
        playerInput.slice(1).toLowerCase();

  //if the written word by the user it's not the same as the words on the choices array ["Rock", "Paper", "Scissors"] return "not valid answer" otherwise if it matches use the answer
  if (choices.indexOf(input) === -1) {
    return "Not a valid answer!";
  } else {
    return input;
  }
}

//game result
let playerScore = 0;
let compScore = 0;

//function declaration with playRound and adding score to the round's winner
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! You both picked ${playerSelection}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    playerScore++;
    return `Player wins this round because ${playerSelection} beats ${computerSelection}!`;
  } else {
    compScore++;
    return `Computer wins this round because ${computerSelection} beats ${playerSelection}!`;
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
