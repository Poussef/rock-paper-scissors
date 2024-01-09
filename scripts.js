const computerSelection = getComputerChoice();
const playerSelection = getPlayerSelection();

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * choices.length);
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
    if ( playerSelection === computerSelection) {
        console.log("It's a tie! Go again.");
        return;
    } else if ( playerSelection === "rock" && computerSelection === "paper") {
        console.log("Paper beats rock, you lose!");
        return;
    } else if ( playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Rock beats scissors, you won!");
        return;
    } else if ( playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Scissors beats paper, you lose!");
        return;
    } else if ( playerSelection === "paper" && computerSelection === "rock") {
        console.log("Paper beats rock, you won!");
        return;
    } else if ( playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Rock beats scissors, you lose!");
        return;
    } else if( playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Scissors beats paper, you won!");
        return;
    }    
  }
     
  console.log(playRound(playerSelection, computerSelection));

  function game() {
    const computerWin = 0;
    const playerWin = 0;
    

  }