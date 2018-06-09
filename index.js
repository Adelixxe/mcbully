const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NDU1MTA3MDg2NDE4ODM3NTIO.Df3LDw.ff3aJkYUJWooMsb2YZBZcl7sPzY';
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
  bot.user.setGame(" bully Sven");
}));





client.login(token);
