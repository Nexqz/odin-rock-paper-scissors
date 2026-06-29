let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let value = Math.floor(Math.random() * 3);
  switch (value) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function getHumanChoice() {
  let value = prompt("Choose Rock, Paper, or Scissors");
  return value.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  console.log(
    `Human Choice: ${humanChoice}, Computer Choice: ${computerChoice}`,
  );
  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      return "you win";
    } else if (computerChoice === "paper") {
      return "you lose";
    } else {
      return "tie";
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      return "you win";
    } else if (computerChoice === "scissors") {
      return "you lose";
    } else {
      return "tie";
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      return "you win";
    } else if (computerChoice === "rock") {
      return "you lose";
    } else {
      return "tie";
    }
  }
}

function playGame(rounds) {
  for (let i = 0; i < rounds; i++) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
  }
}

playGame(2);
