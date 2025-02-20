module.exports = (attachments) => {
  if(attachments.length > 0) {
    for(let i = 0; i < attachments.length; i++) {
      if(attachments[i].content_type.startsWith("video") && attachments[i].size >= 1000 && attachments[i].content_type !== "video/quicktime") {
        return attachments[i];
      }
    }
  }
}
