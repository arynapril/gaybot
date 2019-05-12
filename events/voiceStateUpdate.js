module.exports = (bot, oldMember, newMember) => {
	let role = newMember.guild.roles.find("name", 'voice');
	if (!role) return;
	if (newMember.voiceChannel) {
		newMember.addRole(role);
	} else {
		newMember.removeRole(role);
	};
};
