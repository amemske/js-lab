const products = [
    { title: 'Modern Poster'},
    { title: 'Coast Buses'},
    { title: 'Many People'},
    { title: 'Ripped Chest'},
  ];
  
// Text coming from a search box, convert it into lowercase
const text = 'c';
const textlower = text.toLowerCase();
  
// Filter the products and return only values with the letter 'c' (case-insensitive)
const results = products.filter((product) => {
    return product.title.toLowerCase().includes(textlower);
  });
  
// Show results
console.log(results);
  