
/*

Given a string consisting of lowercase English letters, find the largest square number which can be obtained by reordering the string's characters and replacing them with any digits you need (leading zeros are not allowed) where same characters always map to the same digits and different characters always map to different digits.

If there is no solution, return -1.

*/

function constructSquare(s) {
    var digits = s.length;

    if (digits == 1)
        return 9;

    // to filter the numbers we are looking for, let's begin by taking the square roots of the 
    // largest and smallest integers with the same amount of digits as our string has characters.
    
    var maxRoot = Math.floor(Math.sqrt(Number('9'.repeat(digits))));
    var minRoot = Math.ceil(Math.sqrt(Number('1' + '0'.repeat(digits - 1))));
    
    // now we can take each integer between our roots and check whether their squares match with the given string
    for (let i = maxRoot; i >= minRoot; i--) {
        let square = i ** 2;

        let uniqueDigits = mapCharacters(square.toString());
        let uniqueChars = mapCharacters(s);
            
        let arrayDigits = Array.from(uniqueDigits.values()).sort();
        let arrayChars = Array.from(uniqueChars.values()).sort();
        
        let notEqual = false;
        for (let j = 0; j < digits; j++) {
            if(arrayDigits[j] != arrayChars[j]) {
                notEqual = true;
                break;
            }
        }
        
        if(!notEqual)
            return square;
    }

    return -1;
}

function mapCharacters (str) {
    let charMap = new Map();
    
    for (let j = 0; j < str.length; j++) {
        if (!charMap.has(str[j]))
            charMap.set(str[j], 1);
        else
            charMap.set(str[j], charMap.get(str[j]) + 1);
    }
    
    return charMap;
}