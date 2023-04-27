// don't create modules like this this is common JS use ESM
function divideNumbers(n1, n2) {
  return n1 / n2;
}

module.exports = {
  divideNumbers,
};
