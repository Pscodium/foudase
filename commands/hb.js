const hastebin = require('hastebin-gen');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
let code = args.join(" ")
try {
  hastebin(code, "js").then(r => {
    message.channel.send(r); 
})
}catch(e){
message.channel.send("Encontrou um erro com a API. Por favor, tente novamente mais tarde.")
}
}
module.exports.help = {
name: "hb"
}
