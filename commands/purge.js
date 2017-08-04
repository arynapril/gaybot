exports.run = (bot, message, args, level) => {
    var num = parseInt(args[0]);
    num += 1;
	if (!isNaN(num)) {
        if (num < 2) {
            message.reply('Please input a number above 0! Thank you!')
        } else {
            if (num > 100) {
                num = 100;
            }
            message.channel.bulkDelete(num);
            message.channel.send(`${args[0]} messages purged by ${message.author}!`)
			    .then(msg => setTimeout(function() {msg.delete()}, 5000));
        }
	} else {
		message.channel.sendMessage("Please specify a number!");
	}
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['clear', 'prune', 'clean'],
    permLevel: 4
};

exports.help = {
    name: 'purge',
    description: 'Mass clearing of messages',
    usage: 'purge <number of messages to be deleted, between 2 and 100>'
};