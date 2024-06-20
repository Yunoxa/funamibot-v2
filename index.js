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

  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    await bot.createCommand({
      name: command.name,
      description: command.description,
      type: Constants.ApplicationCommandTypes.CHAT_INPUT,
      options: command.options
    });
  }

  console.log("Commands loaded.");
});

bot.on("interactionCreate", (interaction) => {
  if (interaction instanceof Eris.CommandInteraction) {
    for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      if (interaction.data.name == command.name) {
        console.log(`Executing the ${interaction.data.name} command...`);
        command.generator(interaction);
        console.log(`I've finished executing the ${interaction.data.name} command!`);
      }
    }
  }
});

bot.on("error", (err) => {
  console.error(err);
});

bot.connect();
