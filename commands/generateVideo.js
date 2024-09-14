const createVideo = require("../utils/generators/video/createVideo");
const streamToBuffer = require("../utils/common/stream/streamToBuffer");
const undefinedToEmptyString = require("../utils/common/string/undefinedToEmptyString");
const getOptionValue = require("../utils/eris/getOptionValue");
const s3Tools = require("../utils/s3");
const getSentence = require("./randimg/getSentence");
const { videoDuration } = require("@numairawan/video-duration");
const Eris = require("eris");
const Constants = Eris.Constants;

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
    let videoLink
    
    if (!interaction.data.options) {
      const videoLink = `https://funamibot.s3.eu-central-2.amazonaws.com/${await s3Tools.getRandomS3Object("funamibot", "videos/")}`;
      const video = await createVideo(videoLink, "");
      const videoBuffer = await streamToBuffer(video);

      interaction.createFollowup("", {name: "video.mp4", file: videoBuffer});
      return;
    }
    console.log(interaction.data.options)
    const userVideo = getOptionValue(interaction.data.options, "video");
    const textGen = getOptionValue(interaction.data.options, "text-gen");
    const preText = undefinedToEmptyString(getOptionValue(interaction.data.options, "pre-text"));
    const postText = undefinedToEmptyString(getOptionValue(interaction.data.options, "post-text"));

    if (textGen || preText || postText) {
      const videoLink = `https://funamibot.s3.eu-central-2.amazonaws.com/${await s3Tools.getRandomS3Object("funamibot", "videos/")}`;
      const video = await createVideo(videoLink, `${preText} ${undefinedToEmptyString(getSentence(textGen))} ${postText}`);
      const videoBuffer = await streamToBuffer(video);

      interaction.createFollowup("", {name: "video.mp4", file: videoBuffer});
      return;
    }
  }
}