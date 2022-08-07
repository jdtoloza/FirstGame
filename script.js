'use strict';
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)

    if(!guess) {
        document.querySelector('.message').textContent = 'No Number!'
        // when player wins
    } else if (guess === secretNumber) {
        displayMessage(`Correct Number!`);
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = `30rem`;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = score
        }
    } else if (guess !== secretNumber){
        if (score > 1) {
            displayMessage(guess > secretNumber ? `Too High!` : `Too Low!`)
            score--;
            document.querySelector('.score').textContent = score
        } else {
            displayMessage(`You lost the game!`)
        }
    }
});

// ============================================================
// Game Reset Button 

let resetButton = document.querySelector('.again')

resetButton.addEventListener('click', resetGame)

function resetGame(){
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = `15rem`;
    document.querySelector('.guess').value = ''
    document.querySelector('.message').textContent = `Start guessing...`
    document.querySelector('.score').textContent = score
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.number').textContent = '?';
    
}

// Refactoring  Code: The DRY Principle

// You want dry code so you don't have to go to ALL the places to change the value. It can be a nightmare in a big codebase. 

