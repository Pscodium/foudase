const Discord = require('discord.js'); 
const botconfig = require('../botconfig.json');

module.exports.run = async (bot, message, args) => {
  let guild = message.guild;
  let icon = message.guild.iconURL;

  let createdAtRaw = guild.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");
  let bots = message.guild.members.filter(m => m.user.bot).size;
  let humans = message.guild.members.filter(m => !m.user.bot).size;
  let channels = message.guild.channels.size;
  let textChannels = message.guild.channels.filter(m => m.type == "text").size;
  let voiceChannels = message.guild.channels.filter(i => i.type == "voice").size;
  let emojis = [];
  guild.emojis.forEach(emoji => {
  emojis.push(`\`${emoji}\``);
  });
  emojis.length === 0 ? emojis = "None" : emojis = emojis.join(", ");

  let roles = [];
  guild.roles.forEach(role => {
    roles.push(`\`${role.name}\``);
  });
  roles = roles.join(", ");

  let embed = new Discord.RichEmbed()
  .setTitle(`**Server Stats**`)
  .setColor(botconfig.white)
  .setThumbnail(icon)
  .addField('Nome do Servidor', guild.name, true)
  .addField('ID do Server', guild.id, true)
  .addField('Dono do Server', `${guild.owner.user.tag}`, true)
  .addField('Criado em', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
  .addField('Região', guild.region.toUpperCase(), true)
  .addField('Membros:', guild.memberCount, true)
  .addField('Bots:', bots, true)
  .addField('Usuários:', humans, true)
  .addField('Nível de verificação', guild.verificationLevel, true)
  .addField('Canais de texto', textChannels, true)
  .addField('Canais de voz', voiceChannels, true)
  .addField(`Cargos`, `${guild.roles.size}`, true)
  .addField(`Emojis`, `${guild.emojis.size}`, true)

  return message.channel.send(embed);
}


module.exports.help = {
  name: "serverstats"
}



