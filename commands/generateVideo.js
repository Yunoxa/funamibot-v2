const createVideo = require("../utils/generators/video/createVideo");
const undefinedToEmptyString = require("../utils/common/string/undefinedToEmptyString");
const getOptionValue = require("../utils/eris/getOptionValue");
const s3Tools = require("../utils/s3");
const getSentence = require("./randimg/getSentence");
const Eris = require("eris");
const Constants = Eris.Constants;
const fs = require('fs');

module.exports = {
  name: "generate-video",
  description: "I'll create a randomly generated video.",
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
    }
  ],
  async generator(interaction) {
    const { getStreamAsBuffer } = await import("get-stream");
    const videoLink = "https://funamibot.s3.eu-central-2.amazonaws.com/";

    if (!interaction.data.options) {
      const getVideo = await s3Tools.getRandomS3Object("funamibot", "videos/");
      const videoStream = await createVideo(`${videoLink}${getVideo}`, "");

      const video = await getStreamAsBuffer(videoStream);
      console.log(video)

      interaction.createFollowup("", {name: "video.mp4", file: video});
      return;
    }

    const textGen = getOptionValue(interaction.data.options, "text-gen");
    const preText = undefinedToEmptyString(getOptionValue(interaction.data.options, "pre-text"));
    const postText = undefinedToEmptyString(getOptionValue(interaction.data.options, "post-text"));
    const getVideo = await s3Tools.getRandomS3Object("funamibot", "videos/");
    const videoStream = await createVideo(`${videoLink}${getVideo}`, `${preText} ${undefinedToEmptyString(getSentence(textGen))} ${postText}`);

    const video = await getStreamAsBuffer(videoStream);

    interaction.createFollowup("", {name: "video.mp4", file: video});
    return;
  }
}