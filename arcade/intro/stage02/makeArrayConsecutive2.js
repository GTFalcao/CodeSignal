/*

Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size.
Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1.
He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

*/

function makeArrayConsecutive2(statues) {
    var largestStatue, smallestStatue;
    
    for (let i = 0; i < statues.length; i++) {
        if( (!i) || (statues[i] > largestStatue) )
            largestStatue = statues[i];
        
        if ( (!i) || (statues[i] < smallestStatue) )
            smallestStatue = statues[i];
    }
    
    return (largestStatue - smallestStatue) - statues.length + 1;
}
