/* What is a higher order function? */
// A function that accepts or returns another function, it goes "higher" to operate on functions
//Functions as arguments

isEven = (num) => num % 2 === 0;

result = [1,2,3,4,5,6,7,8,9,10].filter(isEven);

console.log(result); // [2,4,6,8,10]
//isEven is a function that is a parameter to another function. It calls filter, than uses T or F to determine if the number is even

//Returning functions
add = (x) => (y) => x + y;




// supply both x and y immediately or x first and y later
// In JS, functions caan be both arguments and return values

//forEach

//map

//filter

//reduce

//some

//every

//map practice: Refactor the following code using map to make only one call to the map function vs. the two below:

var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};


var sqrNumbers = map(myNumbers, square);
var absNumbers = map(sqrNumbers, sqrRoot);



// Write a program that outputs the largest set of characters that can be removed from this line without letting its length drop below 50.

function uniqueChars(paragraph) {
  // Throw error if no paragraph is passed into function
  if(!paragraph.length) throw Error('There was no paragraph to evaluate!');
  // Throw error if paragraph is less than 50 characters to begin with
  if(paragraph.length < 50) throw Error('This paragraph needs to be at least 50 characters, please try again');

  // Convert the paragraph into an array to use an iterator
  var arrWords = paragraph.split('');
  var newArr = [];

  // Iterate through arrWords array and push unique characters into a new array
  arrWords.forEach(char => {
    if(!newArr.includes(char)) {
      newArr.push(char);
    }
  })
  return newArr;
}



