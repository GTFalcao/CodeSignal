/*

Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

*/

function differentSquares(matrix) {
    const sqrSize = 2;

    var squareDigits = [];
    var uniqueSquares = [];
    var squareIsUnique;

    // loop through each array in the matrix
    for (let i = 0; i <= matrix.length - sqrSize; i++) {
        squareDigits.push(new Array());

        // loop through each n*n block within the array
        for (let j = 0; j <= matrix[0].length - sqrSize; j++) {
            squareDigits[i].push(new Array());

            // loop vertically through the block
            for (let k = 0; k < sqrSize; k++) {

                // loop horizontally through the block
                for (let l = 0; l < sqrSize; l++)
                    squareDigits[i][j].push(matrix[i + k][j + l]);

            }

            squareIsUnique = true;

            for (let m = 0; m < uniqueSquares.length; m++) {
                if (compareSquareArrays(squareDigits[i][j], uniqueSquares[m])) {
                    squareIsUnique = false;
                    break;
                }
            }

            if (squareIsUnique)
                uniqueSquares.push(squareDigits[i][j]);

        }
    }

    return uniqueSquares.length;
}

function compareSquareArrays(arr1, arr2) {
    if (arr1.length != arr2.length)
        return false;

    for (let i = 0; i < arr1.length; i++)
        if (arr1[i] != arr2[i])
            return false;

    return true;
}
