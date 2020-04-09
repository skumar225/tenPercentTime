/*

  BIND

  Anonmymous function will be called and the outer "this" will now be bound to the inner "this"

  So the inner this refers to the outer object
  Ie) forEach().bind(this);

  var a = Dog.funcName.bind(varNameToApplyitTo);

*/

/* Using claases */

// New object with class that has listed methods
class Dog {
    //Create and initialize an object within a class 
    constructor(name) {
	this.name name;
    }

    bark() {
	console.log(this.name + " says hello");
    }

}

// New instance of the object and make use of object methods 
let fido = new Dog('fido');
fido.bark(); 
