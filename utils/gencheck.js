const fs = require("fs");
const Eris = require("eris");
const Constants = Eris.Constants;
const generators = require("./sentence_generation")
async function checkGeneratorType(interaction) {
  if(interaction.data.options) {
    for(const generator in generators) {
      if(generators[generator].name === interaction.data.options[0].value) {
        return await generators[generator].getRandomSentence(interaction);
      }
    }
  }
}

module.exports = { checkGeneratorType }
