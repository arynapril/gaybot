module.exports = (bot, messageReaction, user) => {
    const Discord = require('discord.js');
    if (messageReaction.me) return;
    if (messageReaction.emoji.name == "gayalliance" && messageReaction.count >= 5) {
        let msg = messageReaction.message;
        msg.react("336879585193099284");
        const embed = new Discord.RichEmbed()
            .setColor(`${msg.member.displayHexColor}`)
            .setFooter('LGBTQ+ of FIRST 🌈')
            .setTimestamp()
            .addField('User', `${msg.member.nickname} (${msg.author.username})`, true)
            .addField('Channel', `${msg.channel.name}`, true)
            .addField('Message', `${msg}`)
        bot.channels.get('336868122424377345').send('', {embed});
    };
};