const createCommands = require("./command_creators");

module.exports = async (commands, client, guildID) => {
  if (guildID) {
    await createCommands.guild(commands, client, guildID);
  } else {
    await createCommands.global(commands, client);
  }
}