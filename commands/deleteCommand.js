const Eris = require("eris");
const Constants = Eris.Constants;

module.exports = {
  name: "delete-command",
  description: "I'll delete a guild command.",
  options: [
    {
      "name": "command_id",
      "description": "ID of guild command you wish to delete.",
      "type": Constants.ApplicationCommandOptionTypes.STRING,
      "required": true,
    }
  ],
  async generator(interaction, client) {
    await client.deleteGuildCommand(interaction.guildID, interaction.data.options[0].value)
    .then(() => {
      interaction.createFollowup(`Deleted guild command with id ${interaction.data.options[0].value}!`);
      console.log(`Deleted guild command with id ${interaction.data.options[0].value}!`);
    })
    .catch((error) => {
      interaction.createFollowup(`I failed to delete a guild command with the id ${interaction.data.options[0].value}. Are you sure this command exists?`);
      console.error(error);
    });
  }
}