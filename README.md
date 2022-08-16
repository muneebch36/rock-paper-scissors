# rock-paper-scissors

JS project.

random thoughts:

-get random input from computer out of 3 choices.
given 3 choices use a math.random? to choose one?
dont think math.random works on strings. make an array?
computerChoice = [rock, paper, scissors];

let getComputerChoice = (rock, paper, scissors) => {
stringify the chosen randomized result


-get user input
playerSelection = prompt("rock,paper or scissors?"," ").toLowerCase();

-play a single round of rps.
computer choice input compared to player selection
comparisons made out of the given scenarios 

if playerSelection == 'rock'
rock > paper
rock == rock
rock < scissors

paper > rock
paper == paper
paper < scissors

scissors > paper
scissors == scissors
scissors < rock

return ("You Lose/Win X beats X");


round started with function

-play a game consisting of 5 rounds where winner is announced at the end



