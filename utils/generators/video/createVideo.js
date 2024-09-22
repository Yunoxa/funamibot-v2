const ffmpegUtils = require("./ffmpeg");
const { videoDuration } = require("@numairawan/video-duration");

module.exports = async (video, text) => {
  const duration = await videoDuration(video);
  
  const resizedVideo = await ffmpegUtils.resize(video, "960x540");
  console.log("Video resized.");

  const editedVideo = await ffmpegUtils.edit(resizedVideo, text, duration.seconds);
  console.log("Finished editing video.");

  return editedVideo;
}