module.exports = {
  name: "ayano",
  description: "I'll post a random image of Ayano",
  async generator(interaction) {
    const s3Tools = require("../utils/s3");

    s3Tools.getRandomS3Object("funamibot", "ImagesAyano/").then(
      (value) => {
        interaction.createFollowup({
          embeds: [{
            title: "**Photo of Ayano**",
            image: {
              url: `https://funamibot.s3.eu-central-2.amazonaws.com/${value}`
            }
          }]
        });
      }
    );
  }
}
