/*

Given the string, check if it is a palindrome.
A palindrome is a string that reads the same left-to-right and right-to-left.

*/

function checkPalindrome(inputString) {
    var outputString = "";
    
    for(let i = (inputString.length - 1); i >= 0; i--)
        outputString += inputString[i];
    
    return (outputString == inputString);
}
