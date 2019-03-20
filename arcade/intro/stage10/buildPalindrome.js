/*

Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.
A palindrome is a string that reads the same left-to-right and right-to-left.

*/

function buildPalindrome(st) {
    var tempFrom = st.slice(0);
    var tempTo = '';

    var char = 0;
    while (!isPalindrome(tempFrom)) {
        tempTo += tempFrom[0];
        tempFrom = tempFrom.slice(1);
    }

    var reversed = '';
    for (let i = tempTo.length - 1; i >= 0; i--)
        reversed += tempTo[i];

    return st.concat(reversed);
}

function isPalindrome(str) {
    var half = Math.ceil(str.length / 2) - 1;

    for (let i = 0; i <= half; i++)
        if (str[half - i] != str[half + i + !(str.length % 2)])
            return false;

    return true;
}