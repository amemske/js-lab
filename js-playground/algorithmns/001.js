// Given a number n where n+1 and n-1 are prime, prove n is divisible by 6

// Algorithm:
//prime number 1, 3,5,7,9

// Check if n+1 and n-1 are both prime numbers.
// If both n+1 and n-1 are prime, check if n is divisible by 6.
// If n is divisible by 6, return true.
// If n is not divisible by 6, return false.


  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num === 2){
      return true;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function isDivisibleBy6(n) {
    if (isPrime(n+1) && isPrime(n-1)) {
      return n % 6 === 0;
    }
    return false;
  }
  
  
  // Example usage:
  console.log(isDivisibleBy6(7)); // Output: true
  console.log(isDivisibleBy6(11)); // Output: false