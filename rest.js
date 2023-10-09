//Rest operator
//gathers/collects items
//destructuring, functions
//rest is used when declaring functions, spread when invoking functions

//array
const fruits = ['apples', 'oranges', 'lemon', 'banana'];
const [first, ...rest] = fruits;
console.log(first, rest);

//object
const person = 
{
      name: 'bob',
      age: 40,
      position: 'director',
    };

const { name } = person;
console.log(name);