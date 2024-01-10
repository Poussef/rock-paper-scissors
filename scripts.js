var computerSelection = getComputerChoice();
var playerSelection = getPlayerSelection();

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    console.log(choice);
    return (choice, choices[choice]);
}

function getPlayerSelection() {
    for (let i = 0; i = 1; i) {
        playerInput = prompt("Rock, paper, or scissors?").toLowerCase();
        if (!((playerInput == "rock") || (playerInput == "scissors") || (playerInput == "paper"))) {
            console.log("Enter rock, paper, or scissors...");
        } else if ((playerInput == "rock") || (playerInput == "scissors") || (playerInput == "paper")) {
            return (playerInput);
        }
        i += 1;
    }
}

var playerScore = 0;
var playerWin = Boolean();
const playerWon = (`${playerSelection} beats ${computerSelection}, point to player!
Current score: You: ${playerScore} Computer: ${computerScore}`);
var computerScore = 0;
var computerWin = Boolean();
const computerWon = (`${computerSelection} beats ${playerSelection}, point to computer!
Current score: You: ${playerScore} Computer: ${computerScore}`);

function game() {
    while ((playerScore || computerScore < 5)) {
        playRound(playerSelection, computerSelection);
        console.log(playerSelection);
        console.log(computerSelection);
        if (playerWin == true) {
            playerScore = playerScore + 1;
            console.log(playerScore);
            playerWin = " ";
            computerWin = " ";
            console.log(`${playerSelection} beats ${computerSelection}, point to player!
            Current score: You: ${playerScore} Computer: ${computerScore}`);
        } else if (computerWin == true) {
            computerScore = computerScore + 1;
            console.log(computerScore);
            playerWin = " ";
            computerWin = " ";
            console.log(`${computerSelection} beats ${playerSelection}, point to computer!
            Current score: You: ${playerScore} Computer: ${computerScore}`);
        }
    } 
    if (playerScore === 5) {
        i += 1;
        console.log("Good job, you have beat the computer!");
    } else if (computerScore === 5) {
        i += 1;
        console.log("Tough luck next time, the computer beat you...");
    }
}


console.log(game(playerSelection, computerSelection));

function playRound() {

    while (playerSelection === computerSelection) {
        console.log("It's a tie! Go again.");
        playerSelection = getPlayerSelection();
        computerSelection = getComputerChoice();
    }
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        computerWin = true;
        playerWin = false;
        return;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            computerWin = false;
            playerWin = true;
            return;
    }
}



