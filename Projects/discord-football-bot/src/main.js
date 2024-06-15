// Adding all the files from the Discord Java Script to actually code the bot
require('dotenv').config();

// All packages require for bot to run
const { token, databaseToken } = process.env;
const { connect } = require('mongoose');
// const prompt = require('prompt-sync')();
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

// Updating the client with Guild Intents
const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
]})

client.commands = new Collection();
client.commandArray = [];
client.modals = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();

const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
   const functionFiles = fs
      .readdirSync(`./src/functions/${folder}`)
      .filter((file) => file.endsWith(".js"));
   for (const file of functionFiles) {
      require(`./functions/${folder}/${file}`)(client);
   }
}

client.handleEvents();
client.handleCommands();
client.handleComponents();
(async () => {
   await client.login(token);connect(databaseToken).catch(console.error)
})();