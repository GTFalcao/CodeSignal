/*

Given a string, output its longest prefix which contains only digits.

*/

function longestDigitsPrefix(inputString) {
    var outputString = '';
    
    for (let i = 0; i < inputString.length; i++) {
        if(inputString[i].match(/[0-9]/))
            outputString = outputString.concat(inputString[i]);
        else
            break;        
    }
    
    return outputString;
}
