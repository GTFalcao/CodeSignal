/*

Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

*/

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    var yourStrongest, friendsStrongest, yourWeakest, friendsWeakest;
    
    yourStrongest = Math.max(yourLeft, yourRight);
    friendsStrongest = Math.max(friendsLeft, friendsRight);
    
    yourWeakest = Math.min(yourLeft, yourRight);
    friendsWeakest = Math.min(friendsLeft, friendsRight);
    
    if( (yourStrongest == friendsStrongest) && (yourWeakest == friendsWeakest) )
        return true;
    
    return false;
}
