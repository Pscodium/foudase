const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("📊 Utilidades")
.addField("`" + message.prefix +"ascii`", "Gera um texto ascii.")
.addField("`" + message.prefix +"auto`","Completar automaticamente um nome de usuário.")
.addField("`" + message.prefix + "avatar`", "Gerar avatar de um membro.")
.addField("`" + message.prefix +"define`", "Defina um determinado termo.")
.addField("`" + message.prefix +"encrypt`", "Criptografar um argumento.")
.addField("`" + message.prefix + "decrypt`", "Descriptografar um argumento criptografado.")
.addField("`" + message.prefix +"find`", "Encontre nomes de usuários com um determinado termo.")
.addField("`" + message.prefix + "imgur`", "Obtenha uma imagem imgur com base no termo de pesquisa.")
.addField("`" + message.prefix +"hb`", "Hastebin seu código")
.addField("`" + message.prefix +"google`", "Google um termo.")
.addField("`" + message.prefix +"tranlate`", "Traduzir um termo.")
.addField("`" + message.prefix +"remind`", "Você sabe o que é isso.")
.addField("`" + message.prefix +"npm`", "Fornecer informações sobre um pacote npm.")
.addField("`" + message.prefix +"randomdefine`", "Dê a definição de uma palavra aleatória.")
.addField("`" + message.prefix + "ping`", "Dê latência e pulsação do Discord.")
.addField("`" + message.prefix +"shorten`", "Encurtar um URL.")
.addField("`" + message.prefix +"svs`", "Mostrar os servidores em que o bot está.")
.addField("`" + message.prefix +"clima`", "Fornecer informações sobre o tempo de uma região.")

message.channel.send(embed);
}

module.exports.help = {
  name: "utils"
}
