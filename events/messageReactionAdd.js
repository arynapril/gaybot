module.exports = (bot, messageReaction, user) => {
    const Discord = require('discord.js');
    let msg = messageReaction.message;
    if (msg.guild.id !== bot.config.guildID) return;
    if (!msg) return;
    if (messageReaction.me) return;
    if (messageReaction.emoji.id == '320770131741376512' && messageReaction.count >= 8) {
        msg.react("320770131741376512");
        const HoF = new Discord.RichEmbed();
            HoF.setColor(`${msg.member.displayHexColor}`)
            .setFooter('LGBTQ+ of FIRST 🌈')
            .setTimestamp()
        if (msg.member.nickname == null) {
            HoF.addField('User',`${msg.author.username}`, true)
        } else {
            HoF.addField('User',`${msg.member.nickname} (${msg.author.username})`, true);
        };
        HoF.addField('Channel', `${msg.channel.name}`, true)
        if (msg.attachments.size==0) {
            HoF.addField('Message', `${msg}`)
        } else {
            pictures = msg.attachments.array();
            if (msg != "") {
                HoF.addField('Message', `${msg}`)
            }
            HoF.setImage(pictures[0].url)
        }
        var HallOfFame = msg.guild.channels.find('name', 'hall-of-fame');
        HallOfFame.send({embed: HoF});
    };
};