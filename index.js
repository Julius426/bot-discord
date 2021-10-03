const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "*"

Client.on("ready", () => {
console.log("bot opérationnel")
});



Client.on("messageCreate", message => {
    if (message.author.bot) return;
    
    if(message.content === prefix + "ping"){
        message.reply("pong !")
    }

    if(message.content === prefix + "site"){
        message.reply("__**Voici notre site**__:\nhttps://lunardaydream796468631.wordpress.com/home/")}

    else if(message.content === prefix + "help"){
        message.channel.send("**__Les comandes du bot__**\n -__ping__ : renvoie pong\n -__site__ : le site de Lunar Daydream")
    }


});

Client.login(process.env.TOKEN);



