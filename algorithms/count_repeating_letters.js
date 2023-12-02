//count the number of repetition in a string
//if a string is ffferfftoo the output should be 3f1e1r2f1t20

function countLetters(str){
    //convert string to array
    let stringArray = str.split('')
    //create a new array to store the variables
    let letters = []
    //initialize the count to  keep score
    let count = 1
    //loop through the array using for loop
    for(i=0; i < stringArray.length; i++){
        //if the value of the array item at that index is similar to the next item, 
        if(stringArray[i] === stringArray[i +1]  ){
            //increment the count
            count++

        } else{
             //otherwise, if the letter is not repeated, (e.g.holder = 1e) create a variable that holds the count and the value at that index
             let value = `${count}${stringArray[i]}`
             //add the new variable to the letters array, you can use spread operator or push
             letters = [...letters, value]
               //reset the count to 1 since we are going back to the next letter
            count = 1
        }

    }
    //return the letter array as a string using join
    return letters.join('')
}


const repetitiveString = 'ffff'

console.log(countLetters(repetitiveString)) //3f1e1r2f1t2o