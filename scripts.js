
const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * choices.length);
    return(choice, choices[choice]);
}

function playRound(playerSelection, computerSelection) {
    if (!((playerSelection == "rock") || (playerSelection == "scissors") || (playerSelection == "paper"))) {
        console.log("Enter rock, paper, or scissors...");
        return;
    } else if ( playerSelection === computerSelection) {
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

  }