
// Calling the Packages and Files
const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const fs = require("fs");
let bot = new Discord.Client();
bot.commands = new Discord.Collection();
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL_TOKEN, bot);
const db = require('quick.db');
let client = new Discord.Client();



// Ready event
bot.on('ready', () => {
  console.log("Carregando...");
  setTimeout(function(){
  console.log("Bot foi carregado com sucesso.");
  }, 1000);

// Bot Status
function botStatus() {
  let status = [
    `Meu prefixo é ${botconfig.prefix}.`,
    `Em ${bot.guilds.size} Servidores.`,
    `By: Pscodium.`,
    `Com ${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Usuários.`
  ];
  let rstatus = Math.floor(Math.random() * status.length);
  bot.user.setActivity(status[rstatus], {Type: 'STREAMING'});        
}; setInterval(botStatus, 20000)
  setInterval(() => {
    dbl.postStats(bot.guilds.size)
  }, 1800000);
});


// Message event
bot.on("message", async message => {
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  };
	
  let prefix = prefixes[message.guild.id].prefixes;
	if(message.author.bot) return undefined;
	if(message.channel.type === 'dm') return;
    
// Bot Mention Embed
  if(message.content.toLowerCase() === '<@421925809532436481>'){
    let embed = new Discord.RichEmbed()
    .setTitle("KlurryBot")
    .addField("Prefixo", `\`${prefix}\``, true)
    .addField("help", `\`${prefix}help\``, true)
    .setThumbnail(bot.user.displayAvatarURL)
    .setColor(`${message.guild.me.displayHexColor!=='#55F016' ? message.guild.me.displayHexColor : 0x55F016}`);
    message.channel.send(embed);
  };

	let args = message.content.slice(prefix.length).trim().split(" ");
	let cmd = args.shift().toLowerCase();
	if(message.author.bot) return undefined;
	if(!message.content.startsWith(prefix)) return undefined;
  message.prefix = prefix;
  
	try {
	let commandFile = require(`./commands/${cmd}.js`);
	commandFile.run(bot, message, args);
    
	if(!commandFile) return message.channel.send("Klurry Erro: Nenhum comando encontrado com esse nome.");
  
  console.log(`[${message.author.tag}]: Comando: "${cmd}" [${message.guild.name}]`);
	} catch (err) {
    console.log(`Klurry Erro: Eu encontrei um erro ao carregar meus comandos!\n${err.stack}`);
  };   
});


bot.on('guildMemberAdd', member => {
  let channel = bot.channels.get("460134171235450890");
  
  const embed = new Discord.RichEmbed()
  .setColor("#55F016")
  .setThumbnail(member.user.displayAvatarURL)
  .setAuthor(`Usuário entrou no ${member.guild.name}.`)
  .setDescription(`${member.displayName} **Entrou no servidor.**`)
  .setTimestamp()
  .setFooter(`Usuário entrou | ${member.guild.memberCount} Membros`)
  .setImage('https://media.giphy.com/media/ChX3hzy5CkXsI/giphy.gif')
  channel.send(embed);
});






// Guild Join event
	bot.on('guildCreate', guild => {
	  let channel = bot.channels.get("428564028239904790");
    
    const embed = new Discord.RichEmbed()
    .setColor("#55F016")
    .setAuthor(`Entrou ${guild.name}`)
    .setThumbnail(guild.iconURL)
    .addField("Dono", guild.owner.user.tag)
    .addField("ID", guild.id, true)
    .addField("Usuários", guild.memberCount, true)
    .addField("Canais", guild.channels.size, true)
    channel.send(embed);
	});

// Guild Leave event
	bot.on('guildDelete', guild => {
	  let channel = bot.channels.get("460134171235450890");
    
    const embed = new Discord.RichEmbed()
    .setColor("#55F016")
    .setAuthor(`Saiu ${guild.name}`)
    .setThumbnail(guild.iconURL)
    .addField("Dono", guild.owner.user.tag)
    .addField("ID", guild.id, true)
    .addField("Usuários", guild.memberCount, true)
    .addField("Canais", guild.channels.size, true)
    channel.send(embed);
	});

// Tritax AI Login:
	bot.login('NDU5MTI4NzcwMjM5MTM1NzY0.DgxuYg.Fftx7IdnMQIWoi9WpuDdg2cWj2o');