/*

You are given an array of desired filenames in the order of their creation.
Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.

*/

function fileNaming(names) {
    var amountRepeats = [];
    
    var checkRepeat = false;
    
    for (let i = 0; i < names.length; i++) {
        amountRepeats.push(0);
        for (let j = 0; j < i; j++) {
            if(i == j) continue;
            
            if(names[i] == names[j]) {
                
                do {
                    checkRepeat = false;
                    amountRepeats[j]++;
                    names[i] = names[j] + '(' + amountRepeats[j] + ')';
                    for(let k = 0; k < i; k++) {
                        if(names[i] == names[k])
                            checkRepeat = true;
                    }
                } while (checkRepeat);
                        
                break;
            }
        }
    }
    
    return names;
}
