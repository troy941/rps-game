// Below is the code for the computer's random selection.
//const rockPaperSciccors = ["rock","paper","scissors"];

//function getComputerChoice() {
   // const randomChoice = Math.floor(Math.random() * rockPaperSciccors.length);

   // const choice = rockPaperSciccors[randomChoice];

   // return choice;
//}
//let computerChoice = getComputerChoice();

//console.log(computerChoice);

// Below is the code for the user's selection. It's set to lower case to match the original array.
//let getUserChoice = prompt("Make your choice! Rock, paper or sciccors!", "");

//let userChoice = getUserChoice.toLocaleLowerCase();

//console.log(userChoice);

//Here it is! Baby's first game :)


function playRound() {
const rockPaperSciccors = ["rock","paper","scissors"];

function getComputerChoice() {
let randomChoice = Math.floor(Math.random() * rockPaperSciccors.length);
    
let choice = rockPaperSciccors[randomChoice];
    
    return choice;
 }

let computerChoice = getComputerChoice();
console.log(computerChoice);

let getUserChoice = prompt("Make your choice! Rock, paper or sciccors!", "");
let userChoice = getUserChoice.toLocaleLowerCase();
console.log(userChoice);

if(computerChoice === "rock" && userChoice === "scissors") {
    return "You lose! Rock beats scissors...";
} else if(computerChoice === "paper" && userChoice === "rock") {
    return "You lose! Paper beats rock...";
} else if(computerChoice === "scissors" && userChoice === "paper") {
    return "You lose! Scissors beat paper...";
} else if(computerChoice === "rock" && userChoice === "paper") {
    return "You win! Paper beats rock! ^^";
} else if(computerChoice === "paper" && userChoice === "scissors") {
    return "You win! Scissors beat paper! ^^";
} else if(computerChoice === "scissors" && userChoice === "rock") {
    return "You win! Rock beats scissors! ^^";
} else if(computerChoice === "rock" && userChoice === "scissors") {
    return "You lose! Rock beats sciissors...";
} else {
    console.log("Tie! Play again.")
    console.log(playRound());
    }
}
console.log(playRound());
