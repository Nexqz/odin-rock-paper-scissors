let humanScore = 0;
let computerScore = 0;

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

  console.log(`Computer: ${computerChoice}`);
  return computerChoice;
}

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

  console.log(`Human: ${humanChoice}`);
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      console.log("You lose! Paper beats Rock");
    } else if (computerChoice === "scissors") {
      humanScore++;
      console.log("You Win! Rock beats Scissors");
    } else {
      console.log("Its a tie!");
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      console.log("You Win! Paper beats Rock");
    } else if (computerChoice === "scissors") {
      computerScore++;
      console.log("You lose! Scissors beat Paper");
    } else {
      console.log("Its a tie!");
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      console.log("You lose! Rock beats scissors");
    } else if (computerChoice === "paper") {
      humanScore++;
      console.log("You win! Scissors beat paper");
    } else {
      console.log("Its a tie!");
    }
  }
}

function playGame(round) {
  for (let i = 0; i < round; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);

  if (humanScore < computerScore) {
    console.log("Computer Win");
  } else if (humanScore > computerScore) {
    console.log("Human Win");
  } else {
    console.log("Its a tie");
  }
}

playGame(2);
