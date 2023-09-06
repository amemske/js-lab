const fruits = ['orange', 'bananas', 'lemon'];
const friends = ['john', 'peter', 'lucy', 'Jacob'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1);

//skipping an array value using commas
const [john, , lucy] = friends;

console.log(john, lucy);

//Alternating the values of the arrays
let first = 'john';
let second = 'Kamau';

[second, first] = [first, second]

console.log(first, second);
