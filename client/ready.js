const commands = require("../commands");
const createCommands = require("./utils/createCommands");

module.exports = (client, guildID) => {
  client.on("ready", async () => {
    console.log("Client is ready! Loading my commands...");
    await createCommands(commands, client, guildID);
    console.log("Commands loaded.");
  });
}
