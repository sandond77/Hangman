// Declaring global variables
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
var dogs = ["husky", "corgi", "beagle", "poodle", "shiba", "bulldog","terrier", "pug", "boxer", "chihuahua"];
var mammals = ["gorilla", "elephant", "dolphin", "monkey", "rabbit", "manatee", "squirrel", "hedgehog","otter","raccoon"];
var animals = ["chameleon", "penguin", "jellyfish", "brachiosaurus", "kangaroo", "chinchilla", "walrus", "human","catfish","triceratops"];
var seed = Math.floor((Math.random() * 10)); //all my word arrays have a length of 10; could also use array.length but it would need more coding. Since its 100% random, the same word could be chosen upon reset
var blanks = [];
var currentWord = dogs[seed].split(""); //the game starts on easy mode by default
var lives = 10;
var idCurrentWord = document.getElementById("currentword");
var idLives = document.getElementById("guesses-remaining");
var idGuess = document.getElementById("guess");
var idWinCount = document.getElementById("wincount");
var idLoseCount = document.getElementById("losecount");
var lastGuess;
var addGuessedLetter = document.createTextNode(lastGuess);
var wins = 0;
var losses = 0;
var gameActive = true;
var isLetter;
var usedLetter = [];
var repeatLetter;
var useDogs = true; 
var useMammals;
var useAnimals;
var status = "playing";
var audioWin = new Audio("assets/javascript/wow.mp3")
var audioLose = new Audio("assets/javascript/lose.mp3")

//this function will check if the input is an alphabet letter when called upon. 
//If the input is an alphabet letter, it will check to make sure that the letter hasnt been used yet.
function letterChecker(arg){
  for (var i = 0; i < alphabet.length; i++){
    if (arg === alphabet[i]){
      isLetter = true;
      usedLetter.push(arg);
      break 
    } else {
      isLetter = false;
    }               
  }

  if (isLetter === true){
    for (var i = 0; i < usedLetter.length-1; i++) {
      if (arg === usedLetter[i]){
        repeatLetter = true;
        break
      } else {
        repeatLetter = false;
      }
    }
  } 
}

//Resets game by making current word an empty array again. 
//If the player attempts to start a new game after starting, they will lose a life. 
//It then calculates a new seed to choose a different 
//while resetting the # of lives to 10 and clears the guessed letters
function reset(){
  if (lives< 10 && lives!==0 && status!=="won" ){
  losses += 1;
  idLoseCount.innerHTML = losses;
  }

  blanks = [];
  usedLetter = [];
  repeatLetter = [];
  seed = Math.floor((Math.random() * 6));
  lives = 10;

  if (useDogs === true){
    currentWord = dogs[seed].split("");
  } else if (useMammals === true){
    currentWord = mammals[seed].split("");
  } else if(useAnimals === true){
    currentWord = animals[seed].split("");
  }

  underscorer(currentWord);
  idGuess.innerHTML = "";
  gameActive = true;
  status = "playing";
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




// Main Game Code//
underscorer(currentWord); //this will preload the word as the page is loaded
// Registers the key pressed and also converts capitalized letters to lower case
document.onkeyup = function(){
  lastGuess = event.key.toLowerCase();
  letterChecker(lastGuess);

  if (gameActive === true && isLetter === true && repeatLetter !== true ){
    contains = currentWord.includes(lastGuess);

  //uses boolean to check to see if the guessed letter is in the word
  //Since the displayed underscores were joined as a string, 
  //they must be split back into elements of an array for easy update of each letter. 
  //The array is then turned back into a string
  //If there isnt a second index, then [indexTwo]=[index] 
    if (contains===true) {
      index = currentWord.indexOf(lastGuess);
      indexTwo = currentWord.lastIndexOf(lastGuess);
      blanks = blanks.split("");
      blanks[index] = lastGuess;
      blanks[indexTwo] = lastGuess; 
      blanks = blanks.join("");
      idCurrentWord.innerHTML = blanks;

      if (blanks===currentWord.join("")) {
      audioWin.play();
      alert("Congrats! You have guessed the word correctly. Start a new game or choose another diffiulty!");
      wins += 1;
      status = "won";
      idWinCount.innerHTML = wins;
      gameActive = false;
      }

      
    }else {
      lives -= 1;
      idLives.innerHTML = lives;
      var addGuessedLetter = document.createTextNode(lastGuess);
      idGuess.appendChild(addGuessedLetter);

      if (lives === 0) {
      audioLose.play();
      alert("You lose! You have run out of guesses. Start a new game or choose another diffiulty!");
      losses += 1;
      status = "lost";
      idLoseCount.innerHTML = losses;
      currentWord = currentWord.join("");
      idCurrentWord.innerHTML = currentWord; //this will reveal the current word when the player losses
      gameActive = false;
      } 
    }
  } else if (isLetter === false){
    alert("You did not enter a letter of alphabet. Try another key");
  } else if (gameActive === false){
    alert("Start a new game or choose another diffiulty");
  } else if (repeatLetter === true){
    alert("You have already used this letter. Try another letter");
  }
}


//provides reset button with functionality
document.getElementById("reset").onclick = function(){reset()};

//provides diffiulty buttons with functionality
document.getElementById("easy").onclick = function(){
useDogs = true;
useMammals = false;
useAnimals = false;
reset();
};

document.getElementById("normal").onclick = function(){
useDogs = false;
useMammals = true;
useAnimals = false;
reset();
};

document.getElementById("hard").onclick = function(){
useDogs = false;
useMammals = false;
useAnimals = true;
reset();
};

