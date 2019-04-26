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


document.onkeyup = function(event) {
    if (!isGameStarted) {
        removeWelcome();
        var word = dictionary[Math.floor(Math.random()*dictionary.length)];
        console.log(word);
        isGameStarted = true;
    }
    console.log(event.key);
}

