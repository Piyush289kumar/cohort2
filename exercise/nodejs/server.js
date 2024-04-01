const { log } = require("console");
let fs = require("fs");

// fs.readFile("package.json", (error, data) => {
//   try {
//     console.log(`Asynchronous read : ${data.toString()}`);
//   } catch (error) {
//     if (error) console.log(error);
//   }
// });

console.log("File is open");
fs.open("package.json", "r+", (error, data) => {
  if (error) {
    console.log(`error: ${error}`);
  }
  console.log("File is open successfully");
});
