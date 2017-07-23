module.exports = (bot, member) => {
    bot.channels.get('336865919135514626').send(`${member.user.username} has left the server!`)
    .then(msg => setTimeout(function() {msg.delete()}, 60000));
    bot.log("log", `Member left - ${member.user.username} (${member.id})`);
};