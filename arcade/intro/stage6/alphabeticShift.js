/*

Given a string, replace each of its character by the next one in the English alphabet (z would be replaced by a).

*/

function alphabeticShift(inputString) {
    var outputString = '';
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] == 'z')
            outputString = outputString.concat('a');
        else
            outputString = outputString.concat(String.fromCharCode(inputString.charCodeAt(i) + 1));
    }

    return outputString;
}
