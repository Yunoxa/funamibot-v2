const genSentence = require("../../utils/generators/sentence");
const stringArr = require("../../data/sentencerand.json");
const stringArr2 = require("../../data/leg_words.json");
const messageArr = require("../../data/leg_messagesooc.json");

module.exports = (interaction) => {
  if (interaction.data.options) {
    if (interaction.data.options[0].value === "sentencerand") {
      return genSentence.sentencerand(stringArr);
    } else if (interaction.data.options[0].value === "sentencesuperrand") {
      return genSentence.sentencesuperrand(stringArr2, messageArr);
    }
  } else {
    return "Random Image"
  }
}