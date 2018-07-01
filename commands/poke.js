const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let defineduser = message.mentions.users.first();
  let user = message.author
  message.delete();
  if(!args[1]){return message.reply("**Por favor especifique um motivo para cutucar.**")}
  if (!args[0]) {return message.reply(`**Por favor, especifique um usuário que você quer cutucar.**`)}
  else{             
  let reason = args.join(" ").slice(22);    
  let Embed = new Discord.RichEmbed()
   .setTitle('Cutucou 👉')
   .addField('Você acabou de ser cutucado.', `Por: ${user}`, true)
   .addField('Motivo', reason, true)
   .setColor(0xD4AF37)
    defineduser.send(Embed)
    message.channel.send("✔️ **| Esse membro foi cutucado.**")
                  }
}

module.exports.help = {
    name: "poke"
}