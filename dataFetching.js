// fetch('https://example.com')
//   .then((response) => response.text())
//   .then((data) => {console.log(data)});

const response = await fetch('https://example.com');
const data = await response.text();

console.log(data);
console.log('keep working');
