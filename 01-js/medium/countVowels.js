/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  str.split("").map((ch) => {
    vowels.map((vl) => {
      vl === ch ? count++ : count;
    });
  });

  return count;
}

const voewlStr = "Piyush";

console.log(countVowels(voewlStr));

module.exports = countVowels;