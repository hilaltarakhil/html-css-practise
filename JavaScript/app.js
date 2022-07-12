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

// SECTION 10
// FOR EACH

const number = [1, 2, 3, 4, 5];

number.foreach(function (num) {
  console.log(num * 2);
});

// MAP

const text = ['lol' , 'omg'];
const caps = text.map (fuction (t){
  return: t.toUpperCase ();
} )

// ARROW FUNCTION INTRO 

const square = (x) => {
  return x * y ;
}

// IMPLICIT RETURNS 

const square = n => (
  n * n 
)

const square = n => n * n ; 


// ARRYA FIND 

let movies = [
  "MAN" , "WOMAN" , "DOG"
]
const movie = movies.find (movies => {
  return movie.include ('DOG')
}) 

// FILTER 

const nums = [34 ,35 ,36 , 37 , 38];

const odds =nums.filter(n => n % 2 ===1)

// SOME AND EVERY 

const words = ["dog" , "bag" , "dig"]

const all3LETs = words.every(word => word.length ===3 )


// REVISITING SORT 

const prices = [400.50 , 3000 , 99.99 , 35.99 , 12.00 , 9500]

prices.sort();

const acsSort = prices.sort((a,b) => a - b);
const desSort = prices.sort((a,b) => b - a);

// REDUCE 
// multiple values into one value 


const nums = [3 , 4, 5, 6 ,7];
const product = nums.reduce((total , currentVal) => {
  return total * currentVal ;
});

const maxGrade = grades.reduce((max , currtVal) => {
  return Math.max(max, currtVal)
});

const minGrade = grades.reduce((min , currtVal) => {
  return Math.min(min, currtVal)
});


total              currVal           return
  32                   92                49
  12                   83                53
  60                   38                67



// DEFAULT PARAMETERS

function multiply(x,y){
if (typeof y === 'undefined'){
  y = 1;
}
  return x * y ;
}

function multiply(a,b = 1){
  return a * b ;
}


// SPREAD 

const nums = [9,3,4,8];
Math.max(nums);

Math.max(...nums);

const colors =['red', 'yellow', 'green', 'orange']


// SPREAD IN ARRAY 

const nums1 = [1,2,3]
const nums2 = [4,5,6]

[...nums1 , ...nums2] . split('') used for spliting 


// SPREAD IN OBJECT 

const feline = {
  legs:4,
  family : 'felidae'
};

const canine = {
  family: 'caninae',
  furry:true ,
  legs;4
};

const dog = {... canine , isPet : true};


// REST 

function SubmitEvent() {
const argsArr = [...arguments]
return argsArr.reduce((total , currVal) =>{
  return total + currVal
} )
}


// REST PARAMS 

function sum(...nums){
  return nums.reduce((total , currVal ) => {
    return total + currVal
  })
}

// DESTRUCTURING 
// ARRAYS

const raceResults = [
  'salar',
  'hilal',
  'lemarzala',
  'rustam',
  'milad'
];

const [silver,gols,bronze] = raceResults ;
const [first ,,,fourth] = raceResults;
const [winner , ...others] = raceResults;


// OBJECTS 
const runner ={
  first: "salar",
  last: "tarakhil",
  cuntry: "afghanistan"
  title: "best runner"
}

const {
  fisrt , 
  last ,
   ...other 
  } = runner ;

  // NESTED 

  const [,{country}] = results ;

  const  [{
    first : goldWinner
  } ,{
    country 
 }] results ;


//  PARAMETERS 

const fullName = ({first , last}) => {
  return 
}

const runner = {
first: "salar",
last: "tarakhil",
title:"fast runner"
}

function print (person){
  first,last,title
  console.log('${frist} ${last} ${title}'
  )
}

const numbers = [20,21,23]
numbers.forEach(function (num){
  console.log(num * 2);
})

const numbers = [20,21,22,23];

const doubles = numbers.map(function (num){
  return num * 2 ;
  
})




  


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


// EXAM
const fruits = ['pear', 'apple', 'orange'];
const numbers = [1,2,3,4,5]


function findFruit(arr, fruit) {
    // use find method
  
  const foundFruit = arr.find(f => f === fruit) 
  return foundFruit
  
}
console.log(findFruit(fruits, 'apple')) // pear


function filterNumbers(arr) {
  // use filter
}
console.log(filterNumbers(numbers)) // 4,5

function total(arr) {
   // your code here
   // use reduce
}
console.log(total([1,2,3])); // 6

const fruits = ['apples', 'oranges', 'pears'];
const newFruits = fruits;
console.log(newFruits);


// PRACTICE

function isValidPassword(password, username) {
  if (password.length < 8) {
    return false;
  }
  if (password.indexOf(" ") !== -1) {
    return false;
  }
  if (password.indexOf(username) !== -1) {
    return false;
  }
  return true;
}

// Adding methods to an object!
const math = {
  numbers: [1, 2, 3, 4, 5],
  add: function (x, y) {
    return x + y;
  },
  multiply: function (x, y) {
    return x * y;
  }
}

// To execute multiply:
math.multiply(5, 9); //45

math.multiply(23,56);

math.add(5,10);