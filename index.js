const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
var cli = new Discord.Client({autoReconnect:true});
var servers = {};
var UserID = 0

var insultes = [
/*01*/     "Parle pas !",
/*02*/     "Ferme la gros porc !",
/*03*/     "Ta mère c'est ta soeur.",
/*04*/     "Tous le monde s'en bas les couilles de ce que tu dis :/",
/*05*/     "Je te pousse tu roules.",
/*06*/     "Ta gueule.",
/*07*/     "Au lieu de parler vas faire du sport.",
/*08*/     "Non.",
/*09*/     "Ciao ?",
/*10*/     "Je vais te tacler dans la bouche si tu continues a parler gros tas.",
/*11*/     "Ta soeur la caravane.",
/*12*/     "À part ça, le cholestérol, ça va ? ",
/*13*/     "Ferme-la et va manger.",
/*14*/     "Tu sais faire autre chose a part ouvrir ta gueule ?",
/*15*/     "Mais du coup, en avion tu pars en soute ? :thinking:",
/*16*/     "Arrête de me parler !",
/*17*/     "T'as toujours pas compris ?",
/*18*/     "T'as vraiment le QI d'un tabouret...",
/*19*/     "сука блять",
/*20*/     "Ça fait quoi d'être une sous-race ?",
/*21*/     "Suce mes couilles.",
/*22*/     "Tu es tellement gros qu'il te faut un GPS pour trouver ton nombril.",
/*23*/     "T'es qu'une merde.",
/*24*/     "Arrête de rager.",
/*25*/     "T'es qu'un sanglier humain.",
/*26*/     "Du coup si tu fais le poirier, tu t'étouffes ?",
/*27*/     "C'est pas un peu bizarre d'avoir deux artères bouchées et de rester en vie ?",
/*28*/     "Pourquoi tu gonfles tes joues?",
/*29*/     "T'es grosse Mélissandre"
];

const maximum = 29;

bot.commands = new Discord.Collection();
bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));
bot.on('ready', function() {
    console.log(" McBully https://discordapp.com/oauth2/authorize?client_id=455107086418837524&scope=bot&permissions=104324160")
});

bot.on('ready', () => {
    bot.user.setPresence({game: {name: "Bully Simulator 2019", type: 0}});
});

if (msg.content.startsWith("$mcbid") {
    var UserID = message.content
    msg.reply('Le bully commence :D')
    {

bot.on('message', message => {
    if(message.author.id === UserID) {
        j = Math.floor(Math.random() * 11);
        if (j % 2 == 0) {
            i = Math.floor((Math.random() * maximum) + 1);
            console.log(i);
            message.reply(insultes[i]);
        }
     }
});

bot.login(process.env.BOT_TOKEN);
