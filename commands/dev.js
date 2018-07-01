const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("<:TAdev:444855091443531782> Developer")
.addField("`" + message.prefix +"eval`", "Executar uma string JavaScript.")
.addField("`" + message.prefix +"restart`","Reinicie o bot")
.addField("`" + message.prefix +"reload`","Recarregue todos os comandos.")
.addField("`" + message.prefix +"exec`", "Executar cmds do prompt de comando no host local.")

message.channel.send(embed);
}

module.exports.help = {
  name: "dev"
}