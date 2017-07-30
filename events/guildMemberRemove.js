module.exports = (bot, member) => {
    var screening = message.guild.channels.find('name', 'hall-of-fame');
    screening.send(`${member.user.username} has left the server!`)
    .then(msg => setTimeout(function() {msg.delete()}, 60000));
    bot.log("log", `Member left - ${member.user.username} (${member.id})`);
};