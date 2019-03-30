/*

Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

*/


var i = 0;
var j = 0;
var direction = 'j++';

function spiralNumbers(n) {
    var matrix = [];
    var complete = false;

    for (let k = 0; k < n; k++) {
        matrix.push([]);
        for (let l = 0; l < n; l++)
            matrix[k][l] = -1;
    }

    var index = 1;

    while (!complete) {

        while ((i < n) && (j < n) && (i >= 0) && (j >= 0)) {
            if (matrix[i][j] != -1)
                break;
            matrix[i][j] = index++;

            takeStep(1);
        }

        takeStep(0);
        direction = changeDirection();
        takeStep(1);

        complete = checkCompleted(matrix);
    }

    return matrix;
}

function checkCompleted(matrix) {
    for (let m = 0; m < matrix.length; m++)
        if (matrix[m].indexOf(-1) > -1)
            return false;

    return true;
}

function takeStep(forward) {
    switch (direction) {
        case 'j++':
            if (forward) j++;
            else j--;
            break;
        case 'j--':
            if (forward) j--;
            else j++;
            break;
        case 'i++':
            if (forward) i++;
            else i--;
            break;
        case 'i--':
            if (forward) i--;
            else i++;
            break;
        default:
            console.log('error taking step');
            break;
    }
}

function changeDirection() {
    switch (direction) {
        case 'j++':
            return 'i++';
        case 'j--':
            return 'i--';
        case 'i++':
            return 'j--';
        case 'i--':
            return 'j++';
        default:
            console.log('error changing direction');
            return 'error';
    }
}