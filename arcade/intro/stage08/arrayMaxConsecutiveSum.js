/*

Given array of integers, find the maximal possible sum of some of its k consecutive elements.

*/


function arrayMaxConsecutiveSum(inputArray, k) {
    var maxElem = Math.max(...inputArray);
    
    if(k == 1)
        return maxElem;
    
    if(maxElem == Math.min(...inputArray))
        return k * maxElem;
    
    var sum = 0;
    var maxSum = 0;
    
    for (let i = 0; i < k; i++)
        sum += inputArray[i];
    
    maxSum = sum;
    
    for (let i = 1; i < inputArray.length - k + 1; i++) {
        sum = sum - inputArray[i - 1] + inputArray[i - 1 + k];
        if(sum > maxSum)
            maxSum = sum;
    }
    
    return maxSum;
}
