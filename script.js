//To get computer choice
function getComputerChoice() {
//initialise variable for computer choice   
    let computerChoice;
//Get a random integer between 0 and 3 (excluding 3) by multiplying output of math.random by 3 and truncating it
let randInt = Math.floor (Math.random() * 3);
//IF random int is 0 then computer chooses rock
if (randInt === 0) {
    computerChoice = 'rock';
}
//ELSE IF random int is 1 then computer chooses paper
else if (randInt === 1) {
    computerChoice = 'paper';
}
//ELSE random int is 2 then computer chooses scissors
else {
    computerChoice = 'scissors';
}
return computerChoice;
}

console.log(getComputerChoice());
