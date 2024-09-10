const Eris = require("eris");
const s3Tools = require("../utils/s3");
const getSentence = require("./randimg/getSentence");
const getOptionValue = require("../utils/eris/getOptionValue");
const postImage = require("./randimg/postImage");
const Constants = Eris.Constants;

module.exports = {
  name: "randimg",
  description: "I'll post randomised text and images!",
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
    },
    {
      "name": "image-gen",
      "description": "Whether to generate a random image",
      "type": Constants.ApplicationCommandOptionTypes.BOOLEAN,
      "required": false
    }
  ],
  async generator(interaction) {
    const textGen = getOptionValue(interaction.data.options, "text-gen");
    const imageGen = getOptionValue(interaction.data.options, "image-gen");
    const image = `https://funamibot.s3.eu-central-2.amazonaws.com/${await s3Tools.getRandomS3Object("funamibot", "zother/")}`;

    if (imageGen) {
      postImage(interaction, image);
      return;
    }

    if (textGen) {
      interaction.createFollowup(getSentence(textGen));
      return;
    }

    interaction.createFollowup("You didn't choose any options, please choose at least one.");
  }
}
