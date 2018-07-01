const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("😆 Diversão")
    .setTimestamp()
    .addField("`" + message.prefix +"8ball`", "Pergunte ao mágico 8ball uma pergunta.")
    .addField("`" + message.prefix +"avatar`", "Obter avatar de um membro.")
    .addField("`" + message.prefix +"doggo`", "Obter uma imagem aleatória de um cachorro.")
    .addField("`" + message.prefix +"cat`", "Obter uma imagem aleatória de um gato.")
    .addField("`" + message.prefix +"meme`", "Obter um meme aleatório")
    .addField("`" + message.prefix +"joke`", "Obter uma piada aleatória.")
    .addField("`" + message.prefix +"roll`", "Role um número entre 1-100")
    .addField("`" + message.prefix +"poke`", "Cutucar um usuário.")
    .addField("`" + message.prefix +"slots`", "Role os slots!")
    message.channel.send(embed)
}
module.exports.help = {
    name: "fun"
}