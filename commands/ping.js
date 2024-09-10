module.exports = {
  name: "ping",
  description: "I'll say pong!",
  generator(interaction) {
    interaction.createFollowup("pong!");
  }
}
