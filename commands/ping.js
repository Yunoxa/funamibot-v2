module.exports = {
  name: "ping",
  options: {
    description: "I'll say pong!",
  },
  generator(interaction) {
    interaction.createMessage("pong!");
  }
}
