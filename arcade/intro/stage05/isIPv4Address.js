/*

An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.

*/

function isIPv4Address(inputString) {

    var dots = 0, betweenDots = 0;
    var posDots = [-1];

    for (let i = 0; i < inputString.length; i++) {
        if ((!validateIP(inputString[i])) || (dots > 3) || (betweenDots > 3))
            return false;

        else if (inputString[i] == '.') {
            dots++;
            posDots.push(i);

            if (!betweenDots)
                return false;
            else
                betweenDots = 0;
        }

        else
            betweenDots++;
    }

    posDots.push(inputString.length);


    if ((dots != 3) || (betweenDots > 3))
        return false;

    for (let i = 1; i < posDots.length; i++) {
        if (Number(inputString.slice(posDots[i - 1] + 1, posDots[i])) > 255)
            return false;
    }

    return true;
}

function validateIP(char) {
    switch (char) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
            return true;
        default:
            return false;
    }
}