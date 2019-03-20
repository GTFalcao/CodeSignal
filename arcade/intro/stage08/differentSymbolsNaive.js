/*

Given a string, find the number of different characters in it.

*/

function differentSymbolsNaive(s) {
    var unique = 0;
    
    for (let i = 0; i < s.length; i++)
        if(s.indexOf(s[i]) == i)
            unique++;
    
    return unique;
}
