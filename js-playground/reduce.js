//Reduce
//iterates, callback function
//reduces to a single value - number, array, object
//1st parameter ('acc') total of the calculations
//2nd parameter ('curr') - current iteration
//always return the first value - accumilator

const staff = [
  { name: 'bob', age: 23, position: 'designer', salary: 100 },
  { name: 'susan', age: 27, position: 'accountant', salary: 200 },
  { name: 'erika', age: 21, position: 'marketer', salary: 150 },
  { name: 'martin', age: 34, position: 'developer', salary: 350 },
];

const dailyTotal = staff.reduce((total, person) => {
  console.log(total);
  console.log(person.salary);
  total += person.salary;

  return total;
}, 0);

console.log(dailyTotal);

//shopping cart - reduce
const cart = [
  {
    title: 'Techno  SP',
    price: 299.9,
    amount: 7,
  },
  {
    title: 'Infinix',
    price: 199.9,
    amount: 5,
  },
  {
    title: 'Apple Phone',
    price: 1399.9,
    amount: 9,
  },
  {
    title: 'Samsung Galaxy S',
    price: 599.9,
    amount: 2,
  },
];

const cartTotal = cart.reduce(
  (myCartTotal, cartItem) => {
    console.log(cartItem);
    //get the amount and proce
    const { amount, price } = cartItem;
    //count the total items
    myCartTotal.totalItems += amount;
    //count sum
    const ItemSum = amount * price;
    myCartTotal.cartTotal += ItemSum;

    return myCartTotal;
  },
  { totalItems: 0, cartTotal: 0 }
);

console.log(cartTotal);

//Get total from a url
const url = 'http://api.github.com/users/john-smilga/repos?per_page=100';
const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.reduce((total, repo) => {
    //repo represents  each item
    //destructure the item you want from the repo
    const { language } = repo;
    if (language) {
      total[language] = total[language] + 1 || 1; //else just return 1
    }
    return total;
  }, {}); //return object
  console.log('new data is ' + newData);
};
