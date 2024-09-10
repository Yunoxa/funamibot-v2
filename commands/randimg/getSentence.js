const genSentence = require("../../utils/generators/sentence");
const data = require("../../data");

module.exports = (value) => {
  if (value === "sentencerand") {
    return genSentence.sentencerand(data.sentencerand);
  } else if (value === "sentencesuperrand") {
    return genSentence.sentencesuperrand(data.leg_words, data.leg_messagesooc);
  } else if (value === "pureRand") {
    return data.leg_messagesooc.MessagesOOC[Math.floor(Math.random() * data.leg_messagesooc.MessagesOOC.length)];
  } else if (value === "pureRandWord") {
    return data.leg_words.words[Math.floor(Math.random() * data.leg_words.words.length)];
  }
}