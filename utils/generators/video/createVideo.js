const ffmpegUtils = require("./ffmpeg");
const getDuration = require("./ffprobe/getDuration");
const ffmpeg = require("fluent-ffmpeg");

module.exports = async (video, text) => {
  const metadata = await getDuration(video.url);
  const duration = metadata.streams[0].duration;

  function getDimensions(streams) {
    for(let i = 0; i < streams.length; i++) {
      if(streams[i].width && streams[i].height) {
        return `${streams[i].width}x${streams[i].height}`;
      }
    }
  }

  const dimensions = getDimensions(metadata.streams);
  const editedVideo = await ffmpegUtils.edit(video, text, duration, dimensions);
  console.log("Finished editing video.");

  return editedVideo;
}
