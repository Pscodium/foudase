const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const ms = require('ms');
module.exports.run = async (bot, message, args) => {

  let role = message.member.roles.map(r => `${r.name}`)
  
  let uEmbed = new Discord.RichEmbed()
  .setTitle("Informações do usuário")
  .setColor("#e0d318")
  .setThumbnail(message.author.displayAvatarURL)
  .addField("**Username**", message.member.displayName, true)
  .addField("**Discriminador**", message.author.discriminator, true)
  .addField("**ID**", message.author.id, true)
  .addField("**Bot**", `${message.author.bot ? "Sim" : "Não"}`, true)
  .addField("**Cargo**", `${role}`, true)
  .addField("**Status**",`${message.member.presence.status}`)
  .addField("**Tags**", `${message.member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Sem cargos"}`, true)
  .addField("**Jogando**", `${message.member.presence.game ? `${message.member.presence.game.name}` : "Não está jogando nada."}`)
  .addField("**Conta criada em**", `${moment.utc(message.author.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (${ms(Date.now()- message.author.createdAt, {long: true})})`)
  .addField("**Entrou em**", `${moment.utc(message.member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (${ms(Date.now()- message.member.joinedAt, {long: true})})`);

  message.channel.send(uEmbed);
}

module.exports.help = {
  name: "userstats"
}



