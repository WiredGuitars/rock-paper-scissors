const options = ["rock", "paper", "scissors"]

const x = getComputerChoice()
function getComputerChoice(){
    const computerChoice = options[Math.floor(Math.random() * options.length)]
    return computerChoice
}
function getUserChoice(){
    userChoice = prompt("Choose your weapon: rock, paper, or scissors")
    return userChoice
}
const y = getUserChoice()
console.log(y)
console.log(x)
if y == "rock", x == "paper",
    