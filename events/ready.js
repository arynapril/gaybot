module.exports = async bot => {
    await wait(1000);
    bot.log("log", `Ready to serve ${bot.users.size} users in the LGBTQ+ of FIRST server!`, "READY");
    bot.user.setGame(".help | GAY ALLIANCE 👏 👏 👏👏👏");
}