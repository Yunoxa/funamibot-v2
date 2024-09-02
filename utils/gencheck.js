const generators = require("./generators/sentence")

async function checkGeneratorType(interaction) {
  if(interaction.data.options) {
    for(const generator in generators) {
      console.log(generators[generator](interaction))
      if(generator === interaction.data.options[0].value) {
        return await generators[generator](interaction);
      }
    }
  }
}

module.exports = { checkGeneratorType }
