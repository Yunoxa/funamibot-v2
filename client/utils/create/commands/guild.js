const Eris = require("eris");
const Constants = Eris.Constants;

module.exports = async (commands, client, guildID) => {
  guildID.forEach(async (id) => {
    for (const command in commands) {
      await client.createGuildCommand(id, {
        name: commands[command].name,
        description: commands[command].description,
        type: Constants.ApplicationCommandTypes.CHAT_INPUT,
        options: commands[command].options
      });
      console.log(`Loaded guild command "${command}".`);
    }
  })
}
