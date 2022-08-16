
let choice = ["rock", "paper", "scissors"];
let playerWin = 0;
let computerWin = 0;
let draw = 0;
let rounds = 0;

let getComputerChoice = () => {
let computerSelection = choice[Math.floor(Math.random() * choice.length)];
return computerSelection;
}

function playRound(playerSelection, computerSelection) {
if (playerSelection == computerSelection) {
    return ++draw;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return ++computerWin;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return ("playerWin")
} else if (playerSelection == "paper" && computerSelection == "scissors") {
    return ++computerWin;
} else if (playerSelection == "paper" && computerSelection == "rock") {
    return ("playerWin")
} else if (playerSelection == "scissors" && computerSelection == "rock") {
    return ++computerWin;
} else if (playerSelection == "scissors" && computerSelection == "paper") {
    return ("playerWin")
  } else {
    return ("User input error");
  }
}

function game(playRound) {
for (let i = 0; i < 5; i++) {
++rounds;
++computerWin;
++playerWin;
if (playerWin == 3) {
  return ("player wins");
 } else {
  return ("computer wins");
 }
}
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(game(playRound));

/*
console.log(playRound(playerSelection, computerSelection));
let playerSelection = prompt("rock,paper or scissors?").toLowerCase(); 
*/
