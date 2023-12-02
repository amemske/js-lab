//Write a function to calculate the factorial of a non-negative integer.

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
  