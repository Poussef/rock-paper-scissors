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
        if ( playerSelection === "rock" && computerSelection === "paper") {
            return("Paper beats rock, you lose!");
        } else if ( playerSelection === "rock" && computerSelection === "scissors") {
            return("Rock beats scissors, you won!");
        } else if ( playerSelection === "paper" && computerSelection === "scissors") {
            return("Scissors beats paper, you lose!");
        } else if ( playerSelection === "paper" && computerSelection === "rock") {
            return("Paper beats rock, you won!");
        } else if ( playerSelection === "scissors" && computerSelection === "rock") {
            return("Rock beats scissors, you lose!");
        } else if( playerSelection === "scissors" && computerSelection === "paper") {
            return("Scissors beats paper, you won!");
        }    
      }
    }
    
     
  console.log(playRound(playerSelection, computerSelection));

