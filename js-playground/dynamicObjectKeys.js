const person = {
  name: 'John',
};
console.log(person.name);
person.age = 35;
console.log(person);

const items = {
  'featured-item': ['item1', 'item2'],
};

console.log(items['featured-item']);
console.log(person['name']);

let appState = 'loading';
let keyName = 'computer';

const app = {
  [appState]: true,
};
//adding new values
app[keyName] = 'apple';

console.log(app);

const state = {
  loading: true,
  name: '',
  job: '',
};

function changeState(key, value) {
  state[key] = value;
}

//changing keys
changeState('name', 'Antony');
changeState('job', 'Developer');
//adding new items
changeState('products', {});

console.log(state);
