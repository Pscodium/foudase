const Discord = require('discord.js');

module.exports.run = async(bot, message, args) =>{
  let embed = new Discord.RichEmbed()
  .setTitle("Restart")
  .setDescription("Desculpe, o comando `restart` só pode ser executado pelo desenvolvedor.")
  .setColor("#cdf785");
  if(message.author.id !== '439915811692609536') return message.channel.send(embed);
  
message.channel.send(`Restartado em ${Math.floor(bot.ping)}ms`).then(() =>{
process.exit(1);
})
 

                                           }
module.exports.help = {
name: "restart"
}
                                           