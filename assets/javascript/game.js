//Constants

const MAX_GUESSES = 8;

//Global Variables
var dictionary = ["Aladdin", "Inception", "Shrek", "Psycho", "Jaws"]
var guessesRemaining = MAX_GUESSES;
var alreadyGuessed = [];
var gameArray = [];
var wins = 0;
var isGameStarted = false;



// var content = document.createElement("div");
// content.setAttribute("id", "content");
// document.body.appendChild(content);
  




function removeWelcome () {
  document.getElementById('welcome-message').remove();
}


let welcomeMessageElement = document.getElementById("welcome-message");
console.log (welcomeMessageElement.innerHTML);

function startGame() {
    removeWelcome();
    let word = dictionary[Math.floor(Math.random()*dictionary.length)];
    console.log(word);
    isGameStarted = true;
    for (let i=0; i<word.length; i++) {
        gameArray[i] = "_";
    };
    
    createHTML();
}

function createHTML() {
    let = container = document.getElementById("container")

    let instructionsElement = document.createElement("h1");
    instructionsElement.setAttribute("class", "instructions");
    instructionsElement.textContent = "Guess the One Word Movie!";
    container.appendChild(instructionsElement);

    let winsElement = document.createElement("h1");
    winsElement.setAttribute("class", "wins");
    winsElement.textContent = "Wins: " + wins;
    container.appendChild(winsElement);

    let gameArrayElement = document.createElement("h1");
    gameArrayElement.setAttribute("class", "wins");
    gameArrayElement.textContent = gameArray.join(" ");
    container.appendChild(gameArrayElement);

    let guessesRemainingElement = document.createElement("h1");
    guessesRemainingElement.setAttribute("class", "wins");
    guessesRemainingElement.textContent = "Guesses Remaining: " + guessesRemaining;
    container.appendChild(guessesRemainingElement);
}

document.onkeyup = function(event) {
    if (!isGameStarted) {
        startGame();
    }
    else {
        playGame();
    }
}

