let playerWin = 0;
let computerWin = 0;

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function getPlayerChoice() {
  return prompt("rock, paper or scissors?").toLowerCase();
}  

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
      ++playerWin;
      return("you win. " +playerSelection + " beats " +computerSelection);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      ++playerWin;
      return("you win. " +playerSelection + " beats " +computerSelection)
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      ++playerWin;
      return("you win. " +playerSelection + " beats " +computerSelection);
  } else if (playerSelection === computerSelection) {
      return("draw. " +playerSelection + " draws against " +computerSelection);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      ++computerWin;
      return("you lose. " +computerSelection + " beats " +playerSelection);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      ++computerWin;
      return("you lose. " +computerSelection + " beats " +playerSelection);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      ++computerWin;
      return("you lose. " +computerSelection + " beats " +playerSelection);
  } else {
      return("user input error");
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
console.log("final score is " +playerWin + "-" +computerWin);