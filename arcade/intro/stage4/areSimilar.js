/*

Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

*/

function areSimilar(a, b) {
    
    var swap = false;
    var temp = [-1, -1];
    
    for (let i = 0; i < a.length; i++) {
        if(a[i] == b[i])
            continue;
        
        if(swap == true)
            return false;
        
        if(temp[0] == -1) {
            temp[0] = a[i];
            temp[1] = b[i];
        }
        
        else if( (a[i] == temp[1]) && (b[i] == temp[0]) )
            swap = true;
        
        else
            return false;
    }

    return true;
}
