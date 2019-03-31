/*

Reverse the order of the bits in a given integer.

*/

function mirrorBits(a) {
    var final = 0;
    
    var size = Math.floor(Math.log2(a));
    
    for (let i = 0; i <= size; i++) {
        let mask = 1 << i;
        let reverseMask = 1 << (size - i);
        
        if(a & mask)
            final |= reverseMask;
    }
    
    return final;
}
