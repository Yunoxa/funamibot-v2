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
  command.outputOptions("-async 1");
  command.duration(Math.ceil(duration));

  const filters = [];
  const mixInputs = ["0:1"];

  for (let i = command._inputs.length; i < randInt(1, Math.ceil(duration)); i++) {
    console.log(command._inputs.length)
    console.log(filters.length)
    const sound = await s3Tools.getRandomS3Object("funamibot", "audio/SFX/");
    command
      .input(`https://funamibot.s3.eu-central-2.amazonaws.com/${sound}`)
      .inputFormat('mp3')

    filters.push(
      {
        filter: "anullsrc",
        outputs: [`silence_${i}`],
        options: `d=${randInt(1, Math.ceil(duration))}`
      }
    );
    filters.push(
      {
        filter: "concat",
        inputs: [`silence_${i}`, `${i}`],
        outputs: [`sfx_${i}`],
        options: "n=2:v=0:a=1"
      }
    );
    mixInputs.push(`sfx_${i}`);
  }

  if (filters.length > 0) {
    filters.push(
      {
        filter: 'amix', 
        inputs: mixInputs,
        options: `inputs=${mixInputs.length}:duration=longest`
      }
    );

    console.log(command);
    console.log(mixInputs);
    console.log(filters);
    command.complexFilter(filters);
  }

  command.on("start", (cmdline) => {
    console.log(cmdline);
  });

  command.on("error", (err) => {
    console.log('an error happened: ' + err.message);
  });

  return command.pipe();
}