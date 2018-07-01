	const Discord = require("discord.js");

	module.exports.run = async (bot, message, args) => {

	var resultflip = Math.floor((Math.random() * 2) + 1);
	if (resultflip == 1) {

	const embedheads = new Discord.RichEmbed()
	.setTitle("Gira Moeda")
	.setColor("#F8A61C")
	.setDescription(`A moeda deu cara!`);
	message.channel.send(embedheads);
	} else if (resultflip == 2) {

	const embedtails = new Discord.RichEmbed()
	.setTitle("Gira Moeda")
	.setColor("#F8A61C")
	.setDescription(`A moeda deu coroa!`);
	message.channel.send(embedtails);
	}
	}

	module.exports.help = {
	name: "flip"
  }