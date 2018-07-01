const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
message.delete();
  
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("❌ **| Você não tem permissões de `Admin`.**");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Não foi possível encontrar o usuário.");
  let muterole = message.guild.roles.find(`name`, "Muted");
  
  if(!muterole) return message.channel.send("❌ **| Por favor, crie um cargo chamado `Muted`.**")
  

  await(tomute.removeRole(muterole.id));
  let reason = args.join(" ").slice(22)
    let Embed = new Discord.RichEmbed()
  .setTitle("Desmutar")
  .setColor("#fc6400")
  .addField("Usuário", tomute.user.tag)
  .addField("Moderador", message.author.tag)
  .addField("Motivo", `${reason ? reason : "None"}`)
  .setTimestamp()
  message.channel.send("✔️ **| Este membro foi Desmutado.**")
let channel= message.guild.channels.find(`name`, 'punições')
if(!channel) return message.channel.send("❌ **| Por favor, crie um canal punições!**")
  channel.send(Embed)

}

module.exports.help = {
  name: "unmute"
}
