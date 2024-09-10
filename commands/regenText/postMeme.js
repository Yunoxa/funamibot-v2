const createMeme = require("../../utils/image/createMeme");

module.exports = async (interaction, url, text) => {
  await interaction.defer();
  interaction.createFollowup("", {
      name: "meme.png",
      file: await createMeme(
        url, 
        text
      )
    }
  );
}