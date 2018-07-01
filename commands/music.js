const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("Music")
    .setDescription("Existem atualmente 8 comandos nesta categoria.")
    .addField("`" + message.prefix +"play`", "Reproduzir url ou pesquisar um vídeo no youtube.")
    .addField("`" + message.prefix +"np`", "Mostra o que está ouvindo agora.")
    .addField("`" + message.prefix +"stop`", "Pare a música atualmente sendo reproduzida.")
    .addField("`" + message.prefix +"queue`", "Mostra a fila.")
    .addField("`" + message.prefix +"skip`", "Ignora a música que está sendo reproduzida no momento.")
    .addField("`" + message.prefix +"volume`", "Definir o volume da música.")
    .addField("`" + message.prefix +"resume`", "Retomar a música pausada.")

message.channel.send(embed);
}

module.exports.help = {
  name: "music"
}
