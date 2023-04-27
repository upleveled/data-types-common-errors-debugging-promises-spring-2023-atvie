// import { addNumbers, multiplyNumbers } from './utils/math.js'; // named import

// import { divideNumbers } from './utils/math.cjs';

// import addOne from './utils/math.js'; // default import

// import addOne, { addNumbers, multiplyNumbers } from './utils/math.js'; // default import + named import

const user = {};

user.name = 'Lukas';
user.lastName = 'Prochazka';
user.age = 35;

const admin = {
  name: 'Karl',
  lastName: 'Horky',
};

const letters = ['a', 'b', 'c'];

letters.push('d');

// Primitives are compared by Value
// All the other structures are compared by reference

const username = [];
// create a id for the object username = reference of the object in memory
const username2 = [];
// create a id for the object username2 = reference of the object in memory

const age1 = 12;
// create a id for the object age1 = 12
const age2 = 12;
// create a id for the object age2 = 12

console.log(username === username2); // false
console.log(age1 === age2); // true

// console.log(addOne(1));
console.log(divideNumbers(1, 3));
