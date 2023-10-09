const boys = ['Antony', 'Paul', 'Peter'];
const girls = ['Ann', 'Joan', 'Miriam'];
const bestFriend = 'Anorld'

const friends = [...boys, bestFriend, ...girls]

console.log(friends)

//creating a reference
const newFriends = [...friends]
newFriends[0] = 'Dennis'

console.log(newFriends)
console.log(friends)

//with objects

const student = {name: 'john', class: '7b' }
const newStudent = {...student, county: 'kiambu'}

console.log(newStudent);
console.log(student);





