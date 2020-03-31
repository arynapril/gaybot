exports.run = (bot, message, args, level) => {
	if (!message.mentions.users.array()[0]) {
		message.channel.send(`*hugs* ***${message.member.nickname}***`)
	} else {
		let huggee = message.mentions.members.array()[0];
		message.channel.send(`*hugs* ***${huggee.nickname}***`);
	};
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['hugs', 'hugz'],
	botPerms: [],
	memberPerms: []
};

exports.help = {
	name: 'hug',
	description: 'Everyone needs a hug sometimes.',
	usage: 'hug <@person needing a hug [optional]>'
};
