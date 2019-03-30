/*

You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

*/

function knapsackLight(value1, weight1, value2, weight2, maxW) {
    var obj1 = { weight: weight1, value: value1 };
    var obj2 = { weight: weight2, value: value2 };
    var objects = [obj1, obj2];
    
    var bag = { weight: 0, value: 0 };
    
    objects.sort(function(a, b){return b.value - a.value});
    
    for (let i = 0; i < objects.length; i++) {
        if(bag.weight + objects[i].weight <= maxW) {
            bag.value += objects[i].value;
            bag.weight += objects[i].weight;
        }
    }
    
    return bag.value;
}
