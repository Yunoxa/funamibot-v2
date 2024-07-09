const Eris = require("eris");
const Constants = Eris.Constants;

module.exports = {
  name: "randimg",
  description: "I'll post a random image!",
  options: [
    {
      "name": "text_gen",
      "description": "Random sentence generation algorithm to use (if any)",
      "type": Constants.ApplicationCommandOptionTypes.STRING,
      "required": false,
      "choices": [
        {
          "name": "SentenceRand",
          "value": "sentencerand"
        }
      ]
    }
  ],
  async generator(interaction) {
    const s3Tools = require("../modules/s3");
    const generatorCheck = require("../modules/gencheck");

    const title = await generatorCheck.checkGeneratorType(interaction);
    console.log("Random sentence generated: " + title);

    await s3Tools.getRandomS3Object("funamibot", "zother/").then(
      (value) => {
        interaction.createMessage(
          {
            embed: {
              title: title,
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
