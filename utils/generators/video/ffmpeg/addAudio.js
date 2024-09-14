const FfmpegCommand = require("fluent-ffmpeg");
const s3Tools = require("../../../s3");
const chanceFromInt = require("../../../common/math/chanceFromInt");
const randInt = require("../../../common/math/randInt");

module.exports = async (video, duration) => {
  const command = new FfmpegCommand();
  command.input(video);
  command.inputFormat('mp4');
  command.toFormat("mp4");
  command.outputOptions('-movflags frag_keyframe+empty_moov');

  if (chanceFromInt(4)) {
    const object = await s3Tools.getRandomS3Object("funamibot", "audio/music/");
    command.input(`https://funamibot.s3.eu-central-2.amazonaws.com/${object}`);
    command.inputFormat('mp3');
    console.log("Music added.");
  }

  for (let i = 0; i < duration; i++) {
    if (chanceFromInt(2)) {
      const object = await s3Tools.getRandomS3Object("funamibot", "audio/SFX/");
      command.input(`https://funamibot.s3.eu-central-2.amazonaws.com/${object}`)
             .inputFormat('mp3')
             .setStartTime(i);
      console.log("I added a sound effect at " + i + " seconds in the video.");
    }
  }

  command.on('codecData', function(data) {
    console.log('Input is ' + data.audio + ' audio ' +
      'with ' + data.audio_details + ' audio');
  });

  command.on("error", (err) => {
    console.log('an error happened: ' + err.message);
  });

  command.complexFilter([
    {
      filter: 'amix', options: { inputs: Object.keys(command._inputs).length, duration: 'longest' }
    }
  ]);

  return command.pipe();
}