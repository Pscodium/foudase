const Discord = require('discord.js');
const figlet = require('figlet');
module.exports.run = async(bot, message, args) => {
if(!args[0]) return message.reply('Por favor, forneça algo para converter.');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
module.exports.help = {
name: "ascii"
}