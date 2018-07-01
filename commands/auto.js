const Discord = require('discord.js');
const sm = require('string-similarity');
module.exports.run = async(bot, message, args) => {
if (!args[0]) message.reply('Por favor insira algum texto para autocompletar.');
let members = [];
let indexes = [];

message.guild.members.forEach(function(member){
members.push(member.user.username);
indexes.push(member.id);

})
 let match = sm.findBestMatch(args.join(''), members);
let username = match.bestMatch.target;

let user = message.guild.members.get(indexes[members.indexOf(username)]);
  let aEmbed = new Discord.RichEmbed()
  .setDescription('Você quer dizer: ' + `**${user}**`)
      .setColor('BLUE');
      message.channel.send(aEmbed);
      
}
module.exports.help = {
	name: "auto"
}