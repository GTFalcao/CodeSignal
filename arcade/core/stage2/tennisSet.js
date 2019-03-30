/*

In tennis, the winner of a set is based on how many games each player wins. The first player to win 6 games is declared the winner unless their opponent had already won 5 games, in which case the set continues until one of the players has won 7 games.

Given two integers score1 and score2, your task is to determine if it is possible for a tennis set to be finished with a final score of score1 : score2.

*/

function tennisSet(score1, score2) {
    var minScore = Math.min(score1, score2);
    var maxScore = Math.max(score1, score2);
    
    return (
        ( (minScore < 5) && (maxScore == 6) ) ||
        ( (minScore >= 5) && (minScore < 7) && (maxScore == 7) )
    );
}
