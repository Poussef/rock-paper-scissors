const computerSelection = getComputerChoice();
const playerSelection = getPlayerSelection();

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 4);
    return(choice, choices[choice]);
}

function getPlayerSelection () {
    for (let i = 0; i = 1; i) {
        playerInput = prompt("Rock, paper, or scissors?").toLowerCase();
        if (!((playerInput == "rock") || (playerInput == "scissors") || (playerInput == "paper"))) {
            console.log("Enter rock, paper, or scissors...");
        } else if((playerInput == "rock") || (playerInput == "scissors") || (playerInput == "paper")){
            return(playerInput);
        }
        i += 1;
    }
}

function playRound(playerSelection, computerSelection) {
    for (let i = 0; i = 1; i) {
        while ( playerSelection === computerSelection) {
            console.log("It's a tie! Go again.");
            playerSelection = getPlayerSelection();
            computerSelection = getComputerChoice();
        }
        if (( playerSelection === "rock" && computerSelection === "paper") || 
            ( playerSelection === "paper" && computerSelection === "scissors") ||
            ( playerSelection === "scissors" && computerSelection === "rock")) {  
                      
            return(`${computerSelection} beats ${playerSelection}, you lose!`);
        } else if (( playerSelection === "rock" && computerSelection === "scissors") ||
                   ( playerSelection === "paper" && computerSelection === "rock") ||
                   ( playerSelection === "scissors" && computerSelection === "paper")) { 

            return(`${playerSelection} beats ${computerSelection}, you won!`);
        } 
    }    
}


console.log(playRound(playerSelection, computerSelection));

