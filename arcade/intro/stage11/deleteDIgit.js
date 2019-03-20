/*

Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

*/

function deleteDigit(n) {
    var numStr = n.toString();
    
    var partialNums = [];
    
    for (let i = 0; i < numStr.length; i++)
        partialNums.push(numStr.slice(0, i).concat(numStr.slice(i+1)));
    
    return Math.max(...partialNums);
}
