function firstLast6(array)  {
    var arrayLength = array.length;
    var firstNum = array[0];
    var lastNum = array[arrayLength - 1];
    return (lastNum === 6|| firstNum === 6);
}

function has23(array) {
    var yep = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 2 || array[i] === 3) {
            yep = true;
        }
    }
    return yep;
}

function fix23(array) {
    var newArray = array;
    for (var i = 1; i < array.length; i++) {
        var current = array[i];
        var previous = array[i];
        if (current === 3 && previous === 2) {
            newArray[i + 1] = 0;
        }
    }
    return newArray;
}

function countYZ(string) {
    var count = 0;
    var length = string.length;
    for (var i = 0; i < length; i++) {
        var letter = string.substring(i, i + 1);
        var nextChar = string.substring(i + 1, i + 2);
        if (nextChar === " " || i + 1 === string.length) {
            if (letter === "y" || letter === "z" || letter === "Y" || letter === "Z") {
                count++;
            }
        }
    }
    return count;
}

function endOther(string1, string2) {
    var length1 = string1.length;
    var length2 = string2.length;
    var end1 = (string1.substring(length1 - length2));
    var end2 = (string2.substring(length2 - length1));
    var lowercase1 = end1.toLowerCase();
    var lowercase2 = end2.toLowerCase();
    return (lowercase1 === lowercase2);
}

function starOut(string) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        var now = string.substring(i, i + 1);
        var tomorrow = string.substring(i + 1, i + 2);
        var yesterday = string.substring(i - 1, i);

        if (tomorrow !== "*" && now !== "*" && yesterday !== "*") {
            newString += now;
        }
    }
    return newString;
}

function getSandwich(string) {
    var crust1 = string.indexOf("bread");
    var crust2 = string.lastIndexOf("bread");
    var breadth = 5;

    var sandwich = "";

    if (crust1 !== crust2) {
        sandwich += string.substring(crust1 + breadth, crust2);
    }
    return sandwich;
}

function canBalance(array) {
    var twoStrikes3Balls = 0;
    for (var i = 0; i < array.length; i++) {
        twoStrikes3Balls += array[i];
    }
    var fourthInning = twoStrikes3Balls / 2;

    var foulBall = 0;
    var pitches = 0;
    while (foulBall < fourthInning) {
        foulBall += array[pitches];
        pitches++;
    }

    return (foulBall === fourthInning);
}

function countClumps(array) {
    var clumps = 0;
    for (var i = 0; i < array.length; i++) {
        var today = array [i];
        var tomorrow = array [i + 1];
        var theFuture = array[i + 2];

        if (today === tomorrow && today !== theFuture) {
            clumps++;
        }
    }
    return clumps;
}

function evenlySpaced(a, b, c) {
    var smallMedium = 0;
    var mediumBig = 0;

    var big = a;
    var medium = b;
    var small = c;

    if (c > b && c > a && b > a) {
        big = c;
        medium = b;
        small = a;
    }

    if (a > b && a > c && c > b) {
        big = a;
        medium = c;
        small = b;
    }

    if (b > a && b > c && a > c) {
        big = b;
        medium = a;
        small = c;
    }

    if (b > a && b > c && c > a) {
        big = b;
        medium = c;
        small = a;
    }

    if (c > a && c > b && a > b) {
        big = c;
        medium = a;
        small = b;
    }

    smallMedium = medium - small;
    mediumBig = big - medium;

    return (smallMedium === mediumBig);
}

function tester() {
    document.getElementById("output").innerHTML += firstLast6([2, 5, 7, 8, 6]);
    document.getElementById("output").innerHTML += has_23([2, 4, 8, 5, 3, 2, 3]);
    document.getElementById("output").innerHTML += fix_23([2, 4, 8, 5, 3, 2, 3]);
    document.getElementById("output").innerHTML += countYZ("Fuzzy fez party");
    document.getElementById("output").innerHTML += endOther("mixer", "fixer");
    document.getElementById("output").innerHTML += starOut("so*many**stars***");
    document.getElementById("output").innerHTML += getSandwich("breadcheesebread");
    document.getElementById("output").innerHTML += canBalance([2, 4, 8, 5, 3, 2, 3]);
    document.getElementById("output").innerHTML += countClumps([2, 8, 8, 5, 3, 3, 3]);
    document.getElementById("output").innerHTML += evenlySpaced([3, 5, 1]);
}

// DEBUGGING: console.log(i);