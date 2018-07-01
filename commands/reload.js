const Discord = require("discord.js")
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setTitle("Recarregamento")
  .setDescription("Desculpe, o comando `reload` só pode ser executado pelo desenvolvedor.")
  .setColor("#cdf785");
  if(message.author.id !== '439915811692609536') return message.channel.send(embed);

  try{
    delete require.cache[require.resolve(`./${args[0]}.js`)];
  let Aembed = new Discord.RichEmbed()
  .setTitle("Recarregando..")
  .setDescription(`${args[0]}.js recarregada com sucesso!`)

    return message.channel.send(Aembed);
     }catch(e){
     return message.channel.send("Não existe tal comando!")
     }
}; 

module.exports.help = {
name: "reload"
}
