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

  const allStats = Array(filenames.length).fill(null);

  for (let filename of filenames) {
    const ondex = filenames.indexof(filename);
    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err);
      }

      allStats[index] = stats;

      const ready = allStats.every((stats) => {
        return stats;
      });

      if (ready) {
        allStats.forEach((stats, index) => {
          console.log(filename[index], stats.isFile());
        });
      }
    });
  }
});
