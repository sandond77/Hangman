# Hangman

Hangman is a web-based hangman game created using vanilla javascript, bootstrap 4 CSS, and HTML5. 

## How to Play
The game will automatically start upon visiting the page. The application takes the player's guesses via keyboard inputs. The player will start with 10 guesses remaining. The player must guess the current word before they run out of guesses. Correctly guessed letters will not count towards the guesses remaining counter. Repeated letters will not count towards their remaining guesses. 

**The game is also designed to only read letter keystrokes. It will not count symbols such as $!@#$!@#<>:? towards the guess counter**

The game is won once the player has correctly guessed the word. If the player runs out of guesses, then they lose.

Once the player guesses the word or runs out of the guesses, they will be prompted to start a new game or choose another difficulty.

## Difficulty
The game starts on easy mode by default. There are three categories or difficulties for the player to choose from.

1. Easy Mode - The words in this category involve dog species.
2. Normal Mode - The words in this category involve mammal species.
3. Hard Mode - The words in this category involve any species of animals - ranging from dinosaurs to reptiles. 

**Note: If a player attempts to change difficulties or restarts the game once the game has started, a lose will be counted.**

## Link to the Game
Check out my deployed game here! https://sandond77.github.io/Hangman-Game/