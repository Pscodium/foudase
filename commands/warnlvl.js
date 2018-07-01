const Discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Você não tem permissões `admin`.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Não foi possível encontrar o usuário.");
  let warnlevel = warns[wUser.id].warns;

  let embed = new Discord.RichEmbed()
  .setTitle("Avisos")
  .addField("Usuário", wUser.user.tag)
  .addField("Moderador", message.author.tag)
  .addField("Número de avisos", `${warnlevel}`)
  .setColor("#f4b342")
  message.channel.send(embed);

}

module.exports.help = {
  name: "warnlvl"
}
