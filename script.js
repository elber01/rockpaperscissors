// this game is on spanish if you need it on english let me know
let computerScore = 0;
let humanScore = 0;


function getComputerChoice() {
    let computerChoice = Math.random() * 100;
    console.log(computerChoice);
    
    // Translating to  piedra, papel o tijera
    if (computerChoice <= 33) {
        console.log("PIEDRA");
        computerChoice = "PIEDRA";  // Asign the value
        return computerChoice;
    }
    else if (computerChoice > 33 && computerChoice <= 66) {
        console.log("PAPEL");
        computerChoice = "PAPEL";  // Asign the value
        return computerChoice;
    }
    else {
        console.log("TIJERA");
        computerChoice = "TIJERA";  // Asign the value
        return computerChoice;
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Elija que desea escoger: piedra, papel o tijera");
    humanChoice = humanChoice.toUpperCase();
    console.log(humanChoice);
    return humanChoice;
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        console.log("It's a tie");
    } 
    else if (computerChoice == "PIEDRA" && humanChoice == "PAPEL") {
        console.log("YOU WIN");
         humanScore += 1;
         
    } 
    else if (computerChoice == "PIEDRA" && humanChoice == "TIJERA") {
        console.log("YOU LOSE");
         computerScore += 1;
        
    } 
    else if (computerChoice == "PAPEL" && humanChoice == "PIEDRA") {
        console.log("YOU LOSE");
        computerScore += 1;
        
    } 
    else if (computerChoice == "PAPEL" && humanChoice == "TIJERA") {
        console.log("YOU WIN");
        humanScore += 1;
        
    } 
    else if (computerChoice == "TIJERA" && humanChoice == "PIEDRA") {
        console.log("YOU WIN");
        humanScore += 1;
        
    } 
    else if (computerChoice == "TIJERA" && humanChoice == "PAPEL") {
        console.log("YOU LOSE");
        computerScore += 1;
        
    } 
    else {
        console.log("El dato que introdujiste no es correcto");
    }
}


console.log (humanScore);
console.log (computerScore);

function playGame(){
    while (humanScore != 5 || computerScore !=5 ){
      // Execute the game
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        playRound(computerChoice, humanChoice);
  
        if (humanScore === 5) {
            console.log("YOU WIN THE GAME");
             break;
                } 
        else if (computerScore === 5) {
            console.log("YOU LOSE BY THE COMPUTER");
            break;
            } 
        }

}

playGame();