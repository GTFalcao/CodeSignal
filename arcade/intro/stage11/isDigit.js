/*

Determine if the given character is a digit or not.

*/

function isDigit(symbol) {
    if(!symbol.match(/[0-9]/))
        return false;
    else return true;
}
