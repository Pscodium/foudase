const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("Categorias")
    .setAuthor("85 Comandos", bot.user.displayAvatarURL)
    .addField("Moderação", "`" + message.prefix + "mod`", true)
    .addField("Jogos", "`" + message.prefix + "games`", true)
    .addField("Anime", "`" + message.prefix + "animecmds`", true)
    .addField("Música", "`" + message.prefix + "music`", true)
    .addField("NSFW", "`" + message.prefix + "nsfw`", true)
    .addField("Core", "`" + message.prefix + "core`", true)
    .addField("Utilidade", "`" + message.prefix + "utils`", true)
    .addField("Diversão", "`" + message.prefix + "fun`", true)
    .addField("Statisticas", "`" + message.prefix + "statistics`", true)
    .addField("Desenvolvimento", "`" + message.prefix + "dev`", true)
    .addField("Cores embed", "`" + message.prefix + "cores`", true)
  .setFooter("Se você encontrou um bug, por favor denuncie usando " + message.prefix + "bugreport")
    message.channel.send(embed);
}
module.exports.help = {
    name: "help"
}
