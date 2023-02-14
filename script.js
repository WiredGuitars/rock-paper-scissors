const options = ["rock", "paper", "scissors"]

const ComputerSelection = getComputerChoice()

function getComputerChoice(){
    const computerChoice = options[Math.floor(Math.random() * options.length)]
    return computerChoice
}

const UserSelection = getUserChoice()

function getUserChoice(){
    const userChoice = prompt("Choose your weapon: rock, paper, or scissors")
    return userChoice
}
function playRound(UserSelection, ComputerSelection){

}
function checkWinner(){
    if (UserSelection == ComputerSelection){
        return "Tie";
    }
    else if(
        (UserSelection == "rock" && ComputerSelection == "scissors") ||
        (UserSelection == "paper" && ComputerSelection == "rock") ||
        (UserSelection == "scissors" && ComputerSelection == "paper"))
        {
            return "You win!"
    }
    else if(
        (UserSelection == "rock" && ComputerSelection == "paper") ||
        (UserSelection == "paper" && ComputerSelection == "scissors") ||
        (UserSelection == "scissors" && ComputerSelection == "rock"))
        {
            return "You lose :("
        }
}

console.log(checkWinner())

console.log(ComputerSelection)

console.log(UserSelection)