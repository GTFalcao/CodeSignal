/*

Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.
https://codesignal.s3.amazonaws.com/tasks/chessKnight/img/knight.jpg?_tm=1551474250622
*/

function chessKnight(cell) {
    var amountMoves = 0;
    
    for (let x = -2; x <= 2; x++) {
        if(x == 0)
            continue;
        
        let temp = knightReverse((-1) * Math.abs(x), -1, -2);
        
        for(let y = temp; y <= Math.abs(temp); y += Math.abs(2*temp))
        if( (cell.charCodeAt(0) + x >= 'a'.charCodeAt(0)) &&
            (cell.charCodeAt(0) + x <= 'h'.charCodeAt(0)) &&
            (Number(cell[1]) + y >= 1) &&
            (Number(cell[1]) + y <= 8) )
                amountMoves++;
    }
    
    return amountMoves;
}

function knightReverse(num, first, second) {
    if(num == first)
        return second;
    else
        return first;
}