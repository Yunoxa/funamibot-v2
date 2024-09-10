const genSentence = require("../../utils/generators/sentence");
const data = require("../../data");

module.exports = (value) => {
  if (value === "sentencerand") {
    return genSentence.sentencerand(data.sentencerand);
  } else if (value === "sentencesuperrand") {
    return genSentence.sentencesuperrand(data.leg_words.words, data.leg_messagesooc.MessagesOOC);
  }
}