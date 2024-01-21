var computerSelection = getComputerChoice();
let playerSelection = " ";

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return (choice, choices[choice]);
}

const playerRock = document.getElementById("rock");
const playerPaper = document.getElementById("paper");
const playerScissors = document.getElementById("scissors");

playerRock.addEventListener('click', () =>{
    playerSelection = "rock";
    playRound(playerSelection, computerSelection);
});

playerPaper.addEventListener('click', () =>{
    playerSelection = "paper";
    playRound(playerSelection, computerSelection);
});

playerScissors.addEventListener('click', () =>{
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
});



function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

let playerScore = 0;
let computerScore = 0;

const winMessage = document.getElementById("winMessage");
const playerScoreboard = document.getElementById("player");
const computerScoreboard = document.getElementById("computer");

function playRound() {
    deleteChildElements(winMessage);  
    let gameMessage = document.createElement("div");

    const playerWon =`${playerSelection} beats ${computerSelection}, point to player!`;
    const computerWon = `${computerSelection} beats ${playerSelection}, point to computer!`;
    const tieGame =`it's a tie! go again`;

    if (playerSelection === computerSelection) {
            gameMessage.innerHTML = tieGame;
    } else if((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
            let newComputerScore = document.createElement("p");
            computerScore.innerHTML = `Computer: ${computerScore+= 1}`;
            deleteChildElements(computerScoreboard);
            computerScoreboard.append(computerScore);
            gameMessage.innerHTML = computerWon;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            let newPlayerScore = document.createElement("p");
            playerScore.innerHTML = `Player: ${playerScore+= 1}`;
            deleteChildElements(playerScoreboard);
            playerScoreboard.append(playerScore);
            gameMessage.innerHTML = playerWon;
    };

    winMessage.append(gameMessage);
    computerSelection = getComputerChoice();
};