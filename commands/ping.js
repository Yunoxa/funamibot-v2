module.exports = {
  name: "ping",
  description: "I'll say pong!",
  async generator(interaction) {
    interaction.createFollowup("pong!");
  }
}
