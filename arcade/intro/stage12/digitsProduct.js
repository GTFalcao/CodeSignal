/*

Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product.
If there is no such integer, return -1 instead.

*/

function digitsProduct(product) {

    var digits = [];

    if (!product)
        return 10;

    if (product < 10)
        return product;

    while (product > 1) {
        var foundDiv = false;

        for (let i = 9; i > 1; i--) {
            if (product % i == 0) {
                foundDiv = true;
                digits.push(i);
                product /= i;
                break;
            }
        }

        if (!foundDiv)
            return -1;
        else
            foundDiv = false;
    }

    digits.sort(function (a, b) { return a - b });

    return Number(digits.join(''));
}

function checkDigits(arr) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] >= 10)
            return false;

    return true;
}