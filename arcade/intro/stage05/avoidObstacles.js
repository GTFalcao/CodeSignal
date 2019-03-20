/*

f integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

*/

function avoidObstacles(inputArray) {

    var largestNum = Math.max(...inputArray);

    for (let i = 1; i < largestNum; i++) {
        for (let j = 0; j < inputArray.length; j++) {

            if (!(inputArray[j] % i))
                break;

            if (j == inputArray.length - 1)
                return i;
        }
    }

    return largestNum + 1;

}
