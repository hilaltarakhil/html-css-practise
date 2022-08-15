

const fs = require("fs");

fs.readdir(process.cwd(), (err) => {
  if (err) {
    console.log(err);
  }

  console.log(filnames);
});
