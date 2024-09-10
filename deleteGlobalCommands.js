require("dotenv").config();
const Eris = require("eris");
const onClient = require("./client");

const client = new Eris(`Bot ${process.env.TOKEN}`, {
  intents: []
});

client.on("ready", async () => {
  console.log("Client is ready! Deleting global commands...");
  const commands = await client.getCommands();
  for (const command of commands) {
    await client.deleteCommand(command.id);
    console.log(`Deleted global command "${command.name}".`);
  }
  console.log("Commands deleted.")
});

client.on("error", (err) => {
  console.error(err);
});

client.connect();