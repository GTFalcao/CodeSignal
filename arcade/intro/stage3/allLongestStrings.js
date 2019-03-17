/*

Given an array of strings, return another array containing all of its longest strings.

*/

function allLongestStrings(inputArray) {
    var maxLength = 0;
    var endStrings = new Array();
    
    for (let i = 0; i < inputArray.length; i++) {
        if(inputArray[i].length > maxLength) {
            endStrings = [];
            maxLength = inputArray[i].length;
            endStrings.push(inputArray[i]);
        }
        
        else if(inputArray[i].length == maxLength)
            endStrings.push(inputArray[i]);
    }
    
    return endStrings;
}
