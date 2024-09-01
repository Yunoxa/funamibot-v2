const Eris = require("eris");
const Constants = Eris.Constants;
const commands = require("../commands");

module.exports = (client, guildID) => {
  client.on("ready", async () => {
    console.log("Client is ready! Loading my commands...");
    for (const command in commands) {
      await client.createGuildCommand(guildID, {
        name: commands[command].name,
        description: commands[command].description,
        type: Constants.ApplicationCommandTypes.CHAT_INPUT,
        options: commands[command].options
      });
      console.log(`Loaded "${command}".`)
    }
    console.log("Commands loaded.");
  });
}
