const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("❌ | Você não tem permissões de  `Admin` .");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("❌ | Não foi possível encontrar esse usuário.");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("❌ | Especifique um cargo!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("❌ | Não foi possível encontrar esse cargo.");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("❌ **| Eles não têm esse cargo.**");
  await(rMember.removeRole(gRole.id));
  message.channel.send(`RIP, ${rMember} você perdeu o ${gRole.name} cargo!`)
  
}

module.exports.help = {
  name: "removerole"
}