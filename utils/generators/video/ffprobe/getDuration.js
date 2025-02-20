const ffmpeg = require("fluent-ffmpeg");

module.exports = async (stream) => {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(stream, (err, meta) => {
      resolve(meta);
    });
  });
}
