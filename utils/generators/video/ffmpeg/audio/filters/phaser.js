const randInt = require("../../../../../common/math/randInt");

module.exports = () => {
  return `aphaser=speed=0.9:delay=4:decay=0.${randInt(5, 9)}`;
}