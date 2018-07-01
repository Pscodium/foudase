const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não tem permissões para fazer isso!");
  if(!args[0]) return message.channel.send("Por favor, especifique um número.");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Limpando ${args[0]} mensagens.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}