let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let computerChoice = Math.random() * 100;
    
    if (computerChoice <= 33) {
        console.log("PIEDRA");
        return 1;
    } else if (computerChoice > 33 && computerChoice <= 66) {
        console.log("PAPEL");
        return 2;
    } else {
        console.log("TIJERA");
        return 3;
    }
}

// Variables for buttons
const piedra = document.querySelector('.rock');
const papel = document.querySelector('.paper');
const tijera = document.querySelector('.scissors');

// Función that manage user choices
function setupChoices() {
    piedra.addEventListener('click', () => playGame(1));
    papel.addEventListener('click', () => playGame(2));
    tijera.addEventListener('click', () => playGame(3));
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie");
    } else if ((computerChoice === 1 && humanChoice === 2) ||
               (computerChoice === 2 && humanChoice === 3) ||
               (computerChoice === 3 && humanChoice === 1)) {
        console.log("YOU WIN");
        humanScore += 1;
    } else {
        console.log("YOU LOSE");
        computerScore += 1;
    }
    const h1 = document.querySelector('h1');
    const div =  document.querySelector('.points');
    div.textContent= (`Human Score: ${humanScore}  Computer Score: ${computerScore}`);
    h1.appendChild (div);

}

function playGame(humanChoice) {
    let computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);

    if (humanScore === 5) {
        alert("YOU WIN THE GAME");
    } else if (computerScore === 5) {
        alert("YOU LOSE THE GAME");
    }
}

setupChoices();
