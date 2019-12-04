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

    var playerWin = 0;
    var compWin = 0;
    
    if (player == "Rock" && computer == "Rock") {
        return "Draw! Rock equals to Rock";
      } else if (player == 'Rock' && computer == 'Paper') {
        compWin += 1;
        console.log(compWin);
        return "You Lose! Paper beats Rock --- Computer Win: " + compWin;
        //"You Lose! Paper beats Rock";
        //compwin++;
        //console.log("C" + compWin);
      } else if (player == 'Rock' && computer == 'Scissors') {
        playerWin += 1;
        console.log(playerWin);
        return "You Win! Rock beats Scissors --- Your Win: " + playerWin;
        //"You Win! Rock beats Scissors";
        //playerWin++;
        //console.log("P" + playerWin++)
      } else if (player == 'Paper' && computer == 'Rock') {
        playerWin += 1;
        console.log(playerWin);
        return "You Win! Rock beats Scissors --- Your Win: " + playerWin;
        //"You Win! Paper beats Rock";
        //playerWin++;
        //console.log("P" + playerWin++)
      } else if (player == 'Paper' && computer == 'Paper') {
        return "Draw! Paper equals to Paper";
      } else if (player == 'Paper' && computer == 'Scissors') {
        compWin += 1;
        console.log(compWin);
        return "You Lose! Scissors beat Paper --- Computer Win: " + compWin;
        //compwin++;
        //console.log("C" + compWin++);
      } else if (player == 'Scissors' && computer == 'Rock') {
        compwin += 1;
        console.log(compWin);
        return "You Lose! Scissors beat Paper --- Computer Win: " + compWin;
        //compwin++;
        //console.log("C" + compWin++);
      } else if (player == 'Scissors' && computer == 'Paper') {
        playerWin += 1;
        console.log(playerWin);
        return "You Win! Rock beats Scissors --- Your Win: " + playerWin;
        //playerWin++;
        //console.log("P" + playerWin++)
      } else {
        return "Draw! Scissors equal to Scissors";
      }
      //console.log("Number of Computer Wins: " + compWin);
      //console.log("Your Wins: " + playerWin);
}

// Play a 5 round game that keeps the score and reports a winner or loser at the end.
function game() {
    
  for (let i = 0; i < 5; i++) {
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