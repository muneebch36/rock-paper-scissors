
let choice = ["rock", "paper", "scissors"];
let playerWin = 0;
let rounds = 0;

let getComputerChoice = () => {
let computerSelection = choice[Math.floor(Math.random() * choice.length)];
return computerSelection;
}

function playRound(playerSelection, computerSelection) {
if (playerSelection == computerSelection) {
    return ("Draw");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return ("computer wins");
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return ++playerWin;
} else if (playerSelection == "paper" && computerSelection == "scissors") {
    return ("computer wins");
} else if (playerSelection == "paper" && computerSelection == "rock") {
    return ++playerWin;
} else if (playerSelection == "scissors" && computerSelection == "rock") {
    return ("computer wins");
} else if (playerSelection == "scissors" && computerSelection == "paper") {
    return ++playerWin;
  } else {
    return ("User input error");
  }
}

function game(playRound)
for (let i = 0; i < 5; i++) {
rounds++;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(playerWin);


/*
console.log(playRound(playerSelection, computerSelection));
let playerSelection = prompt("rock,paper or scissors?").toLowerCase(); 
*/
