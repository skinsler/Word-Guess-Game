//Constants

const MAX_GUESSES = 8;

//Global Variables
var dictionary = ["Aladdin", "Inception", "Shrek", "Psycho", "Jaws"]
var guessesRemaining = MAX_GUESSES;
var alreadyGuessed = [];
var gameArray = [];
var wins = 0;
var isGameStarted = false;
var word;
var instructionsElement = document.getElementById("instructions");
var winsElement
var gameArrayElement
var guessesRemainingElement
var alreadyGuessedElement




// var content = document.createElement("div");
// content.setAttribute("id", "content");
// document.body.appendChild(content);
  








function startGame() {
    word = dictionary[Math.floor(Math.random()*dictionary.length)];
    console.log(word);
    isGameStarted = true;
    for (let i=0; i<word.length; i++) {
        gameArray[i] = "_";
    };
    
    createHTML();
}

function createHTML() {
    let container = document.getElementById("container")

    instructionsElement.textContent = "Guess the One Word Movie!";
    container.appendChild(instructionsElement);

    winsElement = document.createElement("h1");
    winsElement.setAttribute("class", "wins");
    winsElement.textContent = "Wins: " + wins;
    container.appendChild(winsElement);

    gameArrayElement = document.createElement("h1");
    gameArrayElement.setAttribute("class", "game-array");
    gameArrayElement.textContent = gameArray.join(" ");
    container.appendChild(gameArrayElement);

    guessesRemainingElement = document.createElement("h1");
    guessesRemainingElement.setAttribute("class", "guesses-remaining");
    guessesRemainingElement.textContent = "Guesses Remaining: " + guessesRemaining;
    container.appendChild(guessesRemainingElement);

    alreadyGuessedElement = document.createElement("h1");
    alreadyGuessedElement.setAttribute("class", "already-guessed");
    alreadyGuessedElement.textContent = "Letters guessed: " + alreadyGuessed;
    container.appendChild(alreadyGuessedElement);
}

function playGame(k) {
    console.log (k);

    for (let i=0; i<word.length; i++) {
        if (k.toLowerCase() === word[i].toLowerCase()) {
            gameArray[i] = k.toLowerCase();
        }

    };

    if (alreadyGuessed.length === 0) {
        guessesRemaining--;
        guessesRemainingElement.textContent = "Guesses Remaining: " + guessesRemaining;
        alreadyGuessed.push(k.toLowerCase());

    }

    else {
        for (let i=0; i<alreadyGuessed.length; i++) {
            if (k.toLowerCase() !== alreadyGuessed[i].toLowerCase()) {
                alreadyGuessed.push(k.toLowerCase());
                console.log(alreadyGuessed);
                guessesRemaining--;
                break;
            }
        }
    }
    
    guessesRemainingElement.textContent = "Guesses Remaining: " + guessesRemaining;
    gameArrayElement.textContent = gameArray.join(" ");
    alreadyGuessedElement.textContent = "Letters guessed: " + alreadyGuessed.join(" ");

    if (guessesRemaining === 0) {
        instructionsElement.textContent = "You Lose! Press any key to play again!";
        startGame();
    };

    // for (let i=0; i<alreadyGuessed.length; i++)



    
}

document.onkeyup = function(event) {
    if (!isGameStarted) {
        startGame();
    }
    else if (event.key.toLowerCase() != event.key.toUpperCase()) {
        playGame(event.key);
    }
}

