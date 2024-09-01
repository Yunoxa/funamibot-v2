require("dotenv").config();
const Eris = require("eris");
const onClient = require("./client");

const client = new Eris(`Bot ${process.env.TOKEN}`, {
  intents: []
});

onClient.ready(client, process.env.GUILDID);
onClient.interactionCreate(client);

client.on("error", (err) => {
  console.error(err);
});

client.connect();
