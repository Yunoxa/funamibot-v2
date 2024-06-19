require("dotenv").config();
const Eris = require("eris");
const fs = require("fs");

const Constants = Eris.Constants;

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

const bot = new Eris(`Bot ${process.env.TOKEN}`, {
  intents: []
});

bot.on("ready", async () => {
  console.log("Ready!");

  const commands = await bot.getCommands;

  const guildID = "1252623727376732231";
  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.createGuildCommand(guildID, {
      name: command.name,
      description: command.options.description,
      type: Constants.ApplicationCommandTypes.CHAT_INPUT
    });
  }
});

bot.on("interactionCreate", (interaction) => {
  if (interaction instanceof Eris.CommandInteraction) {
    for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      if (interaction.data.name == command.name) {
        console.log(`I executed the ${interaction.data.name} command.`);
        command.generator(interaction);
      }
    }
  }
});

bot.on("error", (err) => {
  console.error(err);
});

bot.connect();
