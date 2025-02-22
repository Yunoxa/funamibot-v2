const ffmpegUtils = require("./ffmpeg");
const getDuration = require("./ffprobe/getDuration");
const ffmpeg = require("fluent-ffmpeg");

module.exports = async (video, text) => {
  const metadata = await getDuration(video.url);
  const duration = metadata.streams[0].duration;

  function getDimensions(streams) {
    console.log(streams)
    for(let i = 0; i < streams.length; i++) {
      if(streams[i].width && streams[i].height) {
        return `${streams[i].width}x${streams[i].height}`;
      }
    }
  }

  function hasAudio(streams) {
    for(let i = 0; i < streams.length; i++) {
      if(streams[i].codec_type === "audio") {
        return true;
      }
    }
    return false;
  }

  const dimensions = getDimensions(metadata.streams);
  const audioStatus = hasAudio(metadata.streams);
  console.log(audioStatus);
  const editedVideo = await ffmpegUtils.edit(video, text, duration, dimensions, audioStatus);
  console.log("Finished editing video.");

  return editedVideo;
}
