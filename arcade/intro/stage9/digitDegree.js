/*

Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

*/

function digitDegree(n) {
    var numStr = n.toString();
    for(var i = 0; numStr.length > 1; i++) {
        let sum = 0;
        
        for(let k = 0; k < numStr.length; k++)
            sum += Number(numStr[k]);
        
        numStr = sum.toString();
    }
    
    return i;
}
