//Constants

const MAX_GUESSES = 8;

//Global Variables
var dictionary = ["Aladdin", "Inception", "Shrek", "Psycho", "Jaws"]
var guessesRemaining;
var alreadyGuessed = [];
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
    createHTML();
}

function createHTML() {
    let = container = document.getElementById("container")

    let instructionsElement = document.createElement("h1");
    instructionsElement.setAttribute("class", "instructions");
    instructionsElement.textContent = "Guess the One Word Movie!";
    container.appendChild(instructionsElement);

}

document.onkeyup = function(event) {
    if (!isGameStarted) {
        startGame();
    }
    else {
        playGame();
    }
}

