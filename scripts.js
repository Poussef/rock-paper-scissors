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

let playerScore = 0;
let computerScore = 0;

function playRound() {
    const playerWon =`${playerSelection} beats ${computerSelection}, point to player!
    current score: you: ${playerScore} computer: ${computerScore}`;
    const computerWon = `${computerSelection} beats ${playerSelection}, point to computer!
    current score: you: ${playerScore} computer: ${computerScore}`;

    if (playerSelection === computerSelection) {
        console.log("it's a tie! go again.");
    } else if((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore += 1;
        console.log(computerWon);
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore += 1;
            console.log(playerWon);
    };

    computerSelection = getComputerChoice();
};