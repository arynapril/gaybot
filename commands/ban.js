exports.run = async(bot, message, args, level) => {
    var banee = message.mentions.users.array()[0];
    var banned = message.guild.members.get(banee.id);
    banned.ban(reason);
    message.reply(banee + " has been successfully banned.");
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 10
};
exports.help = {
    name: 'ban',
    description: 'Bans a member.',
    usage: 'ban @<member to be banned> <reason for banning>'
};