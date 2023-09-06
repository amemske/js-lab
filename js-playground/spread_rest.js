const numbers1 = [1,3,9];
const number2 = ['a','b', ...numbers1]; //spread means only add the values not the entire array

console.log(number2);

//spread - pass elements of an array as arguments to a function
function multiplyNumbers(x,y,z){
    console.log(x+y+z);
}
const args = [0,1,7,3]; //8
multiplyNumbers(...args);


//copy arrays
const arr = [1,2,3]; //these 2 arrays are not similar arr2 is a copy of arr
const arr2 = [...arr];
arr2.push(4)

console.log(arr); //[1, 2, 3]
console.log(arr2) //[1, 2, 3, 4]

//concatenate arrays
const arr3 = [0,1,2];
const arr4 = [3,4,5];
const mainArr = [...arr3, "Apples", ...arr4]

console.log(mainArr); //[0, 1, 2, "Apples", 3, 4, 5]

//rest operator is the oppositie of spread
//rest condenses into a single array element
function multiply(multiplier, ...theArgs){
    return theArgs.map((item)=>{
        return multiplier * item // item will be the rest of the  numbers in the array
    })
}

const someNumbers = multiply(3, 4, 9, 7);
console.log(someNumbers); //[12, 27, 21]