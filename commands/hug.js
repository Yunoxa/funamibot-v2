const Eris = require("eris");
const Constants = Eris.Constants;

module.exports = {
  name: "hug",
  description: "Hug another user",
  options: [
    {
      "name": "user",
      "description": "The user you wish to hug",
      "type": Constants.ApplicationCommandOptionTypes.USER,
      "required": true
    }
  ],
  generator(interaction) {
    const user = interaction.data.options[0].value;

    const s3Tools = require("../modules/s3");
    s3Tools.getRandomS3Object("funamibot", "hugGifs/").then(
      (value) => {
        interaction.createMessage({
          embeds: [{
            description: `${interaction.member.mention} hugs <@!${user}>`,
            image: {
              url: `https://funamibot.s3.eu-central-2.amazonaws.com/${value}`
            }
          }]
        });
      }
    );
  }
}
