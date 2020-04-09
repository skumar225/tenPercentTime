// SPREAD


function sum (x, y, z) {

    return x + y + z;
}

const numbers = [1,2,3];

console.log(sum(...numbers)); // 6


// Applys a functionality to all items in an iteratble.

[..arr, 1, 2, 3]; //arr is a spearate array

// Sum of all the arguments

// Push variables to one array

var a = [1, 2];
var b = [1, 2, 3];

a.push(...b);
// a = [1, 2, 1, 2, 3];

//Copy an array

var a = [1, 2];
var b = [1, 2, 3];
a = [...b]
// a = [1, 2, 3]

//Copy objects

var a = {
    a: 1,
    b: 2,
}

var obj = {...a};

/* obj = {
    a: 1,
    b: 2,
}
*/

// Concate 2 arrays
var a = [1, 2];
var b = [1 ,2 ,3];
var newArr = [...a, ...b];


// Convert string to array
var s = "Shilpa";
var arrS = [...s];

// returns ["S", "h", "i", "l", "p", "a"]

// Max and min

var a = [1,2,3];

Math.max(...a); // 3
Math.min(...a); // 1

