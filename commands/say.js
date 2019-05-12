exports.run = (bot, message, args, level) => {
    if(message.author.id != bot.config.owner) return;
    message.delete();
    message.channel.send(args.join(" "));
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	botPerms: ['MANAGE_MESSAGES'],
	memberPerms: ['MANAGE_MESSAGES']
};

exports.help = {
	name: 'say',
	description: 'Says something',
	usage: 'say <what you want her to say'
};
