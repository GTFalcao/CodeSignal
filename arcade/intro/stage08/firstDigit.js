/*

Find the leftmost digit that occurs in a given string.

*/

function firstDigit(inputString) {
    return inputString.match(/[0-9]/)[0];
}