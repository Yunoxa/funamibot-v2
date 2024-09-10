const Eris = require("eris");
const Constants = Eris.Constants;
const s3Tools = require("../utils/s3");
const getTextOfType = require("./regenText/getTextOfType");
const getOptionValue = require("../utils/eris/getOptionValue");
const postMeme = require("./regenText/postMeme");
const undefinedToEmptyString = require("../utils/common/string/undefinedToEmptyString");

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
      ]
    },
    {
      "name": "meme",
      "description": "Whether to create a meme style image with the text.",
      "type": Constants.ApplicationCommandOptionTypes.BOOLEAN,
      "required": false,
    },
    {
      "name": "after-text",
      "description": "Adds extra text after generated text.",
      "type": Constants.ApplicationCommandOptionTypes.STRING,
      "required": false,
    }
  ],
  async generator(interaction) {
    const text = getOptionValue(interaction.data.options, "text");
    const algo = getOptionValue(interaction.data.options, "algo");
    const memeValue = getOptionValue(interaction.data.options, "meme");
    const afterText = undefinedToEmptyString(getOptionValue(interaction.data.options, "after-text"));

    if (memeValue) {
      postMeme(
        interaction,
        `https://funamibot.s3.eu-central-2.amazonaws.com/${await s3Tools.getRandomS3Object("funamibot", "zother/")}`,
        `${getTextOfType(algo, text)} ${afterText}`
      );
      return;
    } 
    
    interaction.createFollowup(`${getTextOfType(algo, text)} ${afterText}`);
  }
}