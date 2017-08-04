exports.run = (bot, message, args, level) => {
    const Discord = require("discord.js");
    if (!message.mentions.users.array()[0]) return;
    var mutee = message.mentions.users.array();
    for(var k = 0; k < mutee.length; k++) {
        var member = message.guild.members.get(mutee[k].id);
        var user = bot.users.get(mutee[k].id);
        var guild = message.guild;
        var channels = message.guild.channels.array();
        for(var i=0; i < channels.length; i++) {
            if(channels[i].type == 'text')
                channels[i].overwritePermissions(member, {SEND_MESSAGES: null})
        };
        var unmute = new Discord.RichEmbed();
        unmute.setTitle('User was unmuted.')
        .addField('User', user)
        .addField('Unmuted by', message.author)
        .setFooter("UNMUTED")
        .setTimestamp()
        .setColor('#4CAF50')
        message.channel.send({embed: unmute})
        var logs = message.guild.channels.find('name', 'mod-logs');
        if (logs) {
            logs.send({embed: ban});
        }
    };
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['unshush'],
    permLevel: 3
};

exports.help = {
    name: 'unmute',
    description: 'Unmutes a member that has been muted',
    usage: 'unmute @<member>'
};
