




// function getComputerChoice() {

// return computerSelection;
// }

// function getPlayerChoice() {
// 
// return playerSelection;
// }
let playerWin = 0;
let computerWin = 0;

function playRound(playerSelection,computerSelection) {

if (playerSelection == computerSelection) {
    return ("tie");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    ++computerWin;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    ++playerWin;
} else if (playerSelection == "paper" && computerSelection == "scissors") {
    ++computerWin;
} else if (playerSelection == "paper" && computerSelection == "rock") {
    ++playerWin;
} else if (playerSelection == "scissors" && computerSelection == "rock") {
    ++computerWin;
} else if (playerSelection == "scissors" && computerSelection == "paper") {
    ++playerWin;
  } else {
    return ("User input error");
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


let playerSelection = prompt("rock, paper or scissors?").toLowerCase();
let choice = ["rock", "paper", "scissors"];
let computerSelection = choice[Math.floor(Math.random() * choice.length)];
// console.log(playRound(playerSelection, computerSelection));
// console.log(game(playRound));
