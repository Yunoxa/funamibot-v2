const Eris = require("eris");
const s3Tools = require("../utils/s3");
const getSentence = require("./randimg/getSentence");
const getOptionValue = require("../utils/eris/getOptionValue");
const postImage = require("./randimg/postImage");
const postMeme = require("./regenText/postMeme");
const undefinedToEmptyString = require("../utils/common/string/undefinedToEmptyString");
const Constants = Eris.Constants;

module.exports = {
  name: "generate",
  description: "I'll post randomised text and images!",
  options: [
    {
      "name": "text-gen",
      "description": "Random sentence generation algorithm to use (if any)",
      "type": Constants.ApplicationCommandOptionTypes.STRING,
      "required": false,
      "choices": [
        {
          "name": "pure-rand",
          "value": "pureRand"
        },
        {
          "name": "pure-rand-word",
          "value": "pureRandWord"
        },
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
    },
    {
      "name": "pre-text",
      "description": "Enter a string of text for Yui to prepend to the text-gen sentence",
      "type": Constants.ApplicationCommandOptionTypes.STRING,
      "required": false
    },
    {
      "name": "post-text",
      "description": "Enter a string of text for Yui to append to the text-gen sentence",
      "type": Constants.ApplicationCommandOptionTypes.STRING,
      "required": false
    },
  ],
  async generator(interaction) {
    if (!interaction.data.options) {
      interaction.createFollowup("You didn't choose any options, please choose at least one.");
      return;
    }

    const textGen = getOptionValue(interaction.data.options, "text-gen");
    const preText = undefinedToEmptyString(getOptionValue(interaction.data.options, "pre-text"));
    const postText = undefinedToEmptyString(getOptionValue(interaction.data.options, "post-text"));
    const imageGen = getOptionValue(interaction.data.options, "image-gen");
    const image = `https://funamibot.s3.eu-central-2.amazonaws.com/${await s3Tools.getRandomS3Object("funamibot", "zother/")}`;

    if (textGen || preText || postText) {
      if (imageGen) {
        postMeme(interaction, image, `${preText} ${undefinedToEmptyString(getSentence(textGen))} ${postText}`);
        return;
      }
      interaction.createFollowup(`${preText} ${undefinedToEmptyString(getSentence(textGen))} ${postText}`);
      return;
    }

    if (imageGen) {
      postImage(interaction, image);
      return;
    }
  }
}
