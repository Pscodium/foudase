const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async(bot, message, args) => {
  superagent.get("https://nekos.life/api/neko", (err, res) => {
        if (err) { return console.log(`Ocorreu um erro durante a execução do comando neko. Correu por ${message.author.tag}.\nErro: ${err}`)}
    if(!message.channel.nsfw) {return message.channel.send(`:underage: **Este canal não está marcado como NSFW!** :angry: `)}
    else{
        message.channel.send("", { embed: new Discord.RichEmbed()
                                  .setTitle("Neko NSFW")
                                  .setColor(`${message.guild.me.displayHexColor!=='#16F04B' ? message.guild.me.displayHexColor : 0x16F04B}`)
                                  .setImage(res.body.neko)
                                  .setFooter(`Requisitado por ${message.author.tag}`)
                                 })
    }
    })
    message.delete().catch();

}
module.exports.help = {
	name: "neko"
}