const counterObject = require("./myscript.js");

console.log(counterObject.getCounter());
counterObject.incermentCounter();
console.log(counterObject.getCounter());

const newCounterObject = require("./myscript.js");

console.log(newCounterObject.getCounter());

// NODE

const fs = require("fs");

fs.readdir(process.cwd(), (err) => {
  if (err) {
    console.log(err);
  }
});


const lstas = (filename) => {
  return new Promise((resolve, reject) => {
    fs lstats()
  })
}