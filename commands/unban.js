const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = args[0]
    if(!bUser) return message.channel.send("Usuário não encontrado!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("❌  **| Você não tem permissões de `Banir pessoas`.**");

  message.channel.send("✔️ **| Esse membro foi desbanido.**").then(msg => msg.delete({timeout: 20000}));
  message.guild.unban(bUser)
}

module.exports.help = {
  name:"unban"
}
