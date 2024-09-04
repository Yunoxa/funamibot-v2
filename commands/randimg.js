const Eris = require("eris");
const stringArr = require("../data/sentencerand.json");
const stringArr2 = require("../data/leg_words.json");
const messageArr = require("../data/leg_messagesooc.json");
const s3Tools = require("../utils/s3");
const genSentence = require("../utils/generators/sentence");
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
        },
        {
          "name": "SentenceSuperRand",
          "value": "sentencesuperrand"
        }
      ]
    }
  ],
  async generator(interaction) {
    console.log(interaction.data)
    let title
    if (interaction.data.options) {
      if (interaction.data.options[0].value === "sentencerand") {
        title = genSentence.sentencerand(stringArr);
      } else if (interaction.data.options[0].value === "sentencesuperrand") {
        title = genSentence.sentencesuperrand(stringArr2, messageArr);
      }
    } else {
      title = "Random Image"
    }
    console.log("Random sentence generated: " + title);

    const image = await s3Tools.getRandomS3Object("funamibot", "zother/")
    interaction.createMessage(
      {
        embed: {
          title: title,
          image: {
            url: `https://funamibot.s3.eu-central-2.amazonaws.com/${image}`
          }
        }
      }
    );
  }
}
