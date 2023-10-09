//Map Method
//returns a new array
//does not change the size of the original array(unlike filter)
//uses values from original array to make new ones
//Add Quokka.js for testing

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
    age: 27,
    position: 'business dev',
  },
  {
    name: 'john',
    age: 26,
    position: 'programmer',
  },
];

const ages = people.map((person) => {
  const { age } = person; //person.age
  return age;
});

console.log(ages);

const newPeople = people.map((item) => { 
  //returning a new object
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age * 2,
  };
});

console.log(newPeople);
console.log(people)

//display it in the browser
const mappedNames = people.map((person) => {
  console.log(person.name);
  return `<h2>${person.name}</h2>`;
});

console.log(mappedNames)

const result = document.querySelector('#result');
//the reults has a comma separator, to remove it use join
result.innerHTML = mappedNames.join('');
