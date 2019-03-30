/*

Check if the given string is a correct time representation of the 24-hour clock.

*/

function validTime(time) {
    
    // chars 1 and 4 can be any digit.
    // since the input guarantees they are digits, no need to verify them
    if (
        (!time[0].match(/[0-2]/)) ||
        ( (time[0] == '2') && (!time[1].match(/[0-3]/)) ) ||
        (time[2] != ':') ||
        (!time[3].match(/[0-5]/))
    ) return false;
    
    return true;
}