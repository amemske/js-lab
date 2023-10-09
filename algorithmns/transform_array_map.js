/*
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
-write a function that takes an integer array
-a mapping function as input, and returns a new array with the transformation applied to each element.


*/

/**
 * @param {number[]} arr //has 1 parameter which is an array of numbers
 * @param {Function} fn //fn The function to map.
 * @return {number[]} //A new array with the function applied to each element
 */
var map = function(arr, fn) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i], i));
    }
    
    return newArr;
};

/*
arr = [1, 2, 3, 4, 5]
arr[i], i means  arr[2], 2 refer to the third element in the array, which is 3


*/

const arr = [1,2,3,4,5];
const fn = (x, i) => x * i; //the fn function can be any function
const newArr1 = map(arr, fn);
console.log(newArr1);

// The design pattern at work in the code you have shown is the Strategy Pattern.
// The Strategy Pattern is a behavioral design pattern that allows you to define a family of algorithms, encapsulate each one, and make them interchangeable. 
// This pattern lets the algorithm vary independently from clients that use it.
// In the code you have shown, the fn() function is the strategy.
// It is a function that takes two arguments: the current element and its index. 
// The map_array() function is the client.
// It uses the fn() function to transform each element in the array.

// The Strategy Pattern is a good choice for this problem because it allows you to decouple the algorithm from the client.
// This makes the code more flexible and easier to maintain.




