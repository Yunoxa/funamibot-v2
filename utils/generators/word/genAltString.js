const randInt = require("../../common/math/randInt");
const toTitleCase = require("../../common/string/toTitleCase");
const getStringPair = require("../../common/array/getStringPair");

module.exports = (string, stringArr) => {
  const sliceInt = randInt(1, string.length);
  string = string.toLowerCase();
  const slicedString = string.slice(0, sliceInt);

  const selectedWords = getStringPair(string, slicedString, stringArr);

  const randomWord = selectedWords[Math.floor(Math.random() * selectedWords.length)];

  return `${toTitleCase(slicedString)}${randomWord}`;
}