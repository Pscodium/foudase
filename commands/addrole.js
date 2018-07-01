const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel("❌ **| Você não tem permissão `Administrador` Para utilizar o comando.**");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("❌ **| Esse usuário não foi encontrado!**");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("❌  **| Por favor, especifique o cargo!**");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("❌  **| Este cargo não existe.**");

  if(rMember.roles.has(gRole.id)) return message.reply("❌  **| Ele já possuí este cargo.**");
  await(rMember.addRole(gRole.id));
  message.channel.send(`✔️ | ${rMember} recebeu o cargo de ${gRole.name}.`).then(msg => msg.delete({timeout: 20000}));
  
}

module.exports.help = {
  name: "addrole"
}
