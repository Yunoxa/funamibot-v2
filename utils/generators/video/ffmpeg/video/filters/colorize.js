const randInt = require("../../../../../common/math/randInt");

module.exports = () => {
  return `colorize=hue=${randInt(0, 360)}:saturation=1`;
}