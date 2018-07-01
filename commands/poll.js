const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  if (args == 0) return message.channel.send("Por favor, forneça um tópico de enquete.")

  let embed = new Discord.RichEmbed()
  .setTitle(`Enquete por ${message.author.username}`)
  .setColor("#ffff00")
  .setDescription(`${args}`.split(',').join(' '));

  return message.channel.send(embed).then(message.delete())

  .then(function (message, str) {
       message.react("✅")
       message.react("⛔")
     }).catch(function() {
  });
};

module.exports.help = {
  name: 'poll'
};
