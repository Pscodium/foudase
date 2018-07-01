const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("🔰 Moderação")
    .addField("`" + message.prefix + "ban`", "Banir um usuário.")
    .addField("`" + message.prefix + "unban`", "Desbanir usuário. [Requer id]")
    .addField("`" + message.prefix +"clear`", "Limpa mensagens")
    .addField("`" + message.prefix +"kick`", "Expulsa um membro.")
    .addField("`" + message.prefix +"tempmute`", "Silenciar temporariamente um membro.")
    .addField("`" + message.prefix +"unmute`", "Desmutar membro.")
    .addField("`" + message.prefix +"msent`", "Verificar mensagens enviadas até agora.")
    .addField("`" + message.prefix +"purge`", "Apaga as mensagens de um membro.")
    .addField("`" + message.prefix +"warn`", "Avisar um membro.")
    .addField("`" + message.prefix +"warnlvl`", "Verificar o nível de aviso de um usuário.")
    .setFooter("Requer o canal punições.")

message.channel.send(embed);
}

module.exports.help = {
  name: "mod"
}
