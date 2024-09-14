const s3Tools = require("../../../../s3");

module.exports = async (command) => {
  command.input(`https://funamibot.s3.eu-central-2.amazonaws.com/${await s3Tools.getRandomS3Object("funamibot", "audio/music/")}`);
}