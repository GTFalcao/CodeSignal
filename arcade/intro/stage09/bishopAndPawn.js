/*

Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:
https://codesignal.s3.amazonaws.com/tasks/bishopAndPawn/img/bishop.jpg?_tm=1551432802825

*/

function bishopAndPawn(bishop, pawn) {
    var convert = 'abcdefgh';
    var bishopNum = Number(convert.indexOf(bishop[0]).toString() + bishop[1]);
    var pawnNum = Number(convert.indexOf(pawn[0]).toString() + pawn[1]);
    
    for (let i = 1; i < 8; i++) {
        if (
        (pawnNum == bishopNum + (10 * i) + i) ||
        (pawnNum == bishopNum + (10 * i) - i) ||
        (pawnNum == bishopNum + (-10 * i) + i) ||
        (pawnNum == bishopNum + (-10 * i) - i) )
            return true;
    }
    
    return false;
}
