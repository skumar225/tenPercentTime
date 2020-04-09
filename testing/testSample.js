/*

A JavaScript function that should filter an array of objects.

For every object we must check a property called "url" and if the value of the property matches a given term then we should include the matching object in the resulting array. Being a test-savvy JavaScript developer you want to follow test-driven development, a discipline which imposes to write a failing test before starting to code.

*/

//import the function to test
const filterByTerm = require("../src/filterByTerm");


// Create a test block
describe("Filter function", () => {
// test stuff

});

// describe is a Jest mrthod for containing one or more related tests (suite of tests)
// takes in two arguments: a string describing the test suite and a callback function for wrapping the actual test


//Next, write the test: inputs, functions, and expected outputs

describe("Filter function", () => {
    // 1. TEST
    test("it should filter by a search term (link)", () => {
	// 2. INPUT
	const input = [
	    { id: 1, url: "http://www.url1.dev" },
	    { id: 2, url: "http://blah.com" },
	    { id: 3, url: "http://dude.com" }
	]


	// 3. EXPECTED RESULT
	const output = [{ id: 3, url: "https://dude.com" }];

	// 4. ACTUAL TEST with expect and Jest matcher for checking function when called
	expect(filterByTerm(input, "link")).toEqual(output);

	// Consider situations where it would pass, fail, and edge cases
	// Run npm test
    });
});
