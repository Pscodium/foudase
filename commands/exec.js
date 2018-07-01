const exec = require('child_process').exec;
const Discord = require('discord.js');

module.exports.run = async(bot, message, args, level) => {
    let embed = new Discord.RichEmbed()
  .setTitle("Evaluation")
  .setDescription("Desculpe, o comando `eval` só pode ser executado pelo desenvolvedor.")
  .setColor("#cdf785");
  if(message.author.id !== '439915811692609536') return message.channel.send(embed);
    exec(`${args.join(' ')}`, (error, stdout) => {
      const response = (error || stdout);
      let embed = new Discord.RichEmbed()
      .setTitle(`Executado em ${Math.round(bot.ping)}ms`)
      .addField(":inbox_tray: Entrada", `\`\`\`asciidoc\n${args.join(" ")}\n\`\`\``)
      .addField(":outbox_tray: Saída", `\`\`\`js\n${response}\n\`\`\``)
      .setColor('GREEN');
      message.channel.send({embed});
    });
}
module.exports.help = {
name: "exec"
}
