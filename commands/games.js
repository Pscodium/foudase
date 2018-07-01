const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle("🎮 Jogos")
    .addField("`" + message.prefix + "fortnite`", "Verificar as estatísticas de um usuário do fortnite!")
    .addField("`" + message.prefix +"csgo`", "Verifique o cs de um usuário: go stats!");
    message.channel.send(embed);
    
}
module.exports.help = {
    name: "games"
}