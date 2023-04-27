console.log(lastName); // undefined -- var is Hoisted - 😈 BAD
// console.log(username) // Error -- const is not Hoisted - 😇 GOOD

const username = 'jose';

function addOne(number) {
  // This variable is encapsulated in function scope
  var result = number + 1;
  return result;
}

if (username === 'jose') {
  // This variable is encapsulated in block scope - 😇 GOOD
  const secondName = 'fernando';

  // This variable is not encapsulated ⚠️⚠️⚠️⚠️ - 😈 BAD
  var lastName = 'barbosa';
}
