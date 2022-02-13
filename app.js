const { readFile, writeFile } = require("fs");

readFile("./first.txt", "utf-8", (err, result) => {
  console.log(result);
});

writeFile("./write.txt", "write this to file", (err, result) => {
  console.log(result);
});
