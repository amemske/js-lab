
const udemy = 'udemy'

console.log(Array.from(udemy))
//create a new array with this length length: 120
const items = Array.from({length: 120}, (_, index) =>{
  return index
})

//create an array from the original array that contains 14 items
const itemsPerPage = 14
const pages = Math.ceil(items.length / itemsPerPage) //get total pages
 //create a new array with this length length:pages
//_, means unused variables
const newItems = Array.from({length:pages}, (_, index) =>{ 
  //calculating the starting index for the items that should appear on the current page of th pagination 
  const itemStart = index * itemsPerPage;
  
  const tempItems = items.slice(itemStart, itemStart + itemsPerPage)
  return tempItems
})



console.log(items)
console.log(pages)

console.log(newItems)