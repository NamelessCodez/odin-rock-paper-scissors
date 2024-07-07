//GET computer choice
function getComputerChoice() {
//INITIALIZE variable for computer choice   
    let computerChoice;
//GET a random integer between 0 and 3 (excluding 3) by multiplying output of math.random by 3 and truncating it
    let randInt = Math.floor (Math.random() * 3);
//IF random int is 0 then computer chooses rock
    if (randInt === 0) {
        computerChoice = 'rock';
    }
//ELSE IF random int is 1 then computer chooses paper
    else if (randInt === 1) {
        computerChoice = 'paper';
    }
//ELSE computer chooses scissors
    else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

// GET Player choice
function getPlayerChoice() {
    playerChoice = prompt("Enter your choice");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return playerChoice;
    } else {
        console.log('Invalid input');
        return null;
    }
}

let playerScore = 0;
let computerScore = 0; 

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let winner = checkWinner(playerChoice, computerChoice);
    if (winner === 'Player') {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        playerScore++;
    } else if ( winner === 'Computer') {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        computerScore++;
    } else if (playerChoice != null) {
        console.log(`It's a tie!`);
    }
    
}
function playGame() {
    for (let i=0; i < 5; i++) {
        playRound();
    }
    if (playerScore < computerScore) {
        console.log(`You lose! Your score is ${playerScore}, while the computer's score is ${computerScore}`);
    } else if (playerScore > computerScore) {
        console.log(`You win! Your score is ${playerScore}, while the computer's score is ${computerScore}`);
    } else {
        console.log(`It's a tie`);
    }
}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return;
    } else {
        if (playerChoice === 'rock') {
            switch (computerChoice) {
                case 'paper':
                    return 'Computer';
                case 'scissors':
                    return 'Player';
            }
        } else if (playerChoice === 'paper') {
            switch (computerChoice) {
                case 'rock':
                    return 'Player';
                case 'scissors':
                    return 'Computer';       
            }
        } else {
            switch (computerChoice) {
                case 'rock':
                    return 'Computer';
                case 'paper':                  
                    return 'Player';
            }
        }
    }
}

playGame();