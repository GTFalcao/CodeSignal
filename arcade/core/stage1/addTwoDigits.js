/*

You are given a two-digit integer n. Return the sum of its digits.

*/

function addTwoDigits(n) {
    // var numStr = n.toString();
    // return Number(numStr[0]) + Number(numStr[1]); 

    return (Math.floor(n / 10) + (n % 10));
}
