const fs = require("fs");
const Eris = require("eris");
const Constants = Eris.Constants;

async function checkGeneratorType(interaction) {
  const generatorFiles = fs.readdirSync("./modules/sentence_generation").filter(file => file.endsWith(".js"));

  if(interaction.data.options) {
    for(const file of generatorFiles) {
      const generator = require(`./sentence_generation/${file}`);

      if(generator.name === interaction.data.options[0].value) {
        const sentence = await generator.getRandomSentence(interaction);
        return sentence;
      }
    }
  } else {
    return "";
  }

}

module.exports = { checkGeneratorType }
