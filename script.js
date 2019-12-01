// Function computerPlay randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay() {
    var myArray = [
        'Rock',
        'Paper',
        'Scissors'
      ];
      
    return randomItem = myArray[Math.floor(Math.random()*myArray.length)];
}

// Function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    var player = capitalize(playerSelection);
    var computer = capitalize(computerSelection);
    
    if (player == "Rock" && computer == "Rock") {
        return "Draw! Rock equals to Rock";
      } else if (player == 'Rock' && computer == 'Paper') {
        return "You Lose! Paper beats Rock";
      } else if (player == 'Rock' && computer == 'Scissors') {
        return "You Win! Rock beats Scissors";
      } else if (player == 'Paper' && computer == 'Rock') {
        return "You Win! Paper beats Rock";
      } else if (player == 'Paper' && computer == 'Paper') {
        return "Draw! Paper equals to Paper";
      } else if (player == 'Paper' && computer == 'Scissors') {
        return "You Lose! Scissors beat Paper";
      } else if (player == 'Scissors' && computer == 'Rock') {
        return "You Lose! Rock beats Scissors";
      } else if (player == 'Scissors' && computer == 'Paper') {
        return "You Win! Scissors beat Paper";
      } else {
        return "Draw! Scissors equal to Scissors";
      }
}

// Helper function that takes a string and returns it with only the first letter capitalized.
// It is case insensitive and users can input rock, ROCK, RocK or any other variation.
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// console.log(computerPlay());
const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))