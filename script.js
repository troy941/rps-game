// Below is the code for the computer's random selection.
const rockPaperSciccors = ["rock","paper","scissors"];

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * rockPaperSciccors.length);

    const choice = rockPaperSciccors[randomChoice];

    return choice;
}
// console.log(getComputerChoice());

// Below is the code for the user's selection. It's set to lower case to match the original array.
let getUserChoice = prompt("Make your choice! Rock, paper or sciccors!", "");

let userChoice = getUserChoice.toLocaleLowerCase();

// console.log(userChoice);
function game() {
if(getComputerChoice() === "rock" && userChoice === "scissors") {
    return "You lose! Rock beats scissors...";
} else if(getComputerChoice() === "paper" && userChoice === "rock") {
    return "You lose! Paper beats scissors...";
} else if(getComputerChoice() === "scisors" && userChoice === "paper") {
    return "You lose! Scissors beat paper...";
} else if(getComputerChoice() === "rock" && userChoice === "paper") {
    return "You win! Paper beats rock! ^^";
} else if(getComputerChoice() === "paper" && userChoice === "scissors") {
    return "You win! Scisors beat paper! ^^";
} else if(getComputerChoice() === "scissors" && userChoice === "rock") {
    return "You win! Rock beats scissors! ^^";
} else {
    return "Tie! Play again.";
    }
}
console.log(game());