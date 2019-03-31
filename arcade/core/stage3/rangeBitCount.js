/*

You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive.
You need to count the number of 1s in the binary representations of all the numbers in the array.

*/

function rangeBitCount(a, b) {
    var num = 0;
    
    for (let i = a; i <= b; i++)
        for (let j = Math.floor(Math.log2(i)); j >= 0; j--)
            if (i & (1 << j))
                num++;
    
    return num;
}
