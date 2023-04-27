// console.log(lastName) // undefined -- var is Hoisted
// console.log(username) // Error -- const is not Hoisted

const username = 'jose';

function addOne(number) {
  // This variable is encapsulated due function scope
  var result = number + 1;
  return result;
}

if (username === 'jose') {
  // This variable is not encapsulated ⚠️⚠️⚠️⚠️
  var lastName = 'barbosa';
}
