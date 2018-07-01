const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  message.delete();

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("❌ **| Você não tem permissões `Admin`.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(wUser === message.author) return message.channel.send("Você é retardado? Por que você quer se avisar??")
  if(!wUser) return message.reply("Não foi possível encontrar o usuário.");
  let reason = args.join(" ").slice(22);
if(!reason) return message.channel.send("Por favor, forneça um motivo!")
  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setTitle("Aviso")
  .setColor("#fc6400")
  .addField("Usuário", `${wUser.user.tag}`)
  .addField("Moderador", `${message.author.tag}`)
  .addField("Número de avisos", warns[wUser.id].warns)
  .addField("Motivo", `${reason ? reason : "None."}`);

  let warnchannel = message.guild.channels.find(`name`, "punições");
  if(!warnchannel) return message.channel.send("❌ **| Não foi possível encontrar o canal `punições`**");
  warnchannel.send(warnEmbed);
  message.channel.send("✔️ **| Esse usuário foi punido.**")

  
}

module.exports.help = {
  name: "warn"
}
