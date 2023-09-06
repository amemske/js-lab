//unique values

const menu = [
  {
    name: 'pancake',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'rice,beans',
    category: 'lunch',
  },
  {
    name: 'juice',
    category: 'lunch',
  },
  {
    name: 'tea and cakes',
    category: 'dinner',
  },
  {
    name: 'soda',
    category: 'dinner',
  },
  {
    name: 'male',
    category: 'supper',
  },
  {
    name: 'ugali and kales',
    category: 'supper',
  },
];

//get unique categories
//1. get all categories using map
//2. narrow dwon using new set
//3. Add All button by turning it back into an array
const categories = [
  'All',
  ...new Set( //the spread operator makes sure only the elements of the array are added and not the entire array
    menu.map((item) => {
      const { category } = item;
      return category;
    })
  ),
];

console.log(categories);
//4. display all the categories inside a div with class name 'result'
const result = document.querySelector('.result');
result.innerHTML = category
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join(); //turn the array into a string using join()
