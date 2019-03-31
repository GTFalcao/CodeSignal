/*

Presented with the integer n, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.

Return the value of 2^(position_of_the_found_bit).

*/

function secondRightmostZeroBit(n) {
    return (2 ** Math.floor(Math.log2(
        ( (n | n+1) + 1)
        ^ (n | n+1)
        ))
    );
  }