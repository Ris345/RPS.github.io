

let userScore = 0 
let computerScore = 0

let  Rock = document.getElementById('rock');

   Rock.addEventListener('click' , function (r){
    document.getElementById('userChoice').innerHTML = "ROCK"
    let userChoice = 'Rock';
    let computerChoice =  Math.floor(Math.random() * 3); 
    if (userChoice === 'Rock' && computerChoice === 0 ){
        document.getElementById('updateBoard').innerHTML = 'Tie! '
        document.getElementById('computerChoice').innerHTML = 'ROCK'

    } else if (  userChoice === 'Rock' && computerChoice === 1){
        document.getElementById('computerChoice').innerHTML = 'PAPER'
        document.getElementById('updateBoard').innerHTML = 'Computer Wins!'
        computerScore ++ 
        document.getElementById('computerScore').innerHTML = computerScore
        
    } else if (userChoice = 'Rock' && computerChoice === 2){
        document.getElementById('updateBoard').innerHTML = 'User Wins!'
        document.getElementById('computerChoice').innerHTML = 'SCISSORS'
        userScore ++ 
        document.getElementById('userScore').innerHTML = userScore
        
    }

})

let Paper = document.getElementById('paper');

  Paper.addEventListener('click' , function (p){
    document.getElementById('userChoice').innerHTML = "PAPER"
    let userChoice = 'Paper'
    let computerChoice =  Math.floor(Math.random() * 3); 
    if (userChoice === 'Paper' && computerChoice === 0 ){
        document.getElementById('updateBoard').innerHTML = 'User Wins! '
        document.getElementById('computerChoice').innerHTML = 'ROCK'
        userScore ++
        document.getElementById('userScore').innerHTML = userScore 

    } else if (  userChoice === 'Paper' && computerChoice === 1){
        document.getElementById('updateBoard').innerHTML = 'Tie!'
        document.getElementById('computerChoice').innerHTML = 'PAPER'

    } else if (userChoice = 'Paper' && computerChoice === 2){
        document.getElementById('updateBoard').innerHTML = 'Computer Wins!'
        document.getElementById('computerChoice').innerHTML = 'SCISSORS'
        computerScore ++ 
        document.getElementById('computerScore').innerHTML = computerScore
    }
    
})

let Scissors = document.getElementById('scissors');

 Scissors.addEventListener('click' , function (s){
    document.getElementById('userChoice').innerHTML = "SCISSORS"
    let userChoice = 'Scissors'
    let computerChoice =  Math.floor(Math.random() * 3); 
    if (userChoice === 'Scissors' && computerChoice === 0 ){
        document.getElementById('updateBoard').innerHTML = 'Computer Wins! '
        document.getElementById('computerChoice').innerHTML = 'ROCK'
        computerScore++ 
        document.getElementById('computerScore').innerHTML = computerScore

    } else if (  userChoice === 'Scissors' && computerChoice === 1){
        document.getElementById('updateBoard').innerHTML = 'User Wins!'
        document.getElementById('computerChoice').innerHTML = 'PAPER'
        userScore ++ 
        document.getElementById('userScore').innerHTML = userScore
        
    } else if (userChoice === 'Scissors' && computerChoice === 2){
        document.getElementById('updateBoard').innerHTML = 'Tie!'
        document.getElementById('computerChoice').innerHTML = 'SCISSORS'
    }
    
})







