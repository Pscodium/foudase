const Discord = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports.run = async(bot, message, args) => {
  if(message.author.bot) return;
  if(message.channel.type !== "text") return;
  randomPuppy('porn')
            .then(url => {
                const embed = new Discord.RichEmbed()
                
                .setTitle("Pornô NSFW")
                .setImage(url)
                .setColor(`${message.guild.me.displayHexColor!=='#16F04B' ? message.guild.me.displayHexColor : 0x16F04B}`)
                message.delete().catch();
    return message.channel.send({ embed });
            })
}
module.exports.help = {
	name: "dog"
}