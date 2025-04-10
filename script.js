function getComputerChoice() {
  let computerChoice = "";

  let randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }

  console.log(computerChoice);
  return computerChoice;
}

getComputerChoice();

function getHumanChoice() {
  let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
  let humanChoice = "";

  switch (choice) {
    case "rock":
      humanChoice = "rock";
      break;
    case "paper":
      humanChoice = "paper";
      break;
    case "scissors":
      humanChoice = "scissors";
      break;
  }

  console.log(humanChoice);
  return humanChoice;
}

getHumanChoice();
