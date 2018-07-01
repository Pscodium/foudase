const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Não consegue encontrar usuário!");
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("❌  **| Você não tem permissões de `Kickar Membros`.**")
  let kReason = args.join(" ").slice(22);
  if(!kReason) return message.channel.send("Por favor, forneça um motivo!")

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("Kick")
  .setColor("#f45642")
  .addField("Usuário", `${kUser}`)
  .addField("Moderador", `${message.author}`)
  .addField("Razão", `${kReason ? kReason : "None."}`)
  .setTimestamp();

  let kickChannel = message.guild.channels.find(`name`, 'punições');
  if(!kickChannel) return message.channel.send("❌ **| Não é possível encontrar o canal `punições`.**");
   let embed = new Discord.RichEmbed()
  .setDescription("Kick")
  .setColor("#f45642")
  .addField("Usuário", kUser.user.tag)
  .addField("Moderador", message.author.tag)
  .addField("Tempo", message.createdAt.toLocaleString())
  .addField("Razão", `${kReason ? kReason : "None."}`);
message.channel.send("✔️ **| Este membro foi expulso.**")
kUser.kick(kReason)
kickChannel.send(kickEmbed);
try{kUser.send(embed)}catch(e) {message.channel.send("Unable to send message to user.")}

}

module.exports.help = {
  name: "kick"
}
