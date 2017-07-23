exports.run = (bot, message, args, level) => {
    const Discord = require("discord.js");
    var mutee = message.mentions.users.array();
    for(var k = 0; k < mutee.length; k++) {
        var user = bot.users.get(mutee[k].id);
        var member = message.guild.members.get(mutee[k].id);
        var channels = message.guild.channels.array();
        for(var i = 0; i < channels.length; i++) {
            if(channels[i].type == 'text')
                channels[i].overwritePermissions(member, {SEND_MESSAGES: false})
        }
        message.reply(member + ' has been muted!');
    }
};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 2
};
exports.help = {
    name: 'mute',  
    description: 'Mutes a member', 
    usage: 'Mute <member to be muted>'
};