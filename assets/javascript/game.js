//Things left to do
//check for repeating letters



var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
var dogs = ["husky", "corgi", "beagle", "poodle", "shiba", "bulldog"];
// var mammals = ["aardvark", "elephant", "dolphin", "monkey", "rabbit", "manatee"];
// var animals = ["chameleon", "penguin", "jellyfish", "leopard", "salamander", "chinchila"]
var seed = Math.floor((Math.random() * 6)); //all my word arrays have a length of 6; could also use array.length
var blanks = [];
var currentWord = dogs[seed].split("");
var lives = 10;
var idCurrentWord = document.getElementById("currentword");
var idLives = document.getElementById("guesses-remaining")
var idGuess = document.getElementById("guess");
var idWinCount=document.getElementById("wincount");
var idLoseCount=document.getElementById("losecount");
var lastGuess;
var addGuessedLetter = document.createTextNode(lastGuess);
var wins = 0;
var losses = 0;
var gameActive = true;
var isLetter;
var usedLetter = [];
var repeatLetter;

//this function will check if the input is an alphabet letter when called upon
function letterChecker(arg){
  for (var i=0; i < alphabet.length; i++){
    if (arg === alphabet[i]){
      isLetter=true;
      usedLetter[i] = arg;
      break 
    } else {
      isLetter=false;
    }               
  }

  for (var i = 1; i < usedLetter.length; i++) {
    if (arg)
  if (isLetter === true){
    for (var i = 1; i < usedLetter.length; i++) {
      usedLetter[]
    }
  }
}

//Resets game by making current word an empty array again. 
//If the player attempts to start a new game after starting, they will lose a life. 
//It then calculates a new seed to choose a different 
//while resetting the # of lives to 10 and clears the guessed letters
function reset(){
  if (lives < 10){
  losses += 1;
  idLoseCount.innerHTML = losses;
  }

  blanks = [];
  usedLetter = [];
  seed = Math.floor((Math.random() * 6));
  console.log(dogs[seed]);
  lives = 10;
  currentWord = dogs[seed];
  underscorer(currentWord);
  idGuess.innerHTML = "";
  gameActive = true;
}

//this function creates an array of blank based on the length of the current word. 
//The array is then converted into a string and written onto the html.
//the spacing between the underscores is created via CSS letter spacing
function underscorer(input){
  for (var i = 0; i < input.length; i++) {
    blanks.push("_");
  }
  blanks = blanks.join("");
  idCurrentWord.innerHTML = blanks;
  idLives.innerHTML = lives;
}

underscorer(currentWord); //this will preload the word as the page is loaded


	// Registering the key pressed and also converts capitalized letters to lower case
document.onkeyup = function(){
  lastGuess = event.key.toLowerCase();
  letterChecker(lastGuess);

  if (gameActive === true && isLetter === true && repeatLetter !== true ){
    console.log("the last guess is " + lastGuess);
    contains = currentWord.includes(lastGuess);

  //uses boolean to check to see if the guessed letter is in the word
  //Since the displayed underscores were joined as a string, 
  //they must be split back into elements of an array for easy update of each letter. 
  //The array is then turned back into a string
  //If there isnt a second index, then [indexTwo]=[index] 
    if (contains===true) {
      index = currentWord.indexOf(lastGuess)
      indexTwo = currentWord.lastIndexOf(lastGuess);
      blanks = blanks.split("");
      blanks[index] = lastGuess;
      blanks[indexTwo] = lastGuess; 
      blanks = blanks.join("");
      idCurrentWord.innerHTML = blanks;

      if (blanks===dogs[seed]) {
      alert("Congrats! You have guessed the word correctly. Hit the New Game button to play again!");
      wins += 1;
      idWinCount.innerHTML = wins;
      console.log("wins: "+wins);
      gameActive = false;
      }

      
    }else {
      lives -= 1;
      idLives.innerHTML = lives;
      var addGuessedLetter = document.createTextNode(lastGuess);
      idGuess.appendChild(addGuessedLetter);

      if (lives === 0) {
      alert("You lose! You have run out of guesses. Hit the New Game button to play again!");
      losses += 1;
      idLoseCount.innerHTML = losses;
      idCurrentWord.innerHTML = dogs[seed]; //this will reveal the current word when the player losses
      console.log("losses: "+losses);
      gameActive = false;
      } 
    }
  } else if (isLetter === false){
    alert("You did not enter a letter of alphabet. Try another key")
  } else if (gameActive === false){
    alert("Start a New Game to play again")
  } else if (repeatLetter === true){
    alert("You have already used this letter. Try another letter")
  }
}

//provides reset button with functionality
document.getElementById("reset").onclick = function(){reset()};


