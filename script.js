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

let userScore = 0;
let computerScore = 0;

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
        computerScore += 1;
        return "You lose! " + "Rock beats scissors...";
    } else if(computerChoice === "paper" && userChoice === "rock") {
        computerScore += 1;
        return "You lose! " + "Paper beats rock...";
    } else if(computerChoice === "scissors" && userChoice === "paper") {
        computerScore += 1;
        return "You lose! " + "Scissors beat paper...";
    } else if(computerChoice === "rock" && userChoice === "paper") {
        userScore += 1;
        return "You win! " + "Paper beats rock! ^^";
    } else if(computerChoice === "paper" && userChoice === "scissors") {
        userScore += 1;
        return "You win! " + "Scissors beat paper! ^^";
    } else if(computerChoice === "scissors" && userChoice === "rock") {
        userScore += 1;
        return "You win! " + "Rock beats scissors! ^^";
    } else {
        console.log("Tie! Play again.")
        console.log(playRound());
        }
    }
    function game() {
        console.log(playRound());
    }

    while(userScore < 5 && computerScore < 5) {
        game();
        console.log("Humans: " + userScore, "Robots: " + computerScore);
        if(userScore == 5) {
            console.log("Congrats! You won the game");
        } else if(computerScore == 5) {
            console.log("Loser.");
        }
    }