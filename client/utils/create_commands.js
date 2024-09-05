const createCommands = require("./create/commands");

module.exports = async (commands, client, guildID) => {
  if (guildID) {
    await createCommands.guild(commands, client, guildID);
  } else {
    await createCommands.global(commands, client);
  }
}