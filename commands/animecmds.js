const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("Anime")
.setDescription("Existem atualmente 2 comandos nesta categoria.")
.addField("`" + message.prefix +"anime`", "Fornecer informações sobre anime.")
.addField("`" + message.prefix +"manga`","Fornecer mangá para um anime.")
message.channel.send(embed);
}

module.exports.help = {
  name: "animecmds"
}