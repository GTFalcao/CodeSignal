/*

You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other.
What is the value of the third integer?

*/

function extraNumber(a, b, c) {
    var arr = [];
    
    for (let i = 0; i < arguments.length; i++)
        arr.push(arguments[i]);
    
    for (let i = 0; i < arr.length; i++)
        if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i]))
            return arr[i];
}
