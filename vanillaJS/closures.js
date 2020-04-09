/* 

THE MAGIC OF CLOSURES: Having access to an isolated outer scope which persists data changes on successive calls is the magic of closures.

1. Closure are nested function which has access to the outer scope
2. After the outer function is returned, by keeping a reference to the inner function (the closures) we prevent the outer scope to be destroyed.
3. Closures are created at every function call
*/

function buildContor(i) { 
    var contor = i;
    var displayContor = function() {
        console.log(contor++);
        contor++;
    };
    return displayContor; 
}

var myContor = buildContor(1);
myContor(); // 1
myContor(); // 2
myContor(); // 3

// new closure - new outer scope - new contor variable
var myOtherContor = buildContor(10);
myOtherContor(); // 10 
myOtherContor(); // 11

// myContor was not affected 
myContor(); // 4

/* USE OF CLOSURES
1. Store private data: properties that should not be modified, we can choose what data to expose and what not to expose
2. Events in JS are closures 
*/

function initializeData() {
    var myVar = 1; 
    return { 
        getVar: function() {
            return myVar;
        },
        setVar: function(v) {
            myVar = v;
        }
    };
}

obj = initializeData();

console.log(obj.getVar()); // 1

obj.setVar(2);
console.log(obj.getVar()); // 2

obj.setVar("string");
console.log(obj.getVar()); // string
//Manipulate myVar but don't have access to it.

/* 
Recap:

A closure is an inner function which has access to the outer function scope
Every call of the outer function creates a new closure
Every call of the closure interacts with the same outer scope – which is persistent

*/

//Questions:

//1. What will the following code output?
for (var i = 0; i < 3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);
}

/*
What is the goal of the above code? To output 1, 2, and 3 an individual alerts, after 1, 1.2, and 1.3 seconds each. But this code is alert 3 three times. 

The variable i is actually declared within the for loop and the inner function accesses it. So when the for loop is done running, each of the inner functions refers to the same variable i, which at the end of the loop is equal to 3.

Our goal is for each inner function to maintain its reference to the variable i without the value of it being altered

Let's fix this:
*/

for (var i = 0; i < 3; i++) {
  setTimeout(function(i_local) { 
    return function() { alert(i_local); } 
  }(i), 1000 + i);
}

// Pass in a function with a reference variable that will retain its vaalue and return the inner function

//2. What a functio that would allow you to do this:

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

function createBase(baseNumber) {
    //Referencing baseNumber below because its available to us.
    return function (num) {
	return baseNumber + num;
    }}
}

//3. Closures to create a private counter

// Updating a private variable
