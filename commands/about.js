exports.run = (bot, message, args) => {
    const Discord = require('discord.js');
    uptime = bot.uptime;
    time = Math.floor(uptime/1000);
    if (time >= 3600) { 
        var hours = Math.floor(time/3600); 
        var minutes = Math.floor((time%3600)/60); 
        var seconds = time%60%60;
        var timecode = `${hours} hours, ${minutes} minutes, and ${seconds} seconds.`
    } else if (time >= 60) {
        var minutes = Math.floor(time/60);
        var seconds = time%60;
        var timecode = `${minutes} minutes and ${seconds} seconds`;
    } else {
        var timecode = `${time} seconds`;
    };
    var str = "";
    var emoji = message.guild.emojis.array();
    for (var i = 0; i < emoji.length; i++) {
        str += `<:${emoji[i].name}:${emoji[i].id}> `
    };
    if (str == "") {
        str = 'None';
    };
    about = new Discord.RichEmbed()
    .setTitle("About gaybot and the LGBTQ+ of FIRST server!")
    .setColor([Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)])
    .addField('Botmom', 'arynapril#8549')
    .addField('Bot Uptime', timecode, true)
    .addField('Server Created', message.guild.createdAt, true)
    .addField('Users', message.guild.members.size, true)
    .addField('Roles', message.guild.roles.size, true)
    .addField('Channels', message.guild.channels.size, true)
    .addField('Emojis', str, true)
    .setThumbnail(message.guild.iconURL)
    .setTimestamp()
    .setFooter("Do .help for more information!")
    message.channel.send({embed: about});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['stats', 'server'],
    permLevel: 1
};

exports.help = {
    name: 'about',
    description: 'Display a few statistics about the bot and the server',
    usage: 'about'
};