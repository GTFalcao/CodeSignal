/*

Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

*/

function longestWord(text) {
    var maxWord = '';
    
    var word = '';
    for (let i = 0; i < text.length; i++) {
        if(text[i].match(/[a-z]/i))
            word = word.concat(text[i]);
        else {
            if(word.length > maxWord.length)
                maxWord = word;
            word = '';
        }
    }
    
    if(word.length > maxWord.length)
        maxWord = word;
    word = '';
    
    return maxWord;
}