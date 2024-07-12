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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let counter = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(humanChoice);
        switch (humanChoice) {
            case "rock":
                switch (computerChoice) {
                    case "paper":
                        console.log("You lose! Paper beats rock!");
                        computerScore++;
                        break;
                    case "scissors":
                        console.log("You win! Rock beats scissors!");
                        humanScore++
                        break;
                    case "rock":
                        console.log("It's a tie! Neither rock wins!");
                        break;
                    default:
                        console.log("Something is wrong!");
                }
                break;
            case "paper":
                switch (computerChoice) {
                    case "paper":
                        console.log("It's a tie! Neither paper wins!");
                        break;
                    case "scissors":
                        console.log("You lose! Scissors beats paper!");
                        computerScore++
                        break;
                    case "rock":
                        console.log("You win! Paper beats rock!");
                        humanScore++
                        break;
                    default:
                        console.log("Something is wrong!");
                }
                break;
            case "scissors":
                switch (computerChoice) {
                    case "paper":
                        console.log("You win! Scissors beats paper!");
                        humanScore++
                        break;
                    case "scissors":
                        console.log("It's a tie! Neither scissors wins!");
                        break;
                    case "rock":
                        console.log("You lose! Rock beats scissors!");
                        computerScore++
                        break;
                    default:
                        console.log("Something is wrong!");
                }
                break;
            default:
                console.log("Something is wrong!");
        }
    }

    while (counter !== 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        counter++;
    }

    if (humanScore > computerScore) {
        console.log(`You won! Your score was ${humanScore} and the computer's was ${computerScore}!`);
    }
    else if (computerScore > humanScore) {
        console.log(`You lost! Your score was ${humanScore} and the computer's was ${computerScore}!`);
    }
    else {
        console.log(`You tied! You and the computer both had a score of ${humanScore}!`);
    }
}