const options = ["rock","paper","scissors"]


let playerScore = 0
let computerScore = 0
function game() {
    for (let i = 0; i < 5; i++){
        let computerMove = options[(Math.floor(Math.random() * 3))]
        let playerMove = prompt("Select your weapon: Rock, Paper, or Scissors").toLowerCase()
        while ((playerMove !== "rock" && playerMove !== "paper" && playerMove !== "scissors"))
        {playerMove = prompt("Error, you can only use rock, paper, or scissors")}    
    if (playerMove == computerMove){
        console.log("Tie")
    }
    else if ((playerMove == "rock" && computerMove == "scissors") ||
            (playerMove == "paper" && computerMove == "rock") ||
            (playerMove == "scissors" && computerMove == "paper")) {
        playerScore++
    }
    else {
        computerScore++
    }
    }
    
    if (playerScore == computerScore){
        console.log(`Tie!
        Your score is ${playerScore} 
        Computer's score is ${computerScore}`)
    }
    else if (playerScore > computerScore){
        console.log(`You Win!
        Your score is ${playerScore}
        Computer's score is ${computerScore}`)
    }
    else {
        console.log(`You lose :(
        Your score is ${playerScore}
        Computer's score is ${computerScore}`)
    }
    
}
game()