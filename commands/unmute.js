exports.run = (bot, message, args, level) => {
    const Discord = require("discord.js");
    var mutee = message.mentions.users.array();
    for(var k = 0; k < mutee.length; k++) {
        var member = message.guild.members.get(mutee[k].id);
        var user = bot.users.get(mutee[k].id);
        var guild = message.guild;
        var channels = message.guild.channels.array();
        for(var i=0; i < channels.length; i++) {
            if(channels[i].type == 'text')
                channels[i].overwritePermissions(member, {SEND_MESSAGES: null})
        }
        message.reply(member + 'has been unmuted')
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['unshush'],
    permLevel: 10
};

exports.help = {
    name: 'unmute',
    description: 'Unmutes a member that has been muted',
    usage: 'unmute @<member>'
};
