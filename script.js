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


let playerScore = 0;
let computerScore = 0; 

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    displayChoices(playerChoice, computerChoice);
    let winner = checkRoundWinner(playerChoice, computerChoice);
    if (winner === 'Player') {
        playerScore++;
        displayResults(`You win! ${playerChoice} beats ${computerChoice}`);
    } else if ( winner === 'Computer') {
        computerScore++;
        displayResults(`You lose! ${computerChoice} beats ${playerChoice}`);
    } else if (playerChoice != null) {
        displayResults(`It's a tie!`);
    }
}

function displayChoices (playerChoice, computerChoice) {
    const playerChoiceBoard = document.querySelector('.player-choice');
    playerChoiceBoard.textContent = `Your choice: ${playerChoice}`;

    const computerChoiceBoard = document.querySelector('.computer-choice');
    computerChoiceBoard.textContent = `Computer's choice: ${computerChoice}`;
   
}
function checkRoundWinner(playerChoice, computerChoice) {
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
function displayResults (result) {
    const display = document.querySelector('.result-display');
    const playerScoreBoard = document.querySelector('.player-score');
    const computerScoreBoard = document.querySelector('.computer-score');
    display.textContent = result;
    playerScoreBoard.textContent = `Your score: ${playerScore}`;
    computerScoreBoard.textContent = `Computer's score: ${computerScore}`;
}

function checkGameWinner () {
    if (playerScore === 5) {
        return 'player';
    } else if (computerScore === 5) {
        return 'computer';
    } else {
        return null;
    }
}
function endGame(winner) {
    const buttonContainer = document.querySelector('.game-buttons');
    buttonContainer.remove();
    const display = document.querySelector('.result-display');
    display.textContent = `the winner of the game is ${winner}! Please refresh the page to restart`;
}
function playGame () {
    const rockButton = document.querySelector('.rock-button');
    rockButton.addEventListener('click', () => {
        playRound('rock');
        if (checkGameWinner()) {
            endGame(checkGameWinner());
        }
    });
    const paperButton = document.querySelector('.paper-button');
    paperButton.addEventListener('click', () => {
        playRound('paper');
        if (checkGameWinner()) {
            endGame(checkGameWinner());
        }
    });
    const scissorsButton = document.querySelector('.scissors-button');
    scissorsButton.addEventListener('click', () => {
        playRound('scissors');
        if (checkGameWinner()) {
            endGame(checkGameWinner());
        }
    }); 
}


playGame()
