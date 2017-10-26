module.exports = (bot, message) => {
    if (message.author.bot) return;
    if (message.member.guild.id !== bot.config.guildID && message.author.id !== bot.config.owner) return;
    if (message.channel.name == "screening-lobby" && message.content.toLowerCase() == "i have read the rules and regulations") {
        if (message.member.nickname == null) {
            message.channel.send(`Hi there ${message.author}! Please set your nickname according to the rules to gain access to the server. On desktop, type \`/nick <what you want to set your nickname to>\`. On mobile, open the left menu, tap the server title, and then the option to change nickname. After that, type **I have read the rules and regulations** again. Thank you!`);
        } else {
            let role = message.guild.roles.find("name", "member");
            message.member.addRole(role);
            var lobby = message.guild.channels.find('name', 'the-lobby');
            lobby.send(`Welcome ${message.author} to LGBTQ+ of FIRST! Feel free to contact a member of staff if you have any questions (listed in #server-rules)! If you would like a role to describe your sexuality, gender identity, or position within FIRST, head to #bot-commands and run \`.giveme list\` to see the roles avaliable to self assign! Enjoy your stay!`);
            message.channel.bulkDelete(50);
            message.channel.send("Welcome to LGBTQ+ of FIRST! Please read the rules, set your nickname to include your team number and pronouns, and then type **I have read the rules and regulations**. Thank you!");
        };
    };
    if (message.content.indexOf(bot.config.prefix) !== 0) return;
    const args = message.content.split(/\s+/g);
    const command = args.shift().slice(bot.config.prefix.length).toLowerCase();
    const cmd = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command));
    let perms = bot.permLevel(message);
    if (cmd && perms >= cmd.conf.permLevel) {
        bot.log("log", `${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`, " CMD ");
        cmd.run(bot, message, args, perms);
    };
};