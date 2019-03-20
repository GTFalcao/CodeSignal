/*

Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down.

*/

function boxBlur(image) {
    var final = [];

    for (let i = 0; i < image.length - 2; i++) {
        final.push(new Array());

        for (let j = 0; j < image[i].length - 2; j++) {
            final[i][j] = blurPixel(i, j, image);
        }
    }

    return final;
}

function blurPixel(x, y, image) {
    const blurSize = 2;
    var temp = 0;

    for (let i = 0; i <= blurSize; i++) {
        for (let j = 0; j <= blurSize; j++)
            temp += image[x + i][y + j];
    }

    return Math.floor(temp / 9);
}
