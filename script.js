
let choice = ["rock", "paper", "scissors"];
let playerWin = 0;
let computerWin = 0;
let draw = 0;
let rounds = 0;

function getComputerChoice() {
let computerSelection = choice[Math.floor(Math.random() * choice.length)];
return computerSelection;
}

function getPlayerChoice() {
  let playerSelection = prompt("rock, paper or scissors?").toLowerCase();
  return playerSelection;
}


function playRound(playerSelection, computerSelection) {
if (playerSelection == computerSelection) {
    return ++draw;
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
    return ("User input error");
  }
}

function game(playRound) {
for (rounds = 0; rounds = 5; rounds++) {
if (playerWin || computerWin == 3) {
  return ("player wins");
 } else {
  return ("computer wins");
 }
}
}


const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(game(playRound));
console.log(playerWin, computerWin)

/*
console.log(playRound(playerSelection, computerSelection));
let playerSelection = prompt("rock,paper or scissors?").toLowerCase(); 
*/
