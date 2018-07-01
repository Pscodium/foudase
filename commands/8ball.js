const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[2]) return message.reply("Por favor, faça uma pergunta completa")
  let replies = ["É certo", "É decididamente assim",
										"Sem duvida",
										"Sim, definitivamente",
										"Como eu vejo, sim",
										"Provavelmente",
										"Sim",
										"Sinais apontam que sim",
										"Pergunte novamente mais tarde",
										"Melhor não te dizer agora",
										"Não é possível prever agora",
										"Concentre-se e pergunte novamente",
										"Não conte com isso",
										"Minha resposta é não",
										"Minhas fontes dizem não",
										"Muito duvidoso"];
  
  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");
  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#42f453")
  .addField("🎱Pergunta", question)
  .addField("🎱Resposta", replies[result]);
  message.channel.send(ballembed);
}
module.exports.help = {
  name: "8ball"
}
