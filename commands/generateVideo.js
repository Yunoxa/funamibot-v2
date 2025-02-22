const createVideo = require("../utils/generators/video/createVideo");
const undefinedToEmptyString = require("../utils/common/string/undefinedToEmptyString");
const getOptionValue = require("../utils/eris/getOptionValue");
const getLatestVideo = require("../utils/eris/getLatestVideo");
const getRandomVideo = require("../utils/eris/getRandomVideo");
const getChannelMessages = require("../utils/eris/getChannelMessages");
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
    },
    {
      "name": "url",
      "description": "Direct URL of the video stream.",
      "type": Constants.ApplicationCommandOptionTypes.STRING
    },
    {
      "name": "randomisation",
      "description": "Whether to enable video/attachment randomised selection.",
      "type": Constants.ApplicationCommandOptionTypes.BOOLEAN
    }
  ],
  async generator(interaction, client) {
    const { getStreamAsBuffer } = await import("get-stream");

    if(!interaction.data.options) {
      const channelMessages = await interaction.channel.getMessages({
        before: interaction.channel.lastMessageID,
        limit: 100
      });
      const latestVideo = getLatestVideo(channelMessages);
      const videoStream = await createVideo(latestVideo, "");

      const video = await getStreamAsBuffer(videoStream);

      interaction.createFollowup("", {name: "video.mp4", file: video});
      return;
    }

    const textGen = getOptionValue(interaction.data.options, "text-gen");
    const preText = undefinedToEmptyString(getOptionValue(interaction.data.options, "pre-text"));
    const postText = undefinedToEmptyString(getOptionValue(interaction.data.options, "post-text"));

    if(getOptionValue(interaction.data.options, "url")) {
      const selectedVideo = {
        url: getOptionValue(interaction.data.options, "url")
      }
      const videoStream = await createVideo(selectedVideo, `${preText} ${undefinedToEmptyString(getSentence(textGen))} ${postText}`);
      const video = await getStreamAsBuffer(videoStream);
      interaction.createFollowup("", {name: "video.mp4", file: video});
      return;
    }

    if(getOptionValue(interaction.data.options, "randomisation") === true) {
      const channelMessages = await interaction.channel.getMessages({
        before: interaction.channel.lastMessageID,
        limit: 100
      });
      const randomVideo = getRandomVideo(channelMessages);

      if(randomVideo.length === 0) {
        interaction.createFollowup("Hey, there's no recent enough valid video's in this channel...");
        return;
      }
      console.log(randomVideo);
      const videoStream = await createVideo(randomVideo, `${preText} ${undefinedToEmptyString(getSentence(textGen))} ${postText}`);

      const video = await getStreamAsBuffer(videoStream);

      interaction.createFollowup("", {name: "video.mp4", file: video});
      return;
    }

    const channelMessages = await interaction.channel.getMessages({
      before: interaction.channel.lastMessageID,
      limit: 100
    });
    const latestVideo = getLatestVideo(channelMessages);

    if(!latestVideo) {
      interaction.createFollowup("Hey, I couldn't find any recently posted video in this channel, please post one first.")
      return;
    }

    const videoStream = await createVideo(latestVideo, `${preText} ${getSentence(textGen).toString()} ${postText}`);
    const video = await getStreamAsBuffer(videoStream);
    interaction.createFollowup("", {
      name: latestVideo.filename,
      file: video
    });
    return;
  }
}
