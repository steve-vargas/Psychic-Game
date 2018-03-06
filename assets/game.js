
var letters = ['A', 'B', 'C', 'D', 'E','F','G','H','I','J','K','L'
,'M','N','O','P','Q','R','S','T','U','V','Q','R','S','T','U','V','W','X','Y','Z'];

var counter = 0;
var win = 0;
var losses = 0;
var guessCounter = 9;
var guessList = [];


document.onkeyup = function () {

    var guess = String.fromCharCode(event.keyCode).toUpperCase();
    console.log(guess);

//this will maintain our initial computer guess for the game
        if (counter == 0) {
            var computerGuess = letters[Math.floor(Math.random()*letters.length)];
            console.log(computerGuess);
        }
        //problem with win code, have to guess first time or wont work...
        if ((guess == computerGuess)) {
            alert("You Win!");
            win++;
            //reset game         
        }

        else {
            alert("Guess Again!");
            counter++;
            guessCounter--;
            /*
            if (false) { function inArray(guessList, guess) {
                var listCount = guessList.length;
                for (var i = 0; i < listCount; i++) {
                    if(listCount[i] === guessList) {
                        return true;
                    }
                    return false;
                }
            }
        }
        */
            guessList.push(guess);
            console.log(counter);

            

            if (counter == 9) {
                alert("You lose!")
                losses++;
                guessCounter = 9;
                counter = 0;
                guessList = [];
                //reset game
            }

        var html = "<p>Guess what letter I'm thinking of...</p>" +
        "<p>Wins: " + win + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessCounter + "</p>" +
        "<p>Your guesses so far: " + guessList.toString(); + "</p>";

        document.querySelector('#game').innerHTML = html;

        }
    
    
}



