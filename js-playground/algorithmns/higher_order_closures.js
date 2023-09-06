//closures


createHelloWorld = function() {
    return function (...args) {
        return "Hello World";
    }();
}

const a = createHelloWorld(); //These are called higher order functions because they can be called twice

console.log(a);

//spread operator

let array1 = [1,2];
let array2 = [3,4];

console.log([...array1,...array2]);


// This is a higher-order function because it returns a function.
function multiplier(factor) {
      // This inner function is a closure because it "closes over" the 'factor' variable.
    return function (number) {
    
      return factor * number;
    };
  }
  
  // Create a multiplier function that multiplies by 2.
  const double = multiplier(2);
  
  // Create a multiplier function that multiplies by 3.
  const triple = multiplier(3);
  
  // Using the closures:
  console.log(double(5)); // Output: 10 (2 * 5)
  console.log(triple(5)); // Output: 15 (3 * 5)

  /*

we are given an integer n and we want to return a counter function the counter function should initially return n and then returns one more every time 
it's called so on the first call it should return n next call it should return n plus one etc etc while there's not much for us to
const counter = createCounter(10)
e.g. counter () = 10 
counter () = 11
counter () = 13
*/

var createCounter = function (n) {
    return function(){
        return n++;
    }

}

const counter = createCounter(11)
console.log(counter());
console.log(counter());
console.log(counter());

class Counter {
    constructor(n){
        this.n=n;
    }
    increment(){ //no need for function keyword in js
        return ++this.n
    }
}

const myCounter = new Counter(110);

console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.increment());
