const counterObject = require("./myscript.js");

console.log(counterObject.getCounter());
counterObject.incermentCounter();
console.log(counterObject.getCounter());

const newCounterObject = require("./myscript.js");

console.log(newCounterObject.getCounter());
