const Discord = require("discord.js");
const weather = require('weather-js')
module.exports.run = async (bot, message, args) => {

weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
  if (err) message.channel.send(err);

if(result === 0){
message.channel.send("**Por favor, forneça uma localização válida.**")
return;
}

  var current = result[0].current;
  var location = result[0].location;


	
    let embed = new Discord.RichEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Clima De ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor(0x00AE86)
    .addField('Tipo da hora', `BRT${location.timezone}`, true)
    .addField('Escala de Graus', location.degreetype, true)
    .addField('Temperatura', `${current.temperature} Graus`, true)
    .addField('Sensação de', `${current.feelslike} Graus`, true)
    .addField('Ventos', current.winddisplay, true)
    .addField('Umidade', `${current.humidity}%`, true)
    message.delete().catch();
    message.channel.send(embed)
});
  

}

module.exports.help = {
  name: "clima"
}
