const Eris = require("eris");
const Constants = Eris.Constants;

module.exports = {
  name: "randimg",
  description: "I'll post a random image!",
  options: [
    {
      "name": "text_gen",
      "description": "Random message generation type to use (if any)",
      "type": Constants.ApplicationCommandOptionTypes.STRING,
      "required": false,
      "choices": [
        {
          "name": "SuperRandom",
          "value": "superRand"
        },
        {
          "name": "KindaRandom",
          "value": "kindaRand"
        }
      ]
    }
  ],
  generator(interaction) {
    const s3Tools = require("../modules/s3");
    s3Tools.getRandomS3Object("funamibot", "zother/").then(
      (value) => {
        interaction.createMessage(
          {
            content: "a",
            embed: {
              image: {
                url: `https://funamibot.s3.eu-central-2.amazonaws.com/${value}`
              }
            }
          }
        );
      }
    );
  }
}
