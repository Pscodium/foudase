
const Discord = require('discord.js');
const cheerio = require('cheerio');
var request = require('request');

module.exports.run = async (bot, message, args) => {
  
try{
  function getStatData(location, message , $){

  var selector = $('.stats-stat .value').eq(location).text();

  var stat_array = $.parseHTML(selector);

  var stat = 0;

  if(stat_array == null || stat_array.lengh == 0){
    message.channel.send("Usuário Inválido");
    return " ";
  }else{
    stat = stat_array[0].data;
  }

  return stat;
}

     var UR_L = "http://csgo.tracker.network/profile/" + args[0];

        if(!args[0]) return message.channel.send("Por favor, insira um STEAMID64 ou nome de usuário válido");
        

        request(UR_L, function(err, resp, body){

            $ = cheerio.load(body);

            var WIN = getStatData(1, message, $);
            var HS = getStatData(4, message, $);
            var MONEY = getStatData(5, message, $);
            var SCORE = getStatData(6, message, $);
            var KILLS = getStatData(7, message, $);
            var DEATHS = getStatData(8, message, $);
            var MVP = getStatData(9, message, $);
            var BS = getStatData(13, message, $);
            var BD = getStatData(14, message, $);
            var HR = getStatData(15, message, $);

            var STAT = new Discord.RichEmbed()

            .setTitle("CS:GO STATS")
            .setColor("#45b72c")           
            .addField("Vitórias", `${WIN}%`, true)
            .addField("Total de reféns salvos", HR, true)
            .addField("Total de dinheiro", MONEY, true)
            .addField("Pontuação total", SCORE, true)
            .addField("Total de kills", KILLS, true)
            .addField("Mortes totais", DEATHS, true)
            .addField("MVP", MVP, true)
            .addField("Bombas plantadas", BS, true)
            .addField("Bombas defusadas", BD, true)
            .addField("Tiros na cabeça", HS);
            message.channel.send(STAT);
           })
}catch(e){
message.channel.send("Não foi possível encontrar nenhum dado no usuário.")
}
}
        
        
        
module.exports.help = {
    name: "csgo"
}