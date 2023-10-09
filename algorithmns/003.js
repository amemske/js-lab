//Q3. What is== and === operator? use js to show example
// The comparison == operator compares values for equality,

console.log(5 == "5"); // Output: true
console.log(0 == false); // Output: true
console.log(null == undefined); // Output: true

// The comparison === operator, on the other hand, compares values for strict equality, 
//without performing type coercion. This means that if the operands have different types,
// the comparison will always return false.

console.log(5 === "5"); // Output: false
console.log(0 === false); // Output: false
console.log(null === undefined); // Output: false
