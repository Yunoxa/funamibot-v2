module.exports = {
  name: "kick",
  description: "I'll say kick",
  generator(interaction) {
    interaction.createFollowup("kick");
  }
}
