// Function computerPlay randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay() {
    var myArray = [
        'Rock',
        'Paper',
        'Scissors'
      ];
      
    return myArray[Math.floor(Math.random()*myArray.length)];
}

var w = 0;
var l = 0;

// Function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    var player = toCapital(playerSelection);
    var computer = toCapital(computerSelection);
    
    if (player === "Rock" && computer === "Rock") {
        return "Draw! Rock equals to Rock";
      } else if (player === 'Rock' && computer === 'Paper') {
        l++;
        return "You Lose! Paper beats Rock";
      } else if (player === 'Rock' && computer === 'Scissors') {
        w++;
        return "You Win! Rock beats Scissors";
      } else if (player === 'Paper' && computer === 'Rock') {
        w++;
        return "You Win! Paper beats Rock";
      } else if (player === 'Paper' && computer === 'Paper') {
        return "Draw! Paper equals to Paper";
      } else if (player === 'Paper' && computer === 'Scissors') {
        l++;
        return "You Lose! Scissors beat Paper";
      } else if (player === 'Scissors' && computer === 'Rock') {
        l++;
        return "You Lose! Scissors beat Paper";
      } else if (player === 'Scissors' && computer === 'Paper') {
        w++;
        return "You Win! Rock beats Scissors";
      } else {
        return "Draw! Scissors equal to Scissors";
      }
    }


// Play a 5 round game that keeps the score and reports a winner or loser at the end.
function game() {
  
  round = 0;
  while (round < 5) {
    playerSelection = prompt("Rock Paper Scissors! Please enter your selection:", "Rock");
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    round++;
  }

  if (w > l) {
    return 'You Win the Game! Player: ' + w + ', Computer: ' + l;
  } else if (w < l) {
    return 'You Lose the Game! Player: ' + w + ', Computer: ' + l;
  } else {
    return 'It\'s a draw!';
  }
}

// Helper function that takes a string and returns it with only the first letter capitalized.
// It is case insensitive and users can input rock, ROCK, RocK or any other variation.
function toCapital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// console.log(computerPlay());
//const playerSelection = 'rock';
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));
console.log(game());