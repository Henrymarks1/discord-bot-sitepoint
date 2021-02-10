require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const fetch = require('node-fetch');	//npm install node-fetch


bot.login(process.env.TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'kanye') {
    fetch('https://api.kanye.rest/')
  .then(response => response.json())
  .then(data => msg.reply(data.quote));
  } 
});
