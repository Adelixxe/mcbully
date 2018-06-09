const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
const idSven = '152045576354004992'
var cli = new Discord.Client({autoReconnect:true});
var servers = {};

bot.commands = new Discord.Collection();
bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));
bot.on('ready', function() {console.log(" McBully https://discordapp.com/oauth2/authorize?client_id=455107086418837524&scope=bot&permissions=104324160")},

bot.on('ready',() => {
  bot.user.setPresence({game: {name: "Sven Bullying Simulator 2018", type: 0}});
}));

bot.on('message', message => {
       if (message.content === ' ' && message.author.id === '294148055228350464') {
            message.reply('t gro mdr')}
  }
  
  



bot.login(process.env.BOT_TOKEN);
