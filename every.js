//every() tests whether all elements in the array pass the provided test function.

const originalArray = [2, 4, 6, 8, 10];

const allEvenNumbers = originalArray.every((num) => num % 2 == 0)

console.log(allEvenNumbers) //true