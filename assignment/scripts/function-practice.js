console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!' ; //concatenation 
}
// Remember to call the function to test
console.log(helloName('Jo')); //expect Hello Jo!
console.log(helloName('Stacy'))//expect Hello Stacy!

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
   // return firstNumber + secondNumber;
}
console.log(addNumbers(8,2));//expect 10

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
return firstNumber * secondNumber * thirdNumber;
}
console.log(multiplyThree(5, 2, 10));//expect 100

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }

}
console.log(isPositive(3));  // Expected: true
console.log(isPositive(-1)); // Expected: false
console.log(isPositive(0));  // Expected: false
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
function trueOrFalse(i) {
 if (i % 2 === 0){
return true;
 } else {
  return false;
 }
}
console.log(trueOrFalse(10)); // Expect true, because 10 
console.log(trueOrFalse(3));  // Expect false, because 3 

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if(array.length > 0) { // sets conditions 
    return array.pop(); // takes off last value of array
  } else {
    return undefined;
  }
}
console.log(getLast([1, 2, 3]));  // Expect 3... the last value
console.log(getLast([]));         // Expect undefined because the array is empty
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
 for (let item of array){ // item is declared and scoped within the code block.. it is assigned the current value
  if (item === value) {
    return true;
  }
 }
 return false;
 
}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if(string.length === 0 ){
    return false; // indicates that string is empty. no letter is the first letter. 
  } else if (string[0] === letter){
    return true; // the 0 aka first fist charecter 
  } else { // anything is not a letter in the 0 placeholder
    return false;
  }
 }

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for(let i = 0; i < array.length; i++) {
    sum+=array[i];
  }
  // TODO: return the sum
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
