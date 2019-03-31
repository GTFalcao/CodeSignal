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