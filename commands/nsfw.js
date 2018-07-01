const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("NSFW")
.setDescription("Existem atualmente 5 comandos nesta categoria.")
.addField("`" + message.prefix +"hentai`", "Obter imagem hentai aleatória.")
.addField("`" + message.prefix +"ecchi`", "Obter imagem ecchi aleatória.")
.addField("`" + message.prefix +"neko`", "Obter imagem neko aleatória.")
.addField("`" + message.prefix +"boobs`", "Obter imagem boobs aleatória.")
.addField("`" + message.prefix +"ass`", "Obter imagem ass aleatória.")


message.channel.send(embed);
}

module.exports.help = {
  name: "nsfw"
}

