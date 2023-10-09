
//for in
//should not be used for arrays

const person = {
    name: 'john',
    age: 25,
    status: 'student'
  }
  
  for (const key in person) {
    console.log(`${key} : ${person[key]}`)
  }
  