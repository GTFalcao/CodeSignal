
function stringsConstruction(a, b) {

    // first, let's store the amount of each character in each string
    var charsInA = countCharacters(a);
    var charsInB = countCharacters(b);

    var multiplier = [];

    // now, we can compare them
    for (let i = 0; i < charsInA.length; i++) {
        let foundChar = false;

        for (let j = 0; j < charsInB.length; j++) {
            if (charsInA[i].char == charsInB[j].char) {
                foundChar = true;
                multiplier.push(Math.floor(charsInB[j].count / charsInA[i].count));
                break;
            }
        }

        if (!foundChar)
            return 0;
    }
    
    return Math.min(...multiplier);
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