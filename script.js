const answers = ["rock","paper","scissors"];

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * answers.length);

    const choice = answers[randomChoice];

    return choice;
}
console.log(getComputerChoice());