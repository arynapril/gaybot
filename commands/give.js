exports.run = (bot, message, args, level) => {
    var user = message.mentions.users.array()[0];
    var roleToGive = args[1];
    let role = message.guild.roles.find("name", roleToGive);
    if (!role) {
        message.channel.send("That role does not exist!");
    } else if (role.comparePositionTo(message.member.highestRole) < 0) {
        message.guild.members.get(user.id).addRole(role).then(m => {
            if(m.roles.has(role.id))
                message.channel.send(`Successfully gave ${user} the ${roleToGive} role!`);
            else
                message.channel.send(`Could not give ${user} the ${roleToGive} role! Sorry!`);
        }).catch(console.error);
    } else
        message.channel.send("Your highest role is lower than this role, so you cannot give it! Sorry!");
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'give',
    description: 'Gives a member a role',
    usage: 'give @<member to be given the role> <the role to be given>'
};