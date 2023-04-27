function addOne(number) {
  return number + 1;
}

// Arrow Function
// implicit return
// not always has a body
// warning as soon as you create a body you need a return
const addTwo = (number) => number + 2;

const myNumber = addOne(2); // 3

const myNumber2 = addTwo(3); // 5

console.log(myNumber);

console.log(myNumber2);
