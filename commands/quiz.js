const Discord = require('discord.js');
const quiz = [
  { q: "Qual é a cor do céu?", a: ["sem cor", "invisível"] },
  { q: "Nomeie uma marca de refrigerantes.", a: ["pepsi", "coca", "guarana", "agua da serra", "sprite", "soda"] },
  { q: "Nomeie uma linguagem de programação.", a: ["actionscript", "coffeescript", "c", "c++", "basic", "python", "perl", "javascript", "dotnet", "lua", "crystal", "go", "d", "php", "ruby", "rust", "dart", "java", "javascript"] },
  { q: "Quem é um bom menino?", a: ["Você é", "Pscodium"] },
  { q: "Quem me criou?", a: ["pscodium", "! Ｐｓｃｏｄｉｕｍ#4483"] },
  { q: "Que linguagem de programação eu fui criado?", a: ["javascript",] },
  { q: "Nome do sétimo planeta do sistema solar.", a: ["urano"] },
  { q: "Nomne da maior ilha do mundo.", a: ["greenland",] },
  { q: "Nome do rio mais longo do mundo?", a: ["amazonas", "rio amazonas"] },
  { q: "Nome do oceano mais largo.", a: ["pacífico", "oceano pacífico"] },
  { q: "Nome de uma das três cores primarias.", a: ["azul", "vermelho", "amarelo"] },
  { q: "Quantas cores tem um arco-íris?", a: ["7", "sete"] },
  { q: "Qual o nome dado à mil anos?", a: ["milênio"] },
  { q: "Quantas praças existem em um tabuleiro de xadrez?", a: ["64", "sessenta e quatro"] },
  { q: "Quantos graus tem um círculo?", a: ["360", "360 graus", "trezentos e sessenta"] },
  { q: "O sistema decimal de Dewey é usado para categorizar o que?", a: ["livros"] },
  { q: "Quantos pontos tem uma bússola?", a: ["32", "trinta e dois"] },
  { q: "Quantas cordas tem um violoncelo?", a: ["4", "quatro"] },
  { q: "Quantas sinfonias o beethoven compôs?", a: ["9", "nove"] },
  { q: "Quantos estados o Brasil tem?", a: ["27", "vinte e sete"] },
  { q: "Qual a linguagem mais fácil criada pela Microsoft?", a: ["visual basic"] },
  { q: "Qual a lingua mais complicada?", a: ["binária"] },
];
const options = {
  max: 1,
  time: 300000,
  errors: ["time"],
};

module.exports.run = async (bot, message, args) => {
  
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`Ganhador: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Resposta correta: \`${winnerMessage.content}\``)
                                 .setFooter(`Pergunta: ${item.q}`)
                                 .setColor(`${message.guild.me.displayHexColor!=='#55F016' ? message.guild.me.displayHexColor : 0x55F016}`)
                                })
  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor('Ninguém conseguiu a resposta à tempo!')
                                 .setTitle(`Resposta correta(s): \`${item.a}\``)
                                 .setFooter(`Pergunta: ${item.q}`)
                                })
  }
}
module.exports.help = {
name: "quiz"
}
