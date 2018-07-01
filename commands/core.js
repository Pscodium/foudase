const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Core")
    .setDescription("Existem atualmente 4 comandos nesta categoria.")
    .addField("`" + message.prefix +"help`", "Fornece uma lista de comandos disponíveis.")
    .addField("`" + message.prefix +"info`", "Fornecer informações sobre o bot.")
    .addField("`" + message.prefix +"bugreport`", "Reportar um erro.")
    .addField("`" + message.prefix +"prefix`", "Alterar o prefixo do bot. `[O padrão é p;]`")
    
    message.channel.send(embed)
}
module.exports.help = {
    name: "core"
}