const btnrock = document.querySelector('#rock');
btnrock.addEventListener('click', () => {playRound('rock', computerPlay()), console.log(this)});

const btnscissors = document.querySelector('#scissors');
btnscissors.addEventListener('click', () => {playRound('scissors', computerPlay()), console.log(this)});

const btnpaper = document.querySelector('#paper');
btnpaper.addEventListener('click', () => {playRound('paper', computerPlay()), console.log(this)});

result = document.querySelector('#results-container');
message = document.querySelector('#message-container');
winner = document.querySelector('#winner-container');

// Function computerPlay randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay() {
    var myArray = [
        'Rock',
        'Paper',
        'Scissors'
      ];
      
    return myArray[Math.floor(Math.random()*myArray.length)];
}

var win = 0; // Player Score
var loss = 0; // Computer Score

// Function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    var player = toCapital(playerSelection);
    var computer = toCapital(computerSelection);
    winner.style.display = 'none';
    
    if (player === 'Rock' && computer === 'Rock') {
        result.textContent = 'Draw! Rock equals to Rock';
        message.textContent = 'Computer: ' + loss + ' Player: ' + win;

      } else if (player === 'Rock' && computer === 'Paper') {
        result.textContent = 'You Lose! Paper beats Rock';
        loss++;
        message.textContent = 'Computer: ' + loss + ' Player: ' + win;

      } else if (player === 'Rock' && computer === 'Scissors') {
        result.textContent = 'You Win! Rock beats Scissors';
        win++;
        message.textContent = 'Computer: ' + loss + ' Player: ' + win; 
 
      } else if (player === 'Paper' && computer === 'Rock') {
        result.textContent = 'You Win! Paper beats Rock';
        win++;
        message.textContent = 'Computer: ' + loss + ' Player: ' + win;
       
      } else if (player === 'Paper' && computer === 'Paper') {
        result.textContent = 'Draw! Paper equals to Paper';
        message.textContent = 'Computer: ' + loss + ' Player: ' + win;
       
      } else if (player === 'Paper' && computer === 'Scissors') {
        result.textContent = 'You Lose! Scissors beat Paper!';
        loss++;
        message.textContent = 'Computer: ' + loss + ' Player: ' + win;
  
      } else if (player === 'Scissors' && computer === 'Rock') {
        result.textContent = 'You Lose! Rock beats Scissors';
        loss++;
        message.textContent = 'Computer: ' + loss + ' Player: ' + win;
      
      } else if (player === 'Scissors' && computer === 'Paper') {
        result.textContent = 'You Win! Scissors beat Paper';
        win++;
        message.textContent = 'Computer: ' + loss + ' Player: ' + win;
     
      } else if (player === 'Scissors' && computer === 'Scissors') {
        result.textContent = 'Draw! Scissors equal to Scissors';
        message.textContent = 'Computer: ' + loss + ' Player: ' + win;

      } else {
        alert('You did not enter a valid response. Please try again.');
      }
      
      if (loss == 5){
        winner.style.display = 'block';
        winner.textContent = 'Computer wins! You lose. Do you want to play again?';
        loss = 0;
        win = 0;
      } else if (win == 5){
        winner.style.display = 'block';
        winner.textContent = 'You win! Do you want to play again?';
        loss = 0;
        win = 0;
      }
    }

// Helper function that takes a string and returns it with only the first letter capitalized.
// It is case insensitive and users can input rock, ROCK, RocK or any other variation.
function toCapital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}