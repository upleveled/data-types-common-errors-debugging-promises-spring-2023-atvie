// Promises Example
fetch('https://example.com')
  .then((response) => response.text())
  .then((data) => {
    console.log(`From promise: ${data}`);
  })
  .catch((error) => console.log(error));

// Async Await Example
const response = await fetch('https://example.com');
const data = await response.text();

console.log(`From await: ${data}`);
