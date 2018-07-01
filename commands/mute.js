const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
message.delete();
  
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("❌ | Você não tem permissões de `Administrador`.");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(tomute === message.guild.member(message.author)) return message.channel.send("Você é retardado? Por que você quer se silenciar?")
  if(!tomute) return message.channel.send("Não foi possível encontrar o usuário.");
  let muterole = message.guild.roles.find(`name`, "Muted");

let reason = args.join(" ").slice(22)
  await(tomute.addRole(muterole.id));
  let Embed = new Discord.RichEmbed()
  .setTitle("Mutar")
  .setColor("#fc6400")
  .addField("Usuário", tomute.user.tag)
  .addField("Moderador",message.author.tag)
  .addField("Razão", `${reason ? reason : "None."}`)
  .setTimestamp();
 message.channel.send("✔️ **| Este usuário foi mutado.**")
let channel= message.guild.channels.find(`name`, 'punições')
if(!channel) return message.channel.send("❌  **| Por favor, crie um canal de punições!")
  channel.send(Embed)
  }

module.exports.help = {
  name: "mute"
}
