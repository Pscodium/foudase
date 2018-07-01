const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
message.delete();
if(!args[0]) return message.channel.send("Por favor, forneça seu id de bot!")
if(!args[1]) return message.channel.send("Por favor, forneça um prefixo!")
if(message.guild.members.has(args[0])) return message.channel.send("**Este bot já está no servidor. Você não pode ver? -_-**")
let channel = bot.channels.get("460421799625359361");
if(message.channel !== channel){
return message.channel.send("Este comando só funciona no canal `bot-invite`.")
}else{
bot.fetchUser(args[0]).then(i => {
let embed = new Discord.RichEmbed()
.setTitle("Bot adicionado à fila!")
.setDescription(`/Obrigado ${message.author} Por convidar o bot. Será primeiro testado e revisado antes [inviting](https://discordapp.com/oauth2/authorize?client_id=${args[0]}&permissions=0&scope=bot), então, por favor, seja paciente.`)
.addField("Convidado por", `\`${message.author.username}\``, true)
.addField("ID", `\`${args[0]}\``, true)
.addField("Prefixo", `\`${args[1]}\``, true)
.addField("Username", `\`${i.username}\``, true)
.setColor(`${message.guild.me.displayHexColor!=='#16F04B' ? message.guild.me.displayHexColor : 0x16F04B}`)
.setThumbnail(i.displayAvatarURL)
channel.send(embed).then(msg => msg.react('⏳'))
})
}
}
module.exports.help = {
name: "invite"
}