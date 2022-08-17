function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function getPlayerChoice() {
  return prompt("rock, paper or scissors?").toLowerCase();
}  

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
      return("You Win! " + playerSelection + " beat " + computerSelection);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      return("You Win! " + playerSelection + " beat " + computerSelection);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return("You Win! " + playerSelection + " beat " + computerSelection)
  } else if (playerSelection === "rock" && computerSelection === "rock") {
      return("You Draw! " + playerSelection + " draw against " + computerSelection)
  } else if (playerSelection === "paper" && computerSelection === "paper") {
      return("You Draw! " + playerSelection + " draw against " + computerSelection)
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
      return("You Draw! " + playerSelection + " draw against " + computerSelection)
  } else if (playerSelection === "rock" && computerSelection === "paper") {
      return("You Lose! " + computerSelection + " beat " + playerSelection);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      return("You Lose! " + computerSelection + " beat " + playerSelection);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return("You Lose! " + computerSelection + " beat " + playerSelection);
  } else {
      return("User input error");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();