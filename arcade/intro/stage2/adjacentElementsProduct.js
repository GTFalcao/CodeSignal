/*

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

*/

function adjacentElementsProduct(inputArray) {
    var multiplier = [];
    var largestMultiplier;
    
    for(let i = 1; i < inputArray.length; i++) {
        multiplier[i] = inputArray[i] * inputArray[i - 1];
        
        if((i == 1) || (multiplier[i] > multiplier[largestMultiplier]))
            largestMultiplier = i;
    }
    
    return inputArray[largestMultiplier] * inputArray[largestMultiplier - 1];
}
