exports.run = (bot, message, args, level) => {
    message.channel.send("Here is my github repository! https://github.com/arynapril/gaybot :heart:").catch(console.error);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['github', 'gh'],
    permLevel: 1
};

exports.help = {
    name: 'git',
    description: 'Provides a link to gaybots github repository!',
    usage: 'git'
};