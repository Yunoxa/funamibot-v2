const FfmpegCommand = require("fluent-ffmpeg");

module.exports = async (video, dimensions) => {
  const command = new FfmpegCommand();
  command.input(video);
  command.inputFormat('mp4');
  command.toFormat("mp4");
  command.outputOptions('-movflags frag_keyframe+empty_moov');
  command.size(dimensions);

  return command.pipe();
}