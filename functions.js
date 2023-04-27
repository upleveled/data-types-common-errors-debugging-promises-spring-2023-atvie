function addOne(number) {
  return number + 1;
}

// Arrow Function
// May use implicit return
// Not always define a function body
// ⚠️⚠️⚠️ as soon as you create a function body you need a return
const addTwo = (number) => number + 2;

const myNumber = addOne(2); // 3

const myNumber2 = addTwo(3); // 5

console.log(myNumber);
console.log(myNumber2);
