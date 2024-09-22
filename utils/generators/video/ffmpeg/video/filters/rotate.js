const randInt = require("../../../../../common/math/randInt");

module.exports = () => {
  return `rotate=${randInt(1, 3)}*PI*t:ow='min(iw,ih)/sqrt(1)':oh=ow:c=none`
}