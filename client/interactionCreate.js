const Eris = require("eris");
const commands = require("../commands")

module.exports = (client) => {
  client.on("interactionCreate", async (interaction) => {
    if (interaction instanceof Eris.CommandInteraction) {
      for (const command in commands) {
        if (interaction.data.name == commands[command].name) {
          console.log(`Executing ${interaction.data.name}...`);
          await commands[command].generator(interaction, client);
          console.log(`I've finished executing ${interaction.data.name}!`);
        }
      }
    }
  });
}
