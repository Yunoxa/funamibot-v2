const getMessageFirstVideoAttachment = require("./getMessageFirstVideoAttachment");
module.exports = (messages) => {
  const videos = [];
  messages.forEach((message) => {
    const firstAttachment = getMessageFirstVideoAttachment(message.attachments);
    if (firstAttachment) {
      videos.push(firstAttachment);
    }
  });
  return videos[Math.floor(Math.random()*videos.length)];
}
