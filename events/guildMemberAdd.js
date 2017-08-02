module.exports = (bot, member) => {
    if (member.guild.id !== bot.config.guildID) return;
    var screening = member.guild.channels.find('name', 'screening-lobby');
    var rules = member.guild.channels.find('name', 'server-rules');
    screening.send(`Hi ${member}! Welcome to LGBTQ+ of FIRST! Please read through the rules (found in ${rules}) for instructions on how to get access to the rest of the server!`);
    bot.log("log", `Member joined - ${member.user.username} (${member.id})`);
};