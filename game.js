var Letter = require('./Letter')
var phrases = require('./phrases')
var inquirer = require("inquirer");

// TODO: make dynamic (pick a random phrase)
var phrase = phrases[1]

var guessesRemaining = 10

var phraseArray = phrase.split('')

// iterate over phraseArray and make letters and store letters in new array
var letters = []
for (var i=0; i < phraseArray.length; i++) {
    letters.push( new Letter( phraseArray[i] ) )
}
console.log(letters)


var displayString = buildDisplayString()

console.log(displayString)
revealLetter('A')

displayString = buildDisplayString()

console.log(displayString)

revealLetter('A')
displayString = buildDisplayString()
console.log(displayString)


revealLetter('P')
displayString = buildDisplayString()
console.log(displayString)

revealLetter('N')
displayString = buildDisplayString()
console.log(displayString)

revealLetter('O')
displayString = buildDisplayString()


console.log(displayString)
console.log('Player wins? ', checkForWin() )
console.log('Game Over? ', isGameOver() )


// ---------------------- TOOLS -----------------------------

function buildDisplayString() {
    
        var tempString = ''
    
        for ( var i=0; i < letters.length; i++ ) {
            if (letters[i].isVisible) {
                tempString += letters[i].value
            } else {
                tempString += '_ '
            }
        }
    // console.log(tempString)
        return tempString

    }
    
    function revealLetter( letter ) {
        for (var i=0; i < letters.length; i++) {
            if ( letter.toLowerCase() === letters[i].value.toLowerCase() ) {
                letters[i].isVisible = true
            }
        }
    }

    function checkForWin() {
        for (var i=0; i < letters.length; i++) {
            if ( !letters[i].isVisible ) {
                return false
            }
        }
        return true
    }

    function isGameOver() {
        if ( checkForWin() ) {
            return true
        } else if ( guessesRemaining < 1 ) {
            return true
        }
        return false
    }