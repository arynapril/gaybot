exports.run = (bot, message, args, level) => {
    const Discord = require("discord.js");
    var mutee = message.mentions.users.array();
    if (args.length == 1) {
        var reason = "Not specified";
    } else {
        var reason = args.slice(1).join(" ");
    };
    for(var k = 0; k < mutee.length; k++) {
        var user = bot.users.get(mutee[k].id);
        var member = message.guild.members.get(mutee[k].id);
        var channels = message.guild.channels.array();
        for(var i = 0; i < channels.length; i++) {
            if(channels[i].type == 'text')
                channels[i].overwritePermissions(member, {SEND_MESSAGES: false})
        }
        var mute = new Discord.RichEmbed();
        mute.setTitle('User was muted.')
        .addField('User', user, true)
        .addField('Muted by', message.author, true)
        .addField('Reason', reason)
        .setFooter("MUTED")
        .setTimestamp()
        .setColor('#E53935')
        message.channel.send({embed: mute})
    }
};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['shush'], 
    permLevel: 2
};
exports.help = {
    name: 'mute',  
    description: 'Mutes a member', 
    usage: 'Mute <member to be muted>'
};