/*

Given a string, return its encoding defined as follows:

- First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
> for example, "aabbbc" is divided into ["aa", "bbb", "c"]

- Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
> for example, substring "bbb" is replaced by "3b"

- Finally, all the new strings are concatenated together in the same order and a new string is returned.

*/

function lineEncoding(s) {
    var subStrings = [];
    var tempStr = '';
    
    for (let i = 0; i < s.length; i++) {
        if( (!i) || (s[i] == s[i-1]) )
            tempStr += s[i];
        else {
            subStrings.push(tempStr);
            tempStr = s[i];
        }
    }
    
    subStrings.push(tempStr);
    
    var final = '';
    
    for (let i = 0; i < subStrings.length; i++) {
        let num = subStrings[i].length.toString();
        if(num != '1')
            final = final.concat(num);
        final = final.concat(subStrings[i][0]);
    }
    
    return final;
}
