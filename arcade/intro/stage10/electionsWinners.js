/*

Elections are in progress!

Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

*/

function electionsWinners(votes, k) {
    var possibleWinners = [];
    var absTop = Math.max(...votes);
    var origLength = votes.length;
    
    for (let i = 0; i < origLength; i++) {
        let currentTop = votes.indexOf(Math.max(...votes));
        
        if(votes[currentTop] + k <= absTop)
            break;
        
        possibleWinners.push(votes[currentTop]);
        votes.splice(currentTop, 1);
    }
    
    var amountWinners = possibleWinners.length;
    
    if ( (!amountWinners) && (votes.indexOf(Math.max(...votes)) == votes.lastIndexOf(Math.max(...votes))) )
        amountWinners = 1;
    
    return amountWinners;
}
