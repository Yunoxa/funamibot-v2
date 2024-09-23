const FfmpegCommand = require("fluent-ffmpeg");
const ffmpegAudio = require("./audio/filters");
const ffmpegVideo = require("./video/filters");
const chanceFromInt = require("../../../common/math/chanceFromInt");

module.exports = async (video, text, duration, dimensions) => {
  const command = new FfmpegCommand();
  command.input(video);
  command.inputFormat('mp4');
  command.toFormat("mp4");
  command.duration(Math.ceil(duration));
  command.outputOptions('-movflags frag_keyframe+empty_moov');
  command.size(dimensions);
  command.videoFilters({
    filter: "drawtext",
    options: {
      fontfile: "./fonts/unicode.impact.ttf",
      fontcolor: "white",
      bordercolor: "black",
      borderw: "5",
      fontsize: "80",
      text: text,
      x: "(w-tw)/2",
      y: "20"
    }
  });

  for (let key in ffmpegAudio) {
    if (chanceFromInt(Object.keys(ffmpegAudio).length)) {
      const parameters = ffmpegAudio[key](duration);
      command.audioFilters(parameters);
      console.log(`Applied audio filter ${key} to video (${parameters}).`);
    }
  }

  for (let key in ffmpegVideo) {
    if (chanceFromInt(Object.keys(ffmpegVideo).length)) {
      const parameters = ffmpegVideo[key](duration);
      command.videoFilters(parameters);
      console.log(`Applied video filter ${key} to video (${parameters}).`);
    }
  }

  command.on('progress', (progress) => {
    console.log('Processing: ' + progress.targetSize + ' KB converted');
  });

  command.on('error', (err) => {
    console.error(err);
  });
  
  return command.pipe();
}