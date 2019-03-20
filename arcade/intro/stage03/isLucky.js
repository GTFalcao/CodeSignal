/*

Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

*/

function isLucky(n) {
    
    var num = n.toString();
    var sum = [0, 0];
    
    for (let i = 0; i < num.length; i++)
        sum[Math.floor(i / (num.length / 2))] += Number(num[i]);
    
    return (sum[0] == sum[1]);
}
