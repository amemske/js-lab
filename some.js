// some() whether at least one element in the array passes the provided test function.

const originalArray = [1, 3, 3, 4, 5];
const hasEvenNumber = originalArray.some((num) => num % 2 === 0)

console.log(hasEvenNumber) // Output: true