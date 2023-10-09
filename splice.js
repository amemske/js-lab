//splice - modifies the original array.
//used to add or remove elements from an array at a specified index
const originalArray = [1, 2, 3, 4, 5];

//start at index 2 and change 1 item
const removedElements = originalArray.splice(2, 1, 'a'); 

console.log(originalArray);
console.log(removedElements);
