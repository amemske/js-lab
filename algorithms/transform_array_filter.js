// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

/**
 * @param {number[]} arr //array that is passed in
 * @param {Function} fn // the function that is passed in
 * @return {number[]} //a number array is expected
 */
var myfilter = function(arr, fn) {
   // return arr.filter(fn)
   const filteredArr = [];
   for(i=0; i < arr.length; i++){
        if(fn(arr[i])){
            filteredArr.push(arr[i]);
            return filteredArr;
        }
   }
};

const arr = [1, 2, 3, 4, 5];
const fn = function(n, i) {
    return n % 2 === 0;
  };
const newArray = myfilter(arr, fn);

console.log(newArray);