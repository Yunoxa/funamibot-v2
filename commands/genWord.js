const Eris = require("eris");
const Constants = Eris.Constants;
const genAltString = require("../utils/generators/word/genAltString.js");
const stringArr = require("../data/leg_words.json");

module.exports = {
  name: "gen-word",
  description: "I'll generate a new word based on text input.",
  options: [
    {
      "name": "text_gen",
      "description": "Random sentence generation algorithm to use (if any)",
      "type": Constants.ApplicationCommandOptionTypes.STRING,
      "required": true,
    }
  ],
  generator(interaction) {
    interaction.createMessage(genAltString(interaction.data.options[0].value, stringArr.words));
  }
}