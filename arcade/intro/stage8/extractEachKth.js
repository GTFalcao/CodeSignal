/*

Given array of integers, remove each kth element from it.

*/

function extractEachKth(inputArray, k) {
    var len = Math.floor(inputArray.length / k);
    
    for (let i = 1; i <= len; i++)
        inputArray.splice((k * i) - i, 1);
    
    return inputArray;
}
