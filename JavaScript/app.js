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

// create a function that takes two numbers as function parameters and returns the sum of those two numbers

function add(x, y) {
  return x + y;
}
// what is hoisting?
console.log(add(2, 3));
// what is the difference between a while loop and a forEeach?
