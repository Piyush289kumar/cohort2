let fs = require("fs");
let _ = require("lodash");

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

let name = "Piyush kumar raikwar";
console.log(_.kebabCase(name));
