const randInt = require("../../../../../common/math/randInt");

module.exports = (duration) => {
  console.log(duration)
  return `aloop=loop=${randInt(5, 70)}:size=${randInt(1000, 4000)}:start=-1:time=${randInt(1, duration)}`;
}