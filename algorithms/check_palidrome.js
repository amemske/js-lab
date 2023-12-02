// Write a function that checks if a given string is a palindrome (reads the same backward as forward).
//  Ignore non-alphanumeric characters.

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
  }
  
  console.log(isPalindrome("racecar")); // Output: true
  