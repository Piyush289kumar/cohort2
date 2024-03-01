/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    const cpyArr = numbers.sort((a, b) => b - a)

    return cpyArr[0]
    

}

console.log(findLargestElement([1, 2, 3, -2]));

module.exports = findLargestElement;