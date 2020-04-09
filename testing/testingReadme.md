What is testing?

Checking that our code meets some expectations. A function should return the expected output given some input.

3 Types of Testing:
1. Unit testing
2. Integration testing
3. UI testing - functional tests

UNIT TESTING:

Jest -

What is Jest?

A Javascript libraru for creating, running, and structuring tests. Jest is distributed as an NPM package you can install. Default testing tool for React apps.

What do I test?

Given a function that produces the expected result - that is what you should be thinking.

In a typical test:
1. Import the function to test
2. Give an input to the function
3. Define what to expect as the output
4. Check if the function produces the expected output

Input - expected output - assert the result.

*In a project, we can view a testing tool in the package.json file's scripts.


Test driven development - writing a failing test before starting to code

.spec of a folder name is the "specification of the functionality" of a function.


CODE COVERAGE

-With so many devs, adding and updating code, we need to make use of Jest's built in code coverage and you can activate it in two ways:

1. flag "--coverage"  --> npm test -- --coverage
2. Configure in the package.json

Aiming for 100% code coverage for any updated functionality in code.

https://www.valentinog.com/blog/jest/ for more on code coverage
