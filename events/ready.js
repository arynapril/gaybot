module.exports = async bot => {
	await wait(1000);
	bot.syncServers();
	bot.log("log", `Ready to love ${bot.users.size} users in ${bot.guilds.size} servers!`, "READY");
	bot.user.setPresence({ game: { name: `❤️🧡💛💚💙💜` }, status: 'online' })
}
