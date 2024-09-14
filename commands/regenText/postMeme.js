const createMeme = require("../../utils/generators/image/createMeme");

module.exports = async (interaction, url, text) => {
  interaction.createFollowup("", {
      name: "meme.png",
      file: await createMeme(
        url, 
        text
      )
    }
  );
}