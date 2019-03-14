/*

Given two strings, find the number of common characters between them.

*/

function commonCharacterCount(s1, s2) {
    var amount = 0;
    var counted = [];
    
    for (let i = 0; i < s2.length; i++)
        counted[i] = false;
    
    for (let i = 0; i < s1.length; i++) {
        
        for(let j = 0; j < s2.length; j++) {
            
            if( (s1[i] == s2[j]) && (!counted[j]) ) {
                amount++;
                counted[j] = true;
                break;
            }
        }
    }
    
    return amount;
}
