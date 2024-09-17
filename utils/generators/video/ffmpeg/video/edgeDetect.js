const randInt = require("../../../../common/math/randInt");
const getRandom = require("../../../../common/array/getRandom");

module.exports = () => {
  return `edgedetect=mode=${getRandom(["colormix", "wires"])}:high=0`;
}