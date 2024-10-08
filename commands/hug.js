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
  async generator(interaction) {
    const user = interaction.data.options[0].value;

    const s3Tools = require("../utils/s3");
    const randObj = await s3Tools.getRandomS3Object("funamibot", "hugGifs/");
    console.log(randObj);
    interaction.createFollowup({
      content: `${interaction.member.mention} hugs <@!${user}>`,
      embeds: [{
        image: {
          url: `https://funamibot.s3.eu-central-2.amazonaws.com/${randObj}`
        }
      }]
    });
  }
}
