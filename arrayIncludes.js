//Array includes

const groceries = ['milk', 'groceries', 'bread', 'fish']

//check if an item exists in an array
let item  = groceries.includes('bread')
console.log(item) // true

//use it as a condition
if(groceries.includes('fish')) {
  console.log(`Proteins are healthy`)
  //other logic
}

