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
            return "rock";
    }
}

function getHumanChoice() {
    let humChoice = prompt("What are you throwing?").toLowerCase();

    while ((humChoice !== "rock") && (humChoice !== "paper") && (humChoice !== "scissors")) {
        humChoice = prompt("Not a valid choice! Please pick: rock, paper, or scissors.").toLowerCase();
    }

    return humChoice;
}