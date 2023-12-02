class Calculator {
  constructor() {
    this.result = 0;
  }

  // Addition method
  add(number) {
    this.result += number;
    return this;
  }

  // Subtraction method
  subtract(number) {
    this.result -= number;
    return this;
  }

  // Multiplication method
  multiply(number) {
    this.result *= number;
    return this;
  }

  // Division method
  divide(number) {
    if (number === 0) {
      return "Cannot divide by zero";
    }
    this.result /= number;
    return this;
  }

  // Clear the result
  clear() {
    this.result = 0;
    return this;
  }

  // Get the current result
  getResult() {
    return this.result;
  }
}

// Create an instance of the Calculator class
const myCalculator = new Calculator();

// Perform calculations
const result = myCalculator
  .add(10)
  .multiply(2)
  .subtract(5)
  .divide(3)
  .getResult();

console.log("Result: " + result); // Output: Result: 5
