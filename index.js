// import addOne, { addNumbers, multiplyNumbers } from './utils/math.js'; // default import + named import
import { divideNumbers } from './utils/math.cjs'; // named import
import addOne from './utils/math.js'; // default import

const user = {};

user.name = 'Lukas';
user.lastName = 'Prochazka';
user.age = 35;

const admin = {
  name: 'Karl',
  lastName: 'Horky',
};

// Multiline String using template strings
console.log(`
${user.name} ${user.lastName} is ${user.age} years old
and
${admin.name} ${admin.lastName} is an admin.
`);

const letters = ['a', 'b', 'c'];

console.log('letters before the push()', letters);

letters.push('d');

console.log('letters after the push()', letters, '\n');

// Primitives are compared by Value
// All the other structures are compared by reference

// create variable username with the object reference -- username = reference of the object in memory
const username = [];

// create variable username2 with the object reference -- username2 = reference of the object in memory
const username2 = [];

// create variable age1 with primitive value -- age1 = 12
const age1 = 12;

// create variable age2 with primitive value -- age2 = 12
const age2 = 12;

// [] === [] -- false
console.log('[] === [] is always', username === username2);

//  12 === 12 -- true
console.log('12 === 12 is always', age1 === age2, '\n');

// String Concatenation
console.log(1, '+', 1, '=', addOne(1));
// Template String
console.log(`1 / 3 = ${divideNumbers(1, 3)}`);
