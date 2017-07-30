module.exports = (bot, member) => {
    var screening = member.guild.channels.find('name', 'screening-lobby');
    screening.send(`${member.user.username} has left the server!`)
    .then(msg => setTimeout(function() {msg.delete()}, 60000));
    bot.log("log", `Member left - ${member.user.username} (${member.id})`);
};