const Eris = require("eris");
const Constants = Eris.Constants;
const altNewString = require("../utils/generators/word/altNewWord.js");
const appendNewString = require("../utils/generators/sentence/appendNewString.js")
const sentenceArr = require("../data/leg_messagesooc.json");
const wordArr = require("../data/leg_words.json");

module.exports = {
  name: "regen-text",
  description: "I'll generate a new word/sentence based on text input.",
  options: [
    {
      "name": "text",
      "description": "Text to be regenerated.",
      "type": Constants.ApplicationCommandOptionTypes.STRING,
      "required": true,
    },
    {
      "name": "algo",
      "description": "Random sentence generation algorithm to use (if any).",
      "type": Constants.ApplicationCommandOptionTypes.STRING,
      "required": true,
      "choices": [
        {
          "name": "new-word",
          "value": "newWord"
        },
        {
          "name": "new-sentence",
          "value": "newSentence"
        },
        {
          "name": "append-sentence",
          "value": "appendSentence"
        }
      ]
    }
  ],
  generator(interaction) {
    if (interaction.data.options[1].value === "newWord") {
      interaction.createMessage(altNewString(interaction.data.options[0].value, wordArr.words));
    } else if (interaction.data.options[1].value === "newSentence") {
      interaction.createMessage(altNewString(interaction.data.options[0].value, sentenceArr.MessagesOOC));
    } else if (interaction.data.options[1].value === "appendSentence") {
      interaction.createMessage(appendNewString(interaction.data.options[0].value, sentenceArr.MessagesOOC));
    }
  }
}