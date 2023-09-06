//Q4. How would you pick the middle element of a array

const myarray = [2,7,8,9,0];
//get the array length
//get the postion  5/2 = 2 after division, don't add 1 since positions start from zero

const length = myarray.length
const position = Math.floor(length/2);
console.log(myarray[position]);

