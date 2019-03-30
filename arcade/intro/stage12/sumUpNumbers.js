/*

CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items.
Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

*/

function sumUpNumbers(inputString) {
    var num = '';
    var sum = 0;
    var isReadingNumber = false;
    
    inputString = inputString.concat('-');
    
    for (let i = 0; i < inputString.length; i++) {
        if(inputString[i].match(/[0-9]/)) {
            isReadingNumber = true;
            num = num.concat(inputString[i]);
        } else {
            if(isReadingNumber) {
                sum += Number(num);
                num = '';
            }
            
            isReadingNumber = false;
        }
    }
    
    return sum;
}
