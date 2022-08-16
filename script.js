




// function getComputerChoice() {
// let computerSelection = choice[Math.floor(Math.random() * choice.length)];
// return computerSelection;
// }

// function getPlayerChoice() {
// let playerSelection = prompt("rock, paper or scissors?").toLowerCase();
// return playerSelection;
// }
let playerWin = 0;
let computerWin = 0;

function playRound() {
  let choice = ["rock", "paper", "scissors"];
  let computerSelection = choice[Math.floor(Math.random() * choice.length)];
  let playerSelection = "rock";

if (playerSelection == computerSelection) {
    return ("tie");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return ++computerWin;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return ++playerWin;
} else if (playerSelection == "paper" && computerSelection == "scissors") {
    return ++computerWin;
} else if (playerSelection == "paper" && computerSelection == "rock") {
    return ++playerWin;
} else if (playerSelection == "scissors" && computerSelection == "rock") {
    return ++computerWin;
} else if (playerSelection == "scissors" && computerSelection == "paper") {
    return ++playerWin;
  } else {
    alert ("User input error");
  }
}

function game() {
  playRound();
for (let rounds = 0; rounds <= 5; ++rounds) {
if (playerWin >= 3) {
console.log("playerWin");
} else {
console.log(computerWin);
}
}
}


// const computerSelection = getComputerChoice();
// const playerSelection = getPlayerChoice();
// console.log(playRound(playerSelection, computerSelection));
// console.log(game(playRound));
