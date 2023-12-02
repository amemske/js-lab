// Write a function that finds and returns the longest word in a sentence.
// If two or more words have the same length, return the first one.

function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"
  