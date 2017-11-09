//pseudocode
//User picks difficulty
//Random word is picked from that difficulty
//Player starts game and begins guessing via keystrokes
//Keystrokes are logged and compared to characters in word
//If word contains the letter, then letter is logged 
//If word doesnt contain letter, player loses a life and the guess is logged
//if player runs out of lives, game is over.
//if player successfully guesses word, they win. and game starts over via difficulty

//Things left to do
//link the letter check to the actual game
//alert appears before running out of guesses/alert appears before last current letter appears
//code a way to stop game from taking inputs when word has been guess or when player is out of lives


var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
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

console.log(dogs[seed])

//this function will check if the input is an alphabet letter when called upon
function vowelChecker(arg){
    var alphabetLetters="abcdefghijklmnopqrstuvwxyz".split("");
    var isLetter=0;
    for (var i=0; i < alphabetLetters.length; i++){
      if (arg === alphabetLetters[i]){
        isLetter=true;
        break 
      } else {
        isLetter=false;
      }               
    }

    if (isLetter===false){
      alert("You did not enter a letter of the alphabet. Guess again");
    } 
  }

//Resets game by making current word an empty array again. It then calculates a new seed to choose a different 
//while resetting the # of lives to 10 and clears the guessed letters
function reset(){
  blanks.length=0;
  blanks = [];
  seed = Math.floor((Math.random() * 6));
  console.log(dogs[seed]);
  lives = 10;
  currentWord = dogs[seed];
  underscorer(currentWord);
  idGuess.innerHTML = "";
}

//this function creates an array of blank based on the length of the current word. The array is then converted into a string and written onto the html.
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
  var lastGuess = event.key.toLowerCase();
  vowelChecker(lastGuess);
  console.log("the last guess is " + lastGuess);
  contains = currentWord.includes(lastGuess);
  index = currentWord.indexOf(lastGuess)
  indexTwo = currentWord.lastIndexOf(lastGuess);  //this will check to see if there is a second index with the same letter; 

//uses boolean to check to see if the guessed letter is in the word
  if (contains===true) {
    //Since the displayed underscores were joined as a string, they must be split back into elements of an array for easy update of each letter. The array is then turned back into a string
    blanks = blanks.split("");
    blanks[index] = lastGuess;
    blanks[indexTwo] = lastGuess; //if there isnt a second index, this will have the same value as "index" 
    blanks = blanks.join("");
    idCurrentWord.innerHTML = blanks;

    if (blanks===dogs[seed]) {
    alert("Congrats! You have guessed the word correctly.");
    wins += 1;
    idWinCount.innerHTML = wins;
    console.log("wins: "+wins);
    // reset();
    }

    
  }else {
    lives -= 1;
    idLives.innerHTML = lives;
    var addGuessedLetter = document.createTextNode(lastGuess);
    idGuess.appendChild(addGuessedLetter);
    if (lives === 0) {
    alert("You lose! You have run out of guesses");
    losses += 1;
    idLoseCount.innerHTML = losses;
    console.log("loses: "+losses);
    // reset();
    }

  }
}

document.getElementById("reset").onclick = function(){reset()};


