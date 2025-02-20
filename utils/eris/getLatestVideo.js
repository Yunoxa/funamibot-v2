const getMessageFirstVideoAttachment = require("./getMessageFirstVideoAttachment");
module.exports = (messages) => {
  for(let i = 0; i < messages.length; i++) {
    const firstAttachment = getMessageFirstVideoAttachment(messages[i].attachments);
    if (firstAttachment) {
        return firstAttachment;
    }
  }
}
