//pseudocode
//User picks difficulty
//Random word is picked from that difficulty
//Player starts game and begins guessing via keystrokes
//Keystrokes are logged and compared to characters in word
//If word contains the letter, then letter is logged 
//If word doesnt contain letter, player loses a life and the guess is logged
//if player runs out of lives, game is over.
//if player successfully guesses word, they win. and game starts over via difficulty

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var dogs = ["husky", "corgi", "beagle", "poodle", "shiba", "bulldog"];
// var mammals = ["aardvark", "elephant", "dolphin", "monkey", "rabbit", "manatee"];
// var animals = ["chameleon", "penguin", "jellyfish", "leopard", "salamander", "chinchila"]
var seed = Math.floor((Math.random() * 6));
var blanks = [];
var currentWord = dogs[seed].split("");
var lives = 10;
var idCurrentWord = document.getElementById("currentword");
var idLives = document.getElementById("guesses-remaining")

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


function checker(argument,arugumentwo){
  if (argument===dogs[seed]) {
    alert("Congrats! You have gussed the word correctly.");
  } else if (arugumentwo === "0") {
    console.log("you lose");
    alert("You lose! You have run out of guesses");
  }
}

//this function creates an array of blank based on the length of the current word. The array is then converted into a string and written onto the html.
function underscorer(input){
  for (var i = 0; i < input.length; i++) {
    blanks.push("_");
  }
  blanks = blanks.join("");
  idCurrentWord.innerHTML = blanks;
  idLives = document.getElementById("guesses-remaining")
  idLives.innerHTML = lives;
}


underscorer(currentWord);

	// Registering the key pressed and also converts capitalized letters to lower case

document.onkeyup = function(){
  var lastGuess = event.key.toLowerCase();
  vowelChecker(lastGuess);
  console.log("the last guess is " + lastGuess);
  contains = currentWord.includes(lastGuess);
  index = currentWord.indexOf(lastGuess)


//uses boolean to check to see if the guessed letter is in the word
  for (var i = 0; i < currentWord.length; i++) {
   	if (contains===true) {
      //Since the displayed underscores were joined as a string, they must be split back into elements of an array for easy update of each letter. The array is then turned back into a string
      blanks = blanks.split("");
      blanks[index] = lastGuess;
      blanks = blanks.join("");
      idCurrentWord.innerHTML = blanks;
      checker(blanks,lives);
      break
   	} else {
        lives -= 1;
        idLives.innerHTML = lives;
        idGuess = document.getElementById("guess");
        var addGuessedLetter = document.createTextNode(lastGuess);
        idGuess.appendChild(addGuessedLetter);
        checker(blanks,lives);
        break
   	}
  }
}


