/*

You are given an array of integers that you want distribute between several groups. The first group should contain numbers from 1 to 104, the second should contain those from 104 + 1 to 2 * 104, ..., the 100th one should contain numbers from 99 * 104 + 1 to 106 and so on.

All the numbers will then be written down in groups to the text file in such a way that:

- the groups go one after another;
- each non-empty group has a header which occupies one line;
- each number in a group occupies one line.

Calculate how many lines the resulting text file will have.

*/

function numbersGrouping(a) {
    const threshold = 10 ** 4;

    var groupMap = new Map();

    for (let i = 0; i < a.length; i++) {
        let belongsTo = Math.floor((a[i] - 1) / threshold);

        if (groupMap.has(belongsTo))
            groupMap.set(belongsTo, groupMap.get(belongsTo) + 1);
        else
            groupMap.set(belongsTo, 1);
    }
    
    var totalLines = 0;

    groupMap.forEach(function (value, key, map) {
        totalLines += value + 1;
    });
    
    return totalLines;
}