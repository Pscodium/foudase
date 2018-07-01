const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("📊 Estatísticas")
.addField("`" + message.prefix +"stats`", "Fornece estatísticas do bot.")
.addField("`" + message.prefix +"userstats`", "Fornece estatísticas do usuário.")
.addField("`" + message.prefix +"serverstats`", "Fornecer estatísticas do servidor.")


message.channel.send(embed);
}

module.exports.help = {
  name: "statistics"
}

