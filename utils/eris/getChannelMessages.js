module.exports = async (message, client) => {
  const channel = client.getChannel(message.channel.id);
  return channelMessages = await channel.getMessages({
    before: message.id,
    limit: 100
  });
}
