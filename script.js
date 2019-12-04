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
    var player = toCapital(playerSelection);
    var computer = toCapital(computerSelection);

    let playerWin = 0;
    let compWin = 0;
    
    if (player == "Rock" && computer == "Rock") {
        return "Draw! Rock equals to Rock";
      } else if (player == 'Rock' && computer == 'Paper') {
        compWin++;
        return "You Lose! Paper beats Rock";
      } else if (player == 'Rock' && computer == 'Scissors') {
        playerWin++;
        return "You Win! Rock beats Scissors";
      } else if (player == 'Paper' && computer == 'Rock') {
        playerWin++;
        return "You Win! Rock beats Scissors";
      } else if (player == 'Paper' && computer == 'Paper') {
        return "Draw! Paper equals to Paper";
      } else if (player == 'Paper' && computer == 'Scissors') {
        compWin++;
        return "You Lose! Scissors beat Paper";
      } else if (player == 'Scissors' && computer == 'Rock') {
        compwin++;
        return "You Lose! Scissors beat Paper";
      } else if (player == 'Scissors' && computer == 'Paper') {
        playerWin++;
        return "You Win! Rock beats Scissors";
      } else {
        return "Draw! Scissors equal to Scissors";
      }


    }


// Play a 5 round game that keeps the score and reports a winner or loser at the end.
function game() {
  
  //let win = "You win"
  //let lose = "You lose"
  //let tie = "It is a tie"
  for (var i = 0; i < 5; i++) {
  // Print each iteration to the console
  console.log(i);
    

    var userInput = prompt("Rock Paper Scissors! Please enter your selection:", "Rock");
    if (userInput == null || userInput == "") {
      console.log("Player cancelled the prompt");
    } else {
      console.log("You played: " + toCapital(userInput));

      const playerSelection = toCapital(userInput);
      const computerSelection = computerPlay();
      console.log(playRound(playerSelection, computerSelection));
      //console.log("Your wins: " + playerWin);
      //console.log("Computer wins: " + compWin);
    }
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
const playerSelection = game();