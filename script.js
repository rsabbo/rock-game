/*//generate number between 1 and 3

function getComputerChoice(max, min) {

  //generate number between max & min
  const choice = Math.floor(Math.random() * (max - min + 1) + min);

  if (choice === 1) {
    return "Rock";
  } else if (choice === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

getComputerChoice(3, 1);
*/

function getComputerChoice() {
  //generate number between 0 and 2
  const choice = Math.floor(Math.random() * 3);

  //define the return for each value
  if (choice === 0) {
    return "Rock";
  } else if (choice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

getComputerChoice();
