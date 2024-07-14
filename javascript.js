function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    let compChoice = getRandomInt(3);
    switch (compChoice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "Something is wrong!";
    }
}

function getHumanChoice() {
    let humChoice = prompt("What are you throwing?").toLowerCase();

    while ((humChoice !== "rock") && (humChoice !== "paper") && (humChoice !== "scissors")) {
        humChoice = prompt("Not a valid choice! Please pick: rock, paper, or scissors.").toLowerCase();
    }

    return humChoice;
}


let humanScore = 0;
let computerScore = 0;

let counter = 0;

const buttons = document.querySelector(".buttons");
const results = document.querySelector(".results");
const winner = document.querySelector(".winner");

buttons.addEventListener("click", (e) => {
    let target = e.target;

    playRound(target.className, getComputerChoice());
});

function playRound(humanChoice, computerChoice) {
    winner.textContent = "";
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "paper":
                    computerScore++;
                    results.textContent = `You lose! Paper beats rock! Score is, Human: ${humanScore} Computer: ${computerScore}`;
                    counter++;
                    break;
                case "scissors":
                    humanScore++
                    results.textContent = `You win! Rock beats scissors! Score is, Human: ${humanScore} Computer: ${computerScore}`;
                    counter++;
                    break;
                case "rock":
                    results.textContent = `It's a tie! Neither rock wins! Score is, Human: ${humanScore} Computer: ${computerScore}`;
                    counter++;
                    break;
                default:
                    results.textContent = `Something is wrong!`;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "paper":
                    results.textContent = `It's a tie! Neither paper wins! Score is, Human: ${humanScore} Computer: ${computerScore}`;
                    counter++;
                    break;
                case "scissors":
                    computerScore++
                    results.textContent = `You lose! Scissors beats paper! Score is, Human: ${humanScore} Computer: ${computerScore}`;
                    counter++;
                    break;
                case "rock":
                    humanScore++
                    results.textContent = `You win! Paper beats rock! Score is, Human: ${humanScore} Computer: ${computerScore}`;
                    counter++;
                    break;
                default:
                    results.textContent = `Something is wrong!`;
            }
            break;
        case "scissors":
            switch (computerChoice) {   
                case "paper":
                    humanScore++
                    results.textContent = `You win! Scissors beats paper! Score is, Human: ${humanScore} Computer: ${computerScore}`;
                    counter++;
                    break;
                case "scissors":
                    results.textContent = `It's a tie! Neither scissors wins! Score is, Human: ${humanScore} Computer: ${computerScore}`;
                    counter++;
                    break;
                case "rock":
                    computerScore++
                    results.textContent = `You lose! Rock beats scissors! Score is, Human: ${humanScore} Computer: ${computerScore}`;
                    counter++;
                    break;
                default:
                    results.textContent = `Something is wrong!`;
            }
            break;
        default:
            results.textContent = "Something is wrong!";
    }
    if (counter === 5) {
        if (humanScore > computerScore) {
            winner.textContent = `You won the game! Your score was ${humanScore} and the computer's was ${computerScore}!`;
        }
        else if (computerScore > humanScore) {
            winner.textContent = `You lost the game! Your score was ${humanScore} and the computer's was ${computerScore}!`;
        }
        else {
            winner.textContent = `You tied the game! You and the computer both had a score of ${humanScore}!`;
        }

        humanScore = 0;
        computerScore = 0;
        counter = 0;
    }
}