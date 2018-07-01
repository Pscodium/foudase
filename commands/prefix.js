const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("❌ **| Você não tem permissões de `Administrador`.**");
  if(!args[0]) return message.channel.send("Por favor, especifique algo!")

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Customização do Prefixo")
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor("RANDOM")
  .addField(`Adcionou o prefixo`, `\`${args[0]}\``);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}