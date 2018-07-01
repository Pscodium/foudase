const Discord = require("discord.js");
const hastebin = require('hastebin-gen');
module.exports.run = async (bot, message, args) => {
	let users = bot.users;

	let searchTerm = args[0];
	if(!searchTerm) return message.channel.send("Por favor, forneça um termo de pesquisa.");
  
	let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
  let bestMatch = matches.map(u => u.tag).join("\n");
  if(bestMatch.length > 1000){
    hastebin(bestMatch, "txt").then(r => {
    message.channel.send(`A saída era muito grande. Os dados foram exportados para hastebin! ${r}`)
}).catch(console.error);
  
  }else{
  const embed = new Discord.RichEmbed()
            .setTitle("Todos os usuários encontrados.")
            .setColor(0x26a98b)
            .setDescription(bestMatch);
        message.channel.send(embed);
  }

}
 
module.exports.help = {
  name: "find"
}