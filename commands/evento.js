
const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    var prefix = "p;"

if (!message.guild)return;
if (message.author !== '459128770239135764' && !message.content.startsWith(prefix + 'evento')) return;
if (message.content.startsWith(prefix + 'evento')){
var embed = new Discord.RichEmbed()
embed.setTitle('Anúncio de Evento do Servidor: '+message.guild.name)
embed.setImage('https://media.giphy.com/media/Basrh159dGwKY/giphy.gif')
// - embed.setThumbnail(message.author.avatarURL) // -imagem do autor
embed.setColor(65535)
// - embed.setThumbnail(message.guild.iconURL) // -imagem do server
embed.setThumbnail('https://media.giphy.com/media/MVRqTDSNEUZHHyQLDH/giphy.gif')
var desc = message.content.split(' ')
desc.shift()
for (var i=0; i  < message.guild.members.size;i++){
var member = message.guild.members.array()[i]
embed.setDescription(`${desc.join(' ')}`)
member.send({embed})
}}

}
module.exports.help = {
	name: "evento"
}