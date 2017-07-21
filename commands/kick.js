exports.run = (bot, message, args, level) => {
    const Discord = require("discord.js");
    var banee = message.mentions.users.array()[0];
    var kicked = message.guild.members.get(banee.id);
    var user = bot.users.get(banee.id);
    kicked.kick();
};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 2
};
exports.help = {
    name: 'kick',  
    description: 'Kicks a member', 
    usage: 'kick <member to be kicked>'
};