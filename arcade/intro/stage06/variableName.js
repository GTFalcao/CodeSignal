/*

Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

*/

function variableName(name) {
    
    if( (name.match(/[^\w]/) != null) || (name[0].match(/[0-9]/) != null) )
        return false;
    
    return true;
}
