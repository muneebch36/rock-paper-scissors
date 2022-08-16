//Randomly Pick Rock, Paper, or Scissor
function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissor"];
  return choice[Math.floor(Math.random() * choice.length)];
}

//Play 1 round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Scissor") {
      return("You Win! " + playerSelection + " beat " + computerSelection);
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
      return("You Win! " + playerSelection + " beat " + computerSelection);
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
      return("You Win! " + playerSelection + " beat " + computerSelection)
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
      return("You Draw! " + playerSelection + " draw against " + computerSelection)
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
      return("You Draw! " + playerSelection + " draw against " + computerSelection)
  } else if (playerSelection === "Scissor" && computerSelection === "Scissor") {
      return("You Draw! " + playerSelection + " draw against " + computerSelection)
  } else {
      return("You Lose! " + computerSelection + " beat " + playerSelection);
  }
}

// Make input case-insensitive
function getPlayerChoice() {
return prompt("rock, paper or scissors?").toLowerCase();
}


// console.log(playRound(playerSelection, computerSelection));

function game() {
  for (let i = 0; i < 5; i++) {
      console.log(playRound(getPlayerChoice(), getComputerChoice()));
  }
}

game();