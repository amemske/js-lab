//create a function that takes a string as an argument and capitalizes it

function capitalize (str) {
    //convert string into array
    let wordArray = str.split(' ')
    console.log(wordArray)
    // Initialize an array to store the capitalized words
    let capitalizedWords = []
   
    //for each array item(index) transform it, make first letter capital
    for (word of wordArray){
        //word.charAt(0) extracts the first character of the word string, which is the character at position 0
      //word.slice(1) -  extract a substring starting from the second character  until the end of the string
       const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
     
        capitalizedWords = [...capitalizedWords, capitalized]
      //capitalizedWords.push(capitalized)

    }
    
    //join the string back
    return capitalizedWords.join(' ')

}

console.log(capitalize('the boy jumped over the lazy dog'))