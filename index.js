const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'ALED LE TOKEN';
const fs = require("fs");
const idSven = '152045576354004992'
var cli = new Discord.Client({autoReconnect:true});
var servers = {};

bot.commands = new Discord.Collection();
bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));
bot.on('ready', function() {console.log(" McBully https://...")},

bot.on('ready',() => {
  bot.user.setGame(" bully Sven");
}));
bot.on('message', message => {





client.login(token);
