

var letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
                     'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
                     'u', 'v', 'w', 'x', 'y', 'z']

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var pastGuess = [];

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();
    

    var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];


    if (letterChoices.indexOf(userGuess) > -1) {
     
         if (userGuess === computerGuess) {
             wins++; 
             guessesLeft = 9;
             pastGuess = [];
        } 
        if (userGuess != computerGuess) {
             guessesLeft--;
             pastGuess.push(userGuess);
         } 
         if (guessesLeft === 0 ) {
             losses++;
             guessesLeft = 9;
             pastGuess = [];
         }
    

        var html =
         '<h1>The Psychic Game</h1>' + 
         '<h3>Guess what letter I am thinking of</h3>' +
         '<h3>Wins: ' + wins + '</h3>' +
         '<h3>Losses: ' + losses + '</h3>' +
         '<h3>Guesses Left: ' + guessesLeft + '</h3>' +
         '<h3>Your Guesses so far: ' + pastGuess.join(", ") + '</h3>';

         document.getElementById("pGame").innerHTML = html;

    }

};






