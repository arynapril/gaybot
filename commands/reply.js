exports.run = async (bot, message, args, level) => {
    const Discord = require("discord.js");
    m = bot.users.get(args[0]);
    chan = await bot.getSetting('modMailChannel', message.guild);
    mmChan = message.guild.channels.find('name', chan);
    if (mmChan.id !== message.channel.id) return message.channel.send('Sorry, please send replies to mod mail messages in the mod mail channel!')
    if (!m) {
        return message.channel.send('Sorry, that user doesn\'t appear to be in this server/the LGBTQ+ of FIRST server! Make sure to start your message with a user ID!')
    } else {
        response = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(args.slice(1).join(' '))
        .setFooter('To respond, simply type a message back in these dms!')
		if (message.attachments.size !== 0) {
			pictures = message.attachments.array();
			response.setImage(pictures[0].url)
		}
        m.user.send({embed: response});
        message.react('💌');
    }
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	botPerms: [],
	memberPerms: []
};

exports.help = {
	name: 'reply',
	description: 'used to reply to modMail',
	usage: 'reply [user ID] reply'
};
