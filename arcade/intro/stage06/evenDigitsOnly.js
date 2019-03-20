/*

Check if all digits of the given integer are even.

*/

function evenDigitsOnly(n) {
    var num = n.toString();
    
    for (let i = 0; i < num.length; i++) {
        if(Number(num[i]) % 2)
            return false;
    }
    
    return true;
}
