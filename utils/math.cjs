// Don't create modules like this -- instead of CommonJS use ESM
function divideNumbers(n1, n2) {
  return n1 / n2;
}

module.exports = {
  divideNumbers,
};
