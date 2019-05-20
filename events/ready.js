module.exports = async bot => {
	await wait(1000);
	bot.syncServers();
	bot.log("log", `Ready to love ${bot.users.size} users in ${bot.guilds.size} servers!`, "READY");
	const list = [
		"❤️🧡💛💚💙💜", 
		"💙💖⚪💖💙",
		"💖💜💙", 
		"💖💛💙"
		];
	index = -1;
	setInterval(() => {
		index += 1;
		if (index == list.length) index = 0; 
		client.user.setPresence({ game: { name: list[index] }, status: 'online' }); // sets bot's activities to one of the phrases in the arraylist.
	}, 30000);
}
