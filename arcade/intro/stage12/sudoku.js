/*

Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

*/

function sudoku(grid) {

    var columns = [];
    var subgrids = [];

    for (let i = 0; i < 9; i++) {
        columns.push([]);

        for (let j = 0; j < 9; j++)
            columns[i].push(grid[j][i]);
    }

    for (let l = 0; l < 3; l++)
        for (let i = 0; i < 3; i++) {
            subgrids.push([]);

            for (let j = 0; j < 3; j++)
                for (let k = 0; k < 3; k++) {
                    subgrids[(l * 3) + i].push(grid[(l * 3) + j][(i * 3) + k]);
                }
        }

    return ((checkSection(grid)) && (checkSection(columns)) && (checkSection(subgrids)));
}

function checkSection(section) {
    for (let i = 0; i < 9; i++)
        for (let j = 1; j <= 9; j++) {

            if (!section[i].includes(j))
                return false;

        }

    return true;
}
