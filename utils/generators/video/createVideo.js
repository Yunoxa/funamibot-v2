const ffmpegUtils = require("./ffmpeg");
const randInt = require("../../common/math/randInt");
const { videoDuration } = require("@numairawan/video-duration");

module.exports = async (video, text) => {
  const resizedVideo = await ffmpegUtils.resize(video, "960x540");
  console.log("Video resized.");

  const duration = await videoDuration(video);
  console.log(duration)

  const editedVideo = await ffmpegUtils.edit(resizedVideo, text, duration.seconds);
  console.log("Finished editing video.");

  return editedVideo;
}