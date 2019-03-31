/*

You are given two strings s and t of the same length, consisting of uppercase English letters. Your task is to find the minimum number of "replacement operations" needed to get some anagram of the string t from the string s.
A replacement operation is performed by picking exactly one character from the string s and replacing it by some other character.

*/

function createAnagram(s, t) {
    var charsInS = countCharacters(s);
    var charsInT = countCharacters(t);
    
    var amountReplaces = 0;

    for (let i = 0; i < charsInT.length; i++) {
        let amountInS = 0;

        for (let j = 0; j < charsInS.length; j++) {
            if (charsInT[i].char == charsInS[j].char) {
                amountInS = charsInS[j].count;
                break;
            }
        }

        if (charsInT[i].count > amountInS)
            amountReplaces += (charsInT[i].count - amountInS);
    }
    
    return amountReplaces;
}

function CharacterObj(which, amount) {
    this.char = which;
    this.count = amount;
}

function countCharacters(str) {
    var newArray = [];

    for (let i = 0; i < str.length; i++) {
        let foundChar = false;

        // search for the character
        for (let j = 0; j < newArray.length; j++)
            if (newArray[j].char == str[i]) {
                foundChar = true;
                newArray[j].count++;
                break;
            }

        if (foundChar)
            foundChar = false;
        else // create an object for the character
            newArray.push(new CharacterObj(str[i], 1));
    }

    return newArray;
}