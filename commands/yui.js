module.exports = {
  name: "yui",
  description: "I'll post a random image of me",
  generator(interaction) {
    const s3Tools = require("../modules/s3");

    s3Tools.getRandomS3Object("funamibot", "ImagesYui/").then(
      (value) => {
        interaction.createMessage({
          embeds: [{
            title: "**Photo of me**",
            image: {
              url: `https://funamibot.s3.eu-central-2.amazonaws.com/${value}`
            }
          }]
        });
      }
    );
  }
}
