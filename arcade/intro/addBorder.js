/*

Given a rectangular matrix of characters, add a border of asterisks(*) to it.

*/

function addBorder(picture) {
    for (let i = 0; i < picture.length; i++)
        picture[i] = '*' + picture[i] + '*';
    
    var stars = "";
    for (let i = 0; i < picture[0].length; i++)
        stars += '*';
    
    picture.push(stars);
    picture.unshift(stars);
    
    return picture;
}
