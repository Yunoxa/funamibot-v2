module.exports = {
  name: "kick",
  options: {
    description: "I'll say kick",
  },
  generator(interaction) {
    interaction.createMessage("kick");
  }
}
