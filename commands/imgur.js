const Discord = require("discord.js");
const snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args) => {

  const query = args.join(' ')
   if(!query) return message.channel.send(`Para este comando funcionar, você precisa colocar algo para pesquisar.`)
  const noRes = args.join(' ')
const bannedwords = ['porn', 'pornhub', 'big tits', 'black dick', 'black cock', 'pussy', 'hentai', 'nsfw', 'ecchi'];
if(query.includes(bannedwords)) {
message.channel.send(":underage: Este não é um canal nsfw :underage:")
}else{
 
  const { body } = await snekfetch
				.get(`https://api.imgur.com/3/gallery/search/?q=${query}`)
				.set({ Authorization: `Client-ID ${process.env.IMGUR}` });
const images = body.data.filter(image => image.images && (message.channel.nsfw ? true : !image.nsfw));
			if (!images.length) return message.channel.send('Nenhum resultado encontrado para:' + ` **${noRes}**`);
			
  return message.channel.send({embed: new Discord.RichEmbed()
                               .setImage(images[Math.floor(Math.random() * images.length)].images[0].link)
                               .setColor(`${message.guild.me.displayHexColor!=='#16F04B' ? message.guild.me.displayHexColor : 0x16F04B}`)
                               
                               .setTimestamp(new Date())
                              })
  }
  
}


module.exports.help = {
  name: "imgur"
}
