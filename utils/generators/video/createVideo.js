const ffmpegUtils = require("./ffmpeg");
const getDuration = require("./ffprobe/getDuration");
const ffmpeg = require("fluent-ffmpeg");

module.exports = async (video, text) => {
  const metadata = await getDuration(video.url);
  const duration = metadata.streams[0].duration;

  const editedVideo = await ffmpegUtils.edit(video, text, duration, `${video.width}x${video.height}`);
  console.log("Finished editing video.");

  return editedVideo;
}
