/*

In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

*/

function minesweeper(matrix) {
    var final = [];

    for (let i = 0; i < matrix.length; i++) {
        final.push(new Array());

        for (let j = 0; j < matrix[i].length; j++)
            final[i][j] = calcMines(i, j, matrix);
    }

    return final;
}

function calcMines(x, y, matrix) {
    const range = 1;
    var amount = 0;

    for (let i = (range * -1); i <= range; i++) {
        for (let j = (range * -1); j <= range; j++) {
            if ((!i) && (!j))    // the square itself is not counted
                continue;

            let pointX = x + i;
            let pointY = y + j;
            if ((pointX >= 0) && (pointX < matrix.length) && (pointY >= 0) && (pointY < matrix[x].length)) {
                if (matrix[pointX][pointY])
                    amount++;
            }
        }
    }

    return amount;
}
