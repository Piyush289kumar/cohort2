/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const strTmp1 = str1.toLowerCase().split('').sort().join('')
  const strTmp2 = str2.toLowerCase().split('').sort().join('')

  return ((strTmp1 === strTmp2) ? true : false)
}

const str1 = 'POP'
const str2 = 'opp'
console.log(isAnagram(str1, str2));

module.exports = isAnagram;
