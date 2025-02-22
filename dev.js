require("dotenv").config();
const Eris = require("eris");
const onClient = require("./client");

const client = new Eris(`Bot ${process.env.TESTTOKEN}`, {
  intents: ["all"]
});

onClient.ready(client, process.env.GUILDID.split(","));
onClient.interactionCreate(client);

client.on("error", (err) => {
  console.error(err);
});

client.connect();
