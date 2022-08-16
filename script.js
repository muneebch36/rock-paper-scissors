
let choice = ["rock", "paper", "scissors"];

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
    return ("player wins");
} else if (playerSelection == "paper" && computerSelection == "scissors") {
    return ("computer wins");
} else if (playerSelection == "paper" && computerSelection == "rock") {
    return ("player wins");
} else if (playerSelection == "scissors" && computerSelection == "rock") {
    return ("computer wins");
} else if (playerSelection == "scissors" && computerSelection == "paper") {
    return ("player wins");
  } else {
    return ("not draw");
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


/*
console.log(playRound(playerSelection, computerSelection));
let playerSelection = prompt("rock,paper or scissors?").toLowerCase(); 
*/
