// alert("it's working");
// if (1 === 1){
//   console.log (it's true )

// }

// if (rating === 2){
//   console.log('super star')
// }

// // ARRAY

// let shoppinglist = ['cereal' , 'cheese' , 'ice']

// shoppinglist[1] = 'bread';

// TEST

// const tempArray = ["apples", "bananas", "oranges"];
// const anotherArray = ["pears"];

// console.log(tempArray.shift());

// console.log(tempArray.concat(anotherArray));

// console.log(tempArray.reverse());

// console.log(tempArray.pop(1));

// console.log(tempArray.slice(1));

// console.log([...tempArray, ...anotherArray]);

// console.log(tempArray.slice(2));

// console.log(tempArray);

// console.log(tempArray.slice(3));

// // pop the first element out of the array

// //concat both arrays

// //reverse one of the arrays

// // remove the first element from an array using slice

// function greet() {
//   console.log("hi");
// }

// function square(num) {
//   console.log(num * num);
// }

// function sum(x, y) {
//   console.log(x + y);
// }

// function square(x) {
//   return x * x;
//   console.log("ALL DONE");
// }

// function isValidPassword(password, username) {
//   if (password.length < 8) {
//     return falselse;
//   }
//   if (password.indexOf(" ") !== -1) {
//     return false;
//   }
//   if (password.indexOf(username) !== -1) {
//     return false;
//   }
//   return false;
// }

// function isValidPassword(password, username) {
//   if (password.length < 8) {
//     return falselse;
//   }
//   if (password.indexOf(" ") !== -1) {
//     return false;
//   }
//   if (password.indexOf(username) !== -1) {
//     return false;
//   }
//   return false;
// }

// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexOf(" ") !== -1 ||
//     password.indexOf(username) !== -1
//   ) {
//     return false;
//   }
//   return true;
// }

// AVERAGE

// function avg(arr) {
//   let total = 0;

//   for (let num of arr) {
//     total += num;
//   }
//   return total / arr.length;
// }

// PANGRAMS

// function isPangram(sentence) {
//   sentence.toLowerCased = sentence.toLowerCase();
//   for (let char of "abcdefghijklmnopqrstuvwxyz") {
//     if (lowerCased.indexOf(char) == -1) {
//       return false;
//     }
//   }
//   return true;
// }

// SCOPE

// functionlol();
// {
//   let person = "Tom";
//   const age = 45;
//   var color = "teal";
//   console.log(age);
// }

// BLOCK SCOPE

// if (true) {
//   var animal = "eel";
//   console.log(animal);
// }
// console.log(animal);

// LEXICAL SCOPE

// function outer() {
//   let movie = "Amadeus";

//   function inner() {
//     let movie = "The Shining";

//     function extraInner() {
//       console.log(movie.toUpperCase());
//     }
//     extraInner();
//   }
//   inner();
// }

// FUNCTION EXPRESSION

// function add(x, y) {
//   return x + y;
// }

// const sum = function (x, y) {
//   return x + y;
// };

// HIGHER ORDER FUNCTION

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

const operations = [add, subtract, multiply, divide];

// EXAM

// write a traditional for loop that console.logs values from 1-10
for (i = 1; i <= 10; i++) {
  console.log(i);
}

// create a new array from the fruits array. Loop through the array and remove the first letter from each element
const fruits = ["apples", "oranges", "pears"];
const newFruits = [];
console.log(newFruits);

for (let i of fruits) {
  console.log(i.substring(1));
  newFruits.push(i.substring(1));
}
console.log(newFruits);

// FUNCTION AS ARGUEMENTS

function callTwice(f) {
  console.log(123);
}

function multiplyBy(num) {
  return function () {
    console.log("HI!!");
  };
}

// FUNCTION AS RETURN VALUES

function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

const triple = multiplyBy(3);
const double = multiplyBy(2);

// CALL BACKS

setTimeout(function () {
  alert("WELCOME");
}, 5000);

// HOISTING

console.log(animal);
var animal = "lion";
console.log(animal);

let shrimp = "Harlequin shrimp";
console.log(shrimp);

// create a function that takes two numbers as function parameters and returns the sum of those two numbers

// function add(x, y) {
//   return x + y;
// }
// // what is hoisting?
// console.log(add(2, 3));
// // what is the difference between a while loop and a forEeach?

// function fun1() {
//   // Assign 5 to oopsGlobal Here
// }

// // Only change code above this line

// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }

// function myLocalScope() {
//   // Only change code below this line

//   console.log("inside myLocalScope", myVar);
// }
// myLocalScope();

// // Run and check the console
// // myVar is not defined outside of myLocalScope
// console.log("outside myLocalScope", myVar);
