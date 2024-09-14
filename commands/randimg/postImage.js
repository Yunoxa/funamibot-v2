const processImage = require("../../utils/generators/image/processImage");

module.exports = async (interaction, url) => {
  interaction.createFollowup("", {
      name: "meme.png",
      file: await processImage(
        url,
      )
    }
  );
}