const Eris = require("eris");
const Constants = Eris.Constants;
const getTextOfType = require("./regenText/getTextOfType");
const createMeme = require("../utils/image/createMeme");
const s3Tools = require("../utils/s3");

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
        },
      ]
    },
    {
      "name": "meme",
      "description": "Whether to create a meme style image with the text.",
      "type": Constants.ApplicationCommandOptionTypes.BOOLEAN,
      "required": false,
    }
  ],
  async generator(interaction) {
    if (!interaction.data.options[2]) {
      interaction.createMessage(getTextOfType(interaction.data.options[1].value, interaction.data.options[0].value));
    } else if (interaction.data.options[2].value) {
      const meme = await createMeme(
        `https://funamibot.s3.eu-central-2.amazonaws.com/${await s3Tools.getRandomS3Object("funamibot", "zother/")}`, 
        getTextOfType(interaction.data.options[1].value, interaction.data.options[0].value)
      );
      interaction.createMessage("", {
          name: "meme.png",
          file: meme
        }
      );
    } else {
      interaction.createMessage(getTextOfType(interaction.data.options[1].value, interaction.data.options[0].value));
    }
  }
}