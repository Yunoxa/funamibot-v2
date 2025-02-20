const Eris = require("eris");
const commands = require("../commands")

module.exports = (client) => {
  client.on("interactionCreate", async (interaction) => {
    if (interaction instanceof Eris.CommandInteraction) {
      for (const command in commands) {
        if (interaction.data.name == commands[command].name) {
          await interaction.defer();
          console.log(`Executing ${interaction.data.name}...`);
          await commands[command].generator(interaction, client)
                                 .catch((err) => {
                                   interaction.createFollowup("Error: " + err);
                                   console.log(err);
                                 });
          console.log(`I've finished executing ${interaction.data.name}!`);
        }
      }
    }
  });
}
