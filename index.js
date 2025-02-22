require("dotenv").config();
const Eris = require("eris");
const onClient = require("./client");

const client = new Eris(`Bot ${process.env.TOKEN}`, {
  intents: ["all"]
});

onClient.ready(client);
onClient.interactionCreate(client);

client.on("error", (err) => {
  console.error(err);
});

client.connect();
