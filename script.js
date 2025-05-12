let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
let maxRound = 5;

function getHumanChoice() {
  const btnContainer = document.querySelector("#btn-container");
  let humanChoice = "";

  btnContainer.addEventListener("click", (event) => {
    let choice = event.target;

    switch (choice.id) {
      case "btn-rock":
        humanChoice = "rock";
        break;
      case "btn-paper":
        humanChoice = "paper";
        break;
      case "btn-scissors":
        humanChoice = "scissors";
        break;
    }

    if (humanChoice) {
      console.log(`Human: ${humanChoice}`);
      handleRound(humanChoice);
    }
  });
}

getHumanChoice();

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

function handleRound(humanChoice) {
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  roundCounter++;
  if (roundCounter >= maxRound) {
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);
  }
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
