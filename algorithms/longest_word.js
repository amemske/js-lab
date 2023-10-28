//create a function that takes in a string and finds the longest word in the string

function findLongestWord(passedString){
    //slice string at empty spaces
    wordArray = passedString.split(" ")
    console.log(wordArray)

    let longestWord = ' '

    //compare size of array elements 
    for(let i=0; i<wordArray.length; i++){
        
        const currentWord = wordArray[i]

        if(currentWord.length > longestWord.length){
           longestWord = currentWord
        }

    }

    return longestWord
}

myStr = 'Game of thrones'

const longestString = findLongestWord(myStr)

console.log(longestString)