exports.run = async(bot, message, args, level) => {
    const allowedRoles = ['social', 'Alumni', 'Mentor', 'Volunteer', 'FRC', 'FTC', 'VEX', 'FGC', 'FLL', 'ally', 'male', 'female', 'agender', 'genderfluid', 'demiboy', 'demigirl', 'nonbinary', 'gay', 'lesbian', 'bisexual', 'asexual', 'pansexual', 'straight', 'demisexual', 'polyamorous', 'questioning', 'queer'];
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
            if (member.roles.has(role.id)) {
                message.channel.send("You already have that role!");
            } else {
                member.addRole(role).catch(console.error);
                message.channel.send("Successfully gave you **" + role.name + "**!");
            }
        } else if (roleToGive == "list" || roleToGive == "-l") {
            var list = "**List of Allowed Roles**";
            for (var i = 0; i < allowedRoles.length; i++) list += "\n - " + allowedRoles[i];
            list += "\n For the trans role or roles according to your region, ping or DM an admin!";
            message.channel.send(list);
        } else {
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
    name: 'giveme',
    description: 'The bot giveth...',
    usage: 'giveme <role(s) | list (to display all roles available)>'
};