/*

Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

*/

function sortByHeight(a) {
    var posTrees = [];
    
    for (let i = 0; i < a.length; i++) {
        if(a[i] == -1)
            posTrees.push(i);
    }
    
    for (let i = 0; i < posTrees.length; i++)
        a.splice(posTrees[i] - i, 1);
    
    a.sort(function(a, b){return a-b});
    
    for (let i = 0; i < posTrees.length; i++)
        a.splice(posTrees[i], 0, -1);
    
    return a;
}
