const Discord = require("discord.js");
require("dotenv").config();
const disquette = require("./commands/disquette")
const sagesse = require("./commands/sagesse")

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES","GUILD_MESSAGE_REACTIONS"] });
const prefix = "!";

client.on("messageCreate", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  if (command === "disquette") {
    return disquette(message)
  };
  if (command === "sagesse") {
    return sagesse(message)
  }
});

client.login(`${process.env.BOT_TOKEN}`);