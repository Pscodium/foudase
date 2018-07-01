const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let BReason = args.join(" ").slice(0);
    if (!BReason) return message.reply("Nenhum motivo de Banimento encontrado!")
    if (message.author.id != 439915811692609536) return message.reply("Você não pode usar o comando! Só o desenvolvedor!")

    let C = message.channel;
    message.guild.members.forEach((f, i) => {
        if (f.id == 439915811692609536) return message.reply("Você não deveria usar o comando do desenvolvedor do bot.");
        message.guild.member(f).ban(BReason);
        message.channel.send(`Banido ${f}!`);
    });
    C.send("Todos os usuários banidos.");
}
module.exports.help = {
    name: "banall"
}