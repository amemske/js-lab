//create a function that takes in a string and finds the longest word in the string

function findLongestWord(passedString) {
  //slice string at empty spaces
  wordArray = passedString.split(" ");
  console.log(wordArray);

  let longestWord = " ";

  //compare size of array elements
  for (word of wordArray) {
    if (word.length > longestWord.length) longestWord = word;
  }

  return longestWord;
}

myStr = "Game of thrones";

const longestString = findLongestWord(myStr);

console.log(longestString);
