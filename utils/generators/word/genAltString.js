const randInt = require("../../common/math/randInt");
const toTitleCase = require("../../common/string/toTitleCase");
const getStringPair = require("../../common/array/getStringPair");

module.exports = (string, stringArr) => {
  const sliceInt = randInt(1, string.length);
  string = string.toLowerCase();

  const slicedString = string.slice(0, sliceInt);
  const selectedWords = getStringPair(string, slicedString, stringArr);
  const randomWord = selectedWords[Math.floor(Math.random() * selectedWords.length)];

  if (!randomWord) {
    return "I had difficulty generating a username with this input. Some characters here may be invalid due to me recieving an undefined value. Could you please try again? With English characters only if possible and no whitespace.";
  }
  
  return `${toTitleCase(slicedString)}${randomWord}`;
}