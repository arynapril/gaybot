exports.run = async(bot, message, args, level) => {
    const Discord = require('discord.js')
    var colors = Array("#FF80AB", "#FF4081", "#F50057", "#EF5350", "#E53935", "#C62828", "#FFAB40", "#FF9100", "#FF6D00", "#FFD740", "#FFC400", "#FFAB00", "#81C784", "#4CAF50", "#388E3C", "#2196F3", "#1976D2", "#0D47A1", "#7986CB", "#3F51B5", "#303F9F", "#B39DDB", "#7E57C2", "#5E35B1");
    const allowedRoles = ['social', 'Alumni', 'Mentor', 'Volunteer', 'FRC', 'FTC', 'VEX', 'FGC', 'FLL', 'ally', 'aromantic', 'male', 'female', 'agender', 'genderfluid', 'demiboy', 'demigirl', 'nonbinary', 'gay', 'lesbian', 'bisexual', 'asexual', 'pansexual', 'straight', 'demisexual', 'polyamorous', 'questioning', 'queer'];
    var assigned = "";
    var assignedCount = 0;
    var alreadyHad = "";
    var alreadyHadCount = 0;
    var notFoundCount = 0;
    for (var k = 0; k < args.length; k++) {
        var found = false;
        var role = null;
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
                alreadyHad += `${role.name} \n`;
                alreadyHadCount++;
            } else {
                member.addRole(role).catch(console.error);
                assigned += `${role.name} \n`;
                assignedCount++;
            }
        } else if (roleToGive == "list" || roleToGive == "-l") {
            var list = "";
            for (var i = 0; i < allowedRoles.length; i++) list += "\n- " + allowedRoles[i];
            list += "\n For the trans role or roles according to your region, ping or DM an admin!";
        } else {
            notFoundCount++;
        };
    };
    var givemeEmbed = new Discord.RichEmbed()
        .setTimestamp()
        .setColor(colors[Math.floor(Math.random() * colors.length)]);
    if (assignedCount>0) {
        givemeEmbed.addField(`Successfully gave you ${assignedCount} role(s)!`, assigned);
    };
    if (alreadyHadCount>0) {
        givemeEmbed.addField(`You already had ${alreadyHadCount} role(s)!`, alreadyHad);
    };
    if (notFoundCount>0) {
        givemeEmbed.addField(`Couldn't find ${notFoundCount} role(s)!`, 'Use .giveme list to get a list of roles avaliable!');
    };
    if (roleToGive == "list" || roleToGive == "-l") {
        givemeEmbed.addField('Roles avaliable to self assign', list)
    };
    message.channel.send({embed: givemeEmbed})
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