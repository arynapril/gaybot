module.exports = (bot, member) => {
    bot.channels.get('336865919135514626').send(`Hi ${member}! Welcome to LGBTQ+ of FIRST! Please read through the rules for instructions on how to get access to the rest of the server!`);
    bot.log("log", `New member - ${member.user.username} (${member.id})`);
};