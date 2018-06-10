const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
var cli = new Discord.Client({autoReconnect:true});
var servers = {};

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
/*24*/     "Pourquoi tu rages Sven?"
/*25*/     "Arrête de rager."

];

function random(min, max) {
     min = Math.ceil(0);
     max = Math.floor(20);
     i = Math.floor(Math.random() * (max - min) + min);
}

bot.commands = new Discord.Collection();
bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));
bot.on('ready', function() {
     console.log(" McBully https://discordapp.com/oauth2/authorize?client_id=455107086418837524&scope=bot&permissions=104324160")
});

bot.on('ready', () => {
     bot.user.setPresence({game: {name: "Sven Bullying Simulator 2018", type: 0}});
});

bot.on('message', message => {
     if(message.author.id === '152045576354004992') {
          random()
          message.reply(insultes[i]);
          console.log(i);
     }
});


bot.login(process.env.BOT_TOKEN);
