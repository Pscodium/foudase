const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (bot, client, message, args, func) => {


    client.on ("guildMemberAdd", member => {


        var role = member.guild.roles.find("name", "novato");
        member.addRole (role);
      
        member.guild.channels.get('460134171235450890').send('**' + member.user.username + '**, Entrou no servidor!')
      
      })
    }