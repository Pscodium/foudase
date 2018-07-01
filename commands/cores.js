const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("Categorias")
    .setAuthor("3 Comandos", bot.user.displayAvatarURL)
    .addField("Cor vermelha", "`" + message.prefix + "vermelho`", true)
    .addField("Cor verde", "`" + message.prefix + "verde`", true)
    .addField("Cor amarela", "`" + message.prefix + "amarelo`", true)
    message.channel.send(embed);
}
module.exports.help = {
    name: "cores"
}
