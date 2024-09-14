const randInt = require("./randInt");

module.exports = (number) => {
  const randValue = randInt(0, number);
  if (randValue === 0) {
    return true;
  }
  return false;
}