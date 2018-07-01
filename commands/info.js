const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("desenvolvedor", "`! Ｐｓｃｏｄｉｕｍ#4483`")
    .addField("Biblioteca", "`discord.js@11.3.2`")
    .addField("Menções Honrosas", "`Sullen#0808`")
    .addField("Links", `[\`Discord\`](https://discord.gg/Ph3nuJ)`)
    .setColor("#e2df1b")
    .setFooter("Hangout de um codificador")
    .setTimestamp()
    message.channel.send(embed);
}
module.exports.help = {
    name: "info"
}