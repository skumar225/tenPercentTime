/* 

DIAGONAL DIFFERENCE

Given a square matrix of size n * n, calculate the absolute difference between the sums of its diagonals.

Eg)

Matrix: 

2  3  4
5  3 -1
9  8 -2

Diagonal 1: 2, 3, -2
Diagnoal 2: 4, 3, 9

Diagonal 1 sum: 3
Diagonal 2 sum: 16

Absolute difference between the sums of its diagonals:

| 3 - 16 | = 13

Output: 13

Note: Matrix can be any size (4 x 4, 10 x 10, etc.)

*/

/* 

Javascript and Matrix:

Combine multiple arrays into one big array.

*/

var matrix = [[2, 3, 4], [5, 3, -1], [9, 8, -2]];

matrix[0][2]; // return the number 4

/* Original problem: Calculate dynamically using two loops, such that we can 
accomadate the size of the matrix as it grows larger and larger. Use two for loops.
*/

function calculateMatrix (matrix) {

  // Get the size of the matrix, saves computational time so that we don't need to recalculate the matrix length on each iteration 

  // Get the length of the matrix
  var length = matrix.length;

  var diagOne = 0;
  var diagTwo = 0;

  // Iterate through the matrix
  for (var i = 0; i < length; i ++) {

    // Index matches the target we need to add
    diagOne += matrix[i][i];
    diagTwo =+ matrix[length - 1 - i][i];
  }

  return Math.abs(diagOne - diagTwo)
}

// Implement with reduce

