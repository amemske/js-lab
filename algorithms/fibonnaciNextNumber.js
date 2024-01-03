
// Write a function 'fib(n)' that takes in a number as an argument.
// The function should return the  n-th number of the Fibonacci sequence.

// The 1st and 2nd number of the sequence is 1.
// To generate the next number of the sequence, we sum the previous two numbers.

//1,1,2,3,5,8

function fib(n){

    // start with an empty array  containing [1,1 ]to store the fib numbers'
    
    const fibArray = [1,1];
    
    //inside the loop add 1 to the 
    // if index is 0 or 1 return 1
    if (n <= 2){
        return 1;
        }
    // using a for loop i = 2; i<=i; i++'
      
    for(let i=2;i<= n; i++){ //create a variable to loop
      // value = (fibArray[index-1]) + (fibArray[index-2])
      const value = fibArray[i-1] + fibArray[i-2];
      //  fibArray[index] = value
      fibArray.push(value);
      
      
    }
    return fibArray[n-1]; //get the correct index of the array
        }
    
    const result = fib(6);
    console.log(result);