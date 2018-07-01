const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(bUser === message.author) return message.channel.send("Você é retardado? Por que você quer se banir?")
    if(!bUser) return message.channel.send("Não consegue encontrar usuário!");
    let bReason = args.join(" ").slice(22);
   if(!bReason) return message.channel.send("Por favor, forneça um motivo!")
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("❌ **|Você não tem permissões para banir alguém.**");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#bc0000")
    .addField("Usuário", bUser.user.tag)
    .addField("Moderador", message.author.tag)
    .addField("Razão", `${bReason ? bReason : "None."}`)
    .setTimestamp()
    let incidentchannel = message.guild.channels.find(`name`, "punições");
    if(!incidentchannel) return message.channel.send("❌ **| Não é possível encontrar o canal `punições`.**");
    let embed = new Discord.RichEmbed()
    .setTitle("BAN")
    .addField("Banido em", message.guild.name)
    .setColor("#1655F0")
    .addField("Moderador", message.author.tag)
    .addField("Razão", `${bReason ? bReason : "Nenhum."}`)
  message.channel.send("✔️ **| Esse membro foi banido.**")
  bUser.ban(bReason)
  incidentchannel.send(banEmbed);
  try{bUser.send(embed)}catch(e){message.channel.send("Não é possível enviar mensagem para o usuário.")}

}

module.exports.help = {
  name:"ban"
}
