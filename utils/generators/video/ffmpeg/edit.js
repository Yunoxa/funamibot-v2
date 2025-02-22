const ffmpeg = require("fluent-ffmpeg");
const ffmpegAudio = require("./audio/filters");
const ffmpegVideo = require("./video/filters");
const chanceFromInt = require("../../../common/math/chanceFromInt");
const s3 = require("../../../s3");

module.exports = async (video, text, duration, dimensions) => {
  const command = new ffmpeg();
  command.input(video.url);
  command.toFormat("webm");
  command.outputOptions([
    "-movflags frag_keyframe+empty_moov",
    "-fs 4M",
    "-shortest",
    "-crf 51"
  ]);
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

  if(chanceFromInt(3)) {
    const replacementAudio = `https://funamibot.s3.eu-central-2.amazonaws.com/${await s3.getRandomS3Object("funamibot", "audio/music/")}`;
    command.input(replacementAudio);
    command.outputOptions("-map 1:a:0");
    command.outputOptions("-map 0:v:0");
    command.inputOptions("-stream_loop -1");
  }

  command.on('start', function(commandLine) {
    console.log('Spawned Ffmpeg with command: ' + commandLine);
  });

  command.on('progress', (progress) => {
    console.log('Processing: ' + progress.targetSize + ' KB converted');
  });

  command.on('error', (err) => {
    console.error(err);
  });

  return command.pipe();
}
