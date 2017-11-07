//pseudocode
//User picks difficulty
//Random word is picked from that difficulty
//Player starts game and begins guessing via keystrokes
//Keystrokes are logged and compared to characters in word
//If word contains the letter, then letter is logged 
//If word doesnt contain letter, player loses a life and the guess is logged
//if player runs out of lives, game is over.
//if player successfully guesses word, they win. and game starts over via difficulty




var dogs = ["husky", "corgi", "beagle", "poodle", "shiba", "bulldog"];
// var mammals = ["aardvark", "elephant", "dolphin", "monkey", "rabbit", "manatee"];
// var animals = ["chameleon", "penguin", "jellyfish", "leopard", "salamander", "chinchila"]


	// Determines which difficulty is being played

	//random number generation from 0-5 to determine structure index
		var seed = Math.floor((Math.random() * 6));



	// Registering the key pressed and also converts capitalized letters to lower case
document.onkeyup = function(){
    var lastGuess = event.key;
    lastGuess = lastGuess.toLowerCase();
    console.log(lastGuess);
   	var contains = dogs[seed].includes(lastGuess);
   	var index = dogs[seed].indexOf(lastGuess)

   	if (contains===true) {
   		console.log("you got it correct");
   		console.log(index);
   		document.getElementById("currentword").innerHTML = "test";
   	} else {
   		document.getElementById("guess").innerHTML = "test";
   	}
}







      // function vowelChecker(arg){
      //   var vowel = ["a","e","i","o","u","A","E","I","O","U"];
      //   var isVowel=0;
      //   for (var i=0; i < vowel.length; i++){
      //     if (arg === vowel[i]){
      //       isVowel="true";
      //       break 
      //     } else {
      //       isVowel="false";
      //     }               
      //   }

      //   if (isVowel==="true"){
      //     console.log(arg + " is a vowel");
      //   } else {
      //     console.log(arg + " is not a vowel");
      //   }
      // }
