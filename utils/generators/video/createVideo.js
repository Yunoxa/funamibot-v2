const ffmpegUtils = require("./ffmpeg");
const { videoDuration } = require("@numairawan/video-duration");

module.exports = async (video, text) => {
  const duration = await videoDuration(video);

  const editedVideo = await ffmpegUtils.edit(video, text, duration.seconds, "960x540");
  console.log("Finished editing video.");

  return editedVideo;
}