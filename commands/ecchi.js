const Discord = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports.run = async(bot, message, args) => {
  if(!message.channel.nsfw) return message.channel.send(`:underage: **Este canal não está marcado como NSFW!** :angry: `)
  randomPuppy('ecchi')
            .then(url => {
                const embed = new Discord.RichEmbed()
                
                .setTitle(`Ecchi NSFW`)
                .setFooter(`Requerido por ${message.author.tag}`)
                .setImage(url)
                .setColor(`${message.guild.me.displayHexColor!=='#16F04B' ? message.guild.me.displayHexColor : 0x16F04B}`)
                message.delete().catch();
    return message.channel.send({ embed });
            })
}
module.exports.help = {
	name: "ecchi"
}