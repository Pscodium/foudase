const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const {RichEmbed} = require('discord.js');

module.exports.run = async (client, message, args) => {

    if(args.length === 0) return message.channel.send("Deve ter algo para definir!");
    let word = args.join(" ");
                    const { body } = await snekfetch.get('https://api.urbandictionary.com/v0/define').query({ term: word });
                    const trim = (str, max) => (str.length > max) ? `${str.slice(0, max - 3)}...` : str;

                    if (body.result_type === 'no_results') {
                        const embed = new Discord.RichEmbed()
                        .setColor("#FF0000")
                        .setDescription(`Nenhum resultado encontrado para **${word}** :octagonal_sign: `)
                        message.channel.send(embed)
                    } else {
                        try{
                        const [answer] = body.list;
                        if(answer.example === "") {
                            answer.example = "None";
                        }

const embed = new Discord.RichEmbed()
    .setColor("#5ed0ed")
    .setTitle(word)
    .addField('Definição:', trim(answer.definition, 1024))
    .addField('Exemplo:', trim(answer.example, 1024))
    .addField('Votos positivos', `:arrow_up: ${answer.thumbs_up}`, true)
    .addField('Votos negativos', `:arrow_down: ${answer.thumbs_down}`, true)
    .addField("Tags:", ` ${body.tags.join(', ')}`);

message.channel.send(embed);
                        } catch(e) {
                            message.channel.send("Houve um erro, por favor, escolha uma palavra diferente!");
                        }
                    }
}

module.exports.help = {
    name: "define"
}