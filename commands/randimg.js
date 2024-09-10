const Eris = require("eris");
const s3Tools = require("../utils/s3");
const getSentence = require("./randimg/getSentence");
const Constants = Eris.Constants;

module.exports = {
  name: "randimg",
  description: "I'll post a random image!",
  options: [
    {
      "name": "text-gen",
      "description": "Random sentence generation algorithm to use (if any)",
      "type": Constants.ApplicationCommandOptionTypes.STRING,
      "required": false,
      "choices": [
        {
          "name": "sentence-rand",
          "value": "sentencerand"
        },
        {
          "name": "sentence-super-rand",
          "value": "sentencesuperrand"
        }
      ]
    }
  ],
  async generator(interaction) {
    const image = await s3Tools.getRandomS3Object("funamibot", "zother/");
    interaction.createMessage(
      {
        embed: {
          title: getSentence(interaction),
          image: {
            url: `https://funamibot.s3.eu-central-2.amazonaws.com/${image}`
          }
        }
      }
    );
  }
}
