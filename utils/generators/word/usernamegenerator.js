const generators = require("./modules/generators.js");
module.exports = {
  name: 'usernamegenerator',
  generator(interaction) {
    if (!args.length) {
      return message.channel.send(generators.generateNewName(message.author.username));
    } else if (args.length) {
      if (message.mentions.users.size > 0) {
        return message.mentions.users.map(user => {
          return message.channel.send(generators.generateNewName(user.username));
        });
      } else {
        const argsString = args.join(" ");
        return message.channel.send(generators.generateNewName(argsString));
      }
    }
  }
};
