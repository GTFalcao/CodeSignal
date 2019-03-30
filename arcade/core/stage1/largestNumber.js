/*

Given an integer n, return the largest number that contains exactly n digits.

*/

function largestNumber(n) {
    const highDigit = '9';
    var final = '';
    for (let i = 0; i < n; i++)
        final += highDigit;
    
    return Number(final);
}
