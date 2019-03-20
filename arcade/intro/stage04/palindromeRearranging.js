/*

Given a string, find out if its characters can be rearranged to form a palindrome.
A palindrome is a string that reads the same left-to-right and right-to-left.

*/


var charCount = [];

function checkChar(string, char) {
    for (let i = 0; i < charCount.length; i++) {
        if (charCount[i][0] == char)
            return i;
    }

    return -1;
}

var oddChars = 0;

function palindromeRearranging(inputString) {

    for (let i = 0; i < inputString.length; i++) {
        let pos = checkChar(inputString, inputString[i]);

        if ((!i) || (pos == -1))
            charCount.push([inputString[i], 1]);

        else
            charCount[pos][1]++;
    }

    for (let i = 0; i < charCount.length; i++) {
        if (charCount[i][1] % 2) {
            if (!oddChars)
                oddChars = 1;
            else
                return false;
        }
    }

    return true;
}
