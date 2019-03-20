/*

A string is said to be beautiful if each letter of the alphabet appears at most as many times as than the previous letter; ie: b occurs no more times than a; c occurs no more times than b; etc.

Given a string, check whether it is beautiful.

*/

function isBeautifulString(inputString) {
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var stringCopy = inputString;
    var prevLetterCount = 0, letterCount = 0;
    
    for (let i = 0; i < letters.length; i++) {
        while(stringCopy.indexOf(letters[i]) != -1) {
            stringCopy = stringCopy.slice(0, stringCopy.indexOf(letters[i])) + stringCopy.slice(stringCopy.indexOf(letters[i]) + 1);
            letterCount++;
            if( (i > 0) && (letterCount > prevLetterCount) )
                return false;
        }
        
        prevLetterCount = letterCount;
        letterCount = 0;
    }
    
    return true;
}
