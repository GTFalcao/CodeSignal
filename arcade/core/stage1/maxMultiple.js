/*

Given a divisor and a bound, find the largest integer N such that:

N is divisible by divisor.
N is less than or equal to bound.
N is greater than 0.

It is guaranteed that such a number exists.

*/

function maxMultiple(divisor, bound) {
    for (let i = bound; i > 0; i--)
        if(!(i % divisor))
            return i;
    
    return 'error';
}
