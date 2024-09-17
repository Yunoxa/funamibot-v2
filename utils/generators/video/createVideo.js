const ffmpegUtils = require("./ffmpeg");
const { videoDuration } = require("@numairawan/video-duration");

module.exports = async (video, text) => {
  const duration = await videoDuration(video);
  
  const resizedVideo = await ffmpegUtils.resize(video, "960x540");
  console.log("Video resized.");

  const audioVideo = await ffmpegUtils.addAudio(resizedVideo, duration.seconds);
  console.log("Finished adding audio.");

  const editedVideo = await ffmpegUtils.edit(audioVideo, text, duration.seconds);
  console.log("Finished editing video.");

  return editedVideo;
}