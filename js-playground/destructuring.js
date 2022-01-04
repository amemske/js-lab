/*

Destructuring is extracting data from objects and arrays and assigning them to
varibles

*/

var students = { student1: 55, student2: 80, student3: 75 };
/* old way 
var student1 = students.student1;
console.log(student1); // student1 = 55
*/

// solution using distructuring
const { student1, student2, student3 } = students;
console.log(student2); // 80

//another destructuring alternative
const { student1: a, student2: b, student3: c } = students;
console.log(c);

//Assign variables from nested objects
const nest = {
  start: { x: 7, y: 9 },
  end: { x: 8, y: 1 },
};
//destructuting nested object
const {
  start: { x: startx, y: starty },
} = nest;

console.log(startx);

//Assign variables from arrays

const [q, r] = [1, 2, 3, 4, 5, 6];
console.log(q, r); //1,2

const [p, , , t] = [1, 2, 3, 4, 5, 6];
console.log(p, t); //1,4

//rest spread operator
const [g, m, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(rest); //1,4

//Pass an object as a function's parameter
const profileUpdate = (profileData) => {
  const { name, age, nationality } = profileData;
};
const profileUser = ({ name, age, nationality }) => {};
