//Filter - returns a new array, can manipulate the size of new array (unlike map),
//Filter - returns based on a condition
//Find - returns single instance of (object or string etc), returns first match, if no match - undefined
//Find - is commonly used with API id's to find a unique id


//Both find and filter are array methods in JavaScript that allow you to search and retrieve elements from an array based on certain criteria.
//The main difference between these methods is that find returns the first element in the array that satisfies a given condition, while filter returns an array of all the elements that satisfy the condition.

const numbers = [1, 2, 3, 4, 5, 6];

// find the first even number in the array
const firstEvenNumber = numbers.find(num => num % 2 === 0);
console.log(firstEvenNumber); // output: 2

// filter even numbers from the array
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // output: [2, 4, 6]

const fruits = ['orange', 'pear', 'lemon'];

const people = [
  {
    name: 'bob',
    age: 40,
    position: 'director',
  },
  {
    name: 'anna',
    age: 25,
    position: 'digital marketer',
  },
  {
    name: 'mary',
    age: 32,
    position: 'business dev',
  },
  {
    name: 'john',
    age: 26,
    position: 'programmer',
  },
];

//filter
const youngPeople = people.filter((person) => {
  //   if(person.age < 30) {
  //   return person
  //   }
  return person.age < 30;
});

console.log(youngPeople);

const developers = people.filter((person) => {
  return person.position === 'programmer';
});

console.log(developers);
//filter - no match
const ceo = people.filter((person) => {
  return person.position === 'ceo';
});
console.log(ceo);

//find
const mary = people.find((person) => {
  return person.name === 'mary';
});
console.log(mary);

const fruit = fruits.find((fruit) => {
  return fruit === 'lemon';
});
console.log(fruit);
//no match
const oldPerson = people.find((person) => {
  return person.age > 45;
});
console.log(oldPerson);
//mutiple matches - first match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

//using filter to get a single instance similar to find
const juniorDev = people.filter((person) => person.name === 'john');
console.log(juniorDev[0]); //convert to object
console.log(juniorDev[0].age);
