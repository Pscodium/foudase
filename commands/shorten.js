  const shorten = require('isgd');
  const Discord = require('discord.js');
  module.exports.run = async(bot, message, args) => {
    if(!args[0]) return message.reply("Você tem que dar um URL para encurtar!");
    
    if(!args[1]){
    shorten.shorten(args[0]), function(res) {
    if(res.startsWith('Error:')) return message.channel.send("**Por favor insira um <URL> válido**");
       message.channel.send(`**${res}**`);
    }
    
} else {
    shorten.custom(args[0], args[1], function(res) {
      if(res.startsWith('Error:')) message.channel.send("**Por favor insira um <URL> válido**");
       message.channel.send(`**${res}**`);
    
    })
    
    
    }
  }
  module.exports.help = {
    name: "shorten"
    }