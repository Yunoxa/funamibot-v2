const Eris = require("eris");
const Constants = Eris.Constants;

module.exports = async (commands, client) => {
  for (const command in commands) {
    await client.createCommand({
      name: commands[command].name,
      description: commands[command].description,
      type: Constants.ApplicationCommandTypes.CHAT_INPUT,
      options: commands[command].options
    });
    console.log(`Loaded global command "${command}".`);
  }
}