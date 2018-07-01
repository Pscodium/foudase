const Discord = require('discord.js')



module.exports.run = async(bot, message, args) => {

  if(!message.member.roles.some(r=>["rainha banana", "banana escrava"].includes(r.name)) )
  return message.reply("Desculpe mas você não tem permissões para usar este comando!");
  let desc = message.content.split(' ').slice(1);
  let sayembed = new Discord.RichEmbed()
  // -.setDescription(`${desc.join(' ')}`)
  .setTitle("Anúncio qualquer de:  " + message.author.username)
  .setDescription(`${desc.join(' ')}`)
  .setColor("#F7FF00");
  message.delete().catch();
  return message.channel.send(sayembed);


}
module.exports.help = {
	name: "amarelo"
}
