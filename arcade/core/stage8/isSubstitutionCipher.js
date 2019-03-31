/*

A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. For example "bacdef...xyz" will be a simple ciphertext alphabet where a and b are rearranged.

A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e. having the same index) letter of some ciphertext alphabet.

Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers.

*/

function isSubstitutionCipher(string1, string2) {
    var charsFound = [];
    var charsMatch = [];

    for (let i = 0; i < string1.length; i++) {
        // do not run after the first time a character is found
        if (charsFound.indexOf(string1[i]) != -1)
            continue;

        charsFound.push(string1[i]);
        charsMatch.push(string2[i]);
        
        console.log('charsFound:', charsFound);
        console.log('charsMatch:', charsMatch);

        // check string1 for other occurrences of this character, and check string2 to see if it matches
        for (let j = i + 1; j < string1.length; j++)
            if (
                (string1[j] == charsFound[charsFound.length - 1]) &&
                (string2[j]) != charsMatch[charsFound.length - 1]
            ) return false;
    }

    for (let i = 0; i < charsMatch.length; i++)
        if (charsMatch.indexOf(charsMatch[i]) != charsMatch.lastIndexOf(charsMatch[i]))
            return false;

    return true;
}
