const FfmpegCommand = require("fluent-ffmpeg");
const s3Tools = require("../../../s3");
const ffmpegAudio = require("./audio");
const ffmpegVideo = require("./video");
const replaceWithMusic = require("./special/replaceWithMusic");
const chanceFromInt = require("../../../common/math/chanceFromInt");
const randInt = require("../../../common/math/randInt");

module.exports = async (video, text, duration) => {
  const command = new FfmpegCommand();
  command.input(video);
  command.inputFormat('mp4');
  command.toFormat("mp4");
  command.outputOptions('-movflags frag_keyframe+empty_moov');
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
  console.log(duration)
  command.duration(Math.ceil(duration));

  for (let key in ffmpegAudio) {
    if (chanceFromInt(Object.keys(ffmpegAudio).length)) {
      await command.audioFilters(ffmpegAudio[key](duration, command));
      console.log(`Applied audio filter ${key} to video.`);
    }
  }

  for (let key in ffmpegVideo) {
    if (chanceFromInt(Object.keys(ffmpegVideo).length)) {
      await command.videoFilters(ffmpegVideo[key](duration, command));
      console.log(`Applied video filter ${key} to video (${ffmpegVideo[key]()}).`);
    }
  }

  if (chanceFromInt(2)) {
    await replaceWithMusic(command);
    console.log("B!")
  }

  command.on("error", (err) => {
    console.log("an error happened: " + err.message);
  });
  return command.pipe();
}