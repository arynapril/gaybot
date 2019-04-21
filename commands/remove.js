exports.run = async(bot, message, args, level) => {
<<<<<<< HEAD
    const allowedRoles = ['social', 'Alumni', 'Mentor', 'Volunteer', 'FRC', 'FTC', 'VEX', 'FGC', 'FLL', 'ally', 'aromantic', 'male', 'female', 'agender', 'genderfluid', 'demiboy', 'demigirl', 'nonbinary', 'transsexual', 'genderqueer', 'gay', 'lesbian', 'bisexual', 'asexual', 'pansexual', 'straight', 'demisexual', 'questioning', 'queer', 'polysexual', 'gender-non-conforming', 'grayromantic', 'closeted', 'Houston', 'Detroit'];
=======
    const allowedRoles = ['social', 'Alumni', 'Mentor', 'Student-Mentor', 'Volunteer', 'FRC', 'FTC', 'VEX', 'FGC', 'FLL', 'ally', 'aromantic', 'male', 'female', 'agender', 'genderfluid', 'demiboy', 'demigirl', 'nonbinary', 'transsexual', 'genderqueer', 'gay', 'lesbian', 'bisexual', 'asexual', 'pansexual', 'straight', 'demisexual', 'questioning', 'queer', 'polysexual'];
>>>>>>> 183b6405d89d03e89b8e75007e62bbc72430c247
    var found = false;
    var role = null;
    for (var k = 0; k < args.length; k++) {
        var roleToGive = args[k].toLowerCase();
        for (var i = 0; i < allowedRoles.length; i++) {
            if (allowedRoles[i].toLowerCase() == roleToGive) {
                found = true;
                role = message.guild.roles.find("name", allowedRoles[i]);
            };
        };
        if (found == true) {
            var member = message.member;
            if (!member.roles.has(role.id)) {
                message.channel.send("You don't have that role!");
            } else {
                member.removeRole(role).catch(console.error);
                message.channel.send("Successfully took away the **" + role.name + "** role!");
            }
        } else if (roleToGive == "list" || roleToGive == "-l") {
            var list = "**List of Allowed Roles**";
            for (var i = 0; i < allowedRoles.length; i++) list += "\n - " + allowedRoles[i];
            message.channel.send(list);
        } else {
            message.reply('that role does not exist/is not able to be removed with the bot!');
        };
    };
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 1
};
exports.help = {
    name: 'remove',
    description: '...and the bot taketh away.',
    usage: 'remove <role(s) | list (to display all roles available)>'
};