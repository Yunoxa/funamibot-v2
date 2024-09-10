const altNewString = require("../../utils/generators/word/altNewWord.js");
const appendNewString = require("../../utils/generators/sentence/appendNewString.js")
const sentenceArr = require("../../data/leg_messagesooc.json");
const wordArr = require("../../data/leg_words.json");

module.exports = (checkValue, textValue) => {
  if (checkValue === "newWord") {
    return altNewString(textValue, wordArr.words);
  } else if (checkValue === "newSentence") {
    return altNewString(textValue, sentenceArr.MessagesOOC);
  }
}