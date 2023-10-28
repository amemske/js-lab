//creates a Date object representing the current date/time
console.log(new Date()) //2023-10-27T06:44:46.768Z


//returns the number of milliseconds since midnight 01 January, 1970 UTC
console.log(Date.now()) //1698389096100

console.log(new Date().getTime()) //1698389096100

console.log(new Date().valueOf()) //1698389096100

setTimeout(() =>{
  console.log(Date.now()) //1698389119673
},1000)

//create id's using date/time
let people = [];
people = [...people, {id: Date.now(), name: 'john'}] //[ { id: 1698389130218, name: 'john' } ]

setTimeout(()=>{
  people = [...people, {id:Date.now(), name: 'peter'}]
  console.log(people)
}, 1000)
/*[
  { id: 1698389139339, name: 'john' },
  { id: 1698389140352, name: 'peter' }
]*/


//create new dates for cookies
const oneDay = 1000 * 60 * 60 * 24
const futureDate  = new Date(Date.now() + oneDay)
console.log("The future date is " + futureDate )
//'The future date is Sat Oct 28 2023 09:44:38 GMT+0300 (East Africa Time)'


//get difference between dates by converting them into milliseconds first - countdown timer
const firstDate = new Date()
const secondDate = new Date(2024, 8, 28)

const firstValue = firstDate.getTime()
const secondValue = secondDate.getTime()

console.log(firstValue) //  1698389525141
console.log(secondValue) //1727470800000

const timeDifference  = secondValue - firstValue
console.log(timeDifference) //29081301015 in milliseconds
const hours = timeDifference / (1000*60*60)
console.log(hours) //8078.149587222222



