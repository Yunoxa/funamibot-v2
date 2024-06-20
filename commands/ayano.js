module.exports = {
  name: "ayano",
  options: {
    description: "I'll post a random image of Ayano",
  },
  generator(interaction) {
    const s3Tools = require("../modules/s3");

    s3Tools.getRandomS3Object("funamibot", "ImagesAyano/").then(
      (value) => {
        interaction.createMessage({
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
