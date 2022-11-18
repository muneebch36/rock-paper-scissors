let playerWin = 0;
let computerWin = 0;

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  return computerSelection = choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection) {
  getComputerChoice();
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
  } 
}

function rock() {
  playerSelection = "rock";
  updateGame();
}

function paper() {
  playerSelection = "paper";
  updateGame();
}

function scissors() {
  playerSelection = "scissors";
  updateGame();
}

function updateGame() {
  if ((computerWin < 5) || (playerWin < 5)){
    document.querySelector("#status").textContent = (playRound(playerSelection));
    document.querySelector(".score").textContent = ("score: " +playerWin + "-" +computerWin);
  } 

  if (computerWin === 5) {     
    document.querySelector(".score").textContent = ("Computer wins " +computerWin + "-" +playerWin);
    resetButton(); 
  } else if (playerWin === 5) {                 
    document.querySelector(".score").textContent = ("Player wins " +playerWin + "-" +computerWin);
    resetButton(); 
  }
  }

  function resetButton() {
    document.querySelector("#status").textContent = "";   
    btn = document.createElement("button");
    document.querySelector("#status").appendChild(btn);
    btn.innerHTML = "New game?";
    btn.addEventListener("click", function () {
      alert("Game reset");
      playerWin = 0;
      computerWin = 0;
      document.querySelector(".score").textContent = "";
      btn.remove();
    });
  }


