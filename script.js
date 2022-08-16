
let choice = ["rock", "paper", "scissors"];

let getComputerChoice = () => {
let computerSelection = choice[Math.floor(Math.random() * choice.length)];
return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    // your code here!
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();


/*
console.log(playRound(playerSelection, computerSelection));
let playerSelection = prompt("rock,paper or scissors?").toLowerCase(); 
*/