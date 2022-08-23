let playerWin = 0;
let computerWin = 0;

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
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

function rock() {
  let computerSelection = getComputerChoice();
  let playerSelection = "rock";
  document.querySelector("#status").textContent = (playRound(playerSelection, computerSelection));
  document.querySelector(".score").textContent = ("score: " +playerWin + "-" +computerWin);
  resetGame();
}

function paper() {
  let computerSelection = getComputerChoice();
  let playerSelection = "paper";
  document.querySelector("#status").textContent = (playRound(playerSelection, computerSelection));
  document.querySelector(".score").textContent = ("score: " +playerWin + "-" +computerWin);
  resetGame();
}

function scissors() {
  let computerSelection = getComputerChoice();
  let playerSelection = "scissors";
  document.querySelector("#status").textContent = (playRound(playerSelection, computerSelection));
  document.querySelector(".score").textContent = ("score: " +playerWin + "-" +computerWin);
   resetGame();
}

function resetGame() {
  if (computerWin === 5) {
    document.querySelector("#status").textContent = "";   
    document.querySelector(".score").textContent = ("Computer wins " +computerWin + "-" +playerWin);
    playerWin = 0;
    computerWin = 0;
  } else if (playerWin === 5) { 
    document.querySelector("#status").textContent = "";                     
    document.querySelector(".score").textContent = ("Player wins " +playerWin + "-" +computerWin);
    playerWin = 0;
    computerWin = 0;
  }
  }