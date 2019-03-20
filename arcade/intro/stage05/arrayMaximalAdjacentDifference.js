/*

Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

*/

function arrayMaximalAdjacentDifference(inputArray) {
    var maxDiff = 0;

    for (let i = 1; i < inputArray.length; i++) {
        let diff = Math.abs(inputArray[i] - inputArray[i - 1]);

        if (diff > maxDiff)
            maxDiff = diff;
    }

    return maxDiff;
}
