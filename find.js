//find() //first element in an array that satisfies a provided testing function

const originalArray = [1, 2, 3, 4, 5];

const foundElement = originalArray.find((num) => num > 2)

console.log(foundElement) // 3