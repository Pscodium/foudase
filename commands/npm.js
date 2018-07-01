        const Discord = require('discord.js')
        const snek = require('snekfetch');
        const moment = require('moment');
        require('moment-duration-format');
        module.exports.run = async (bot, message, args) => {

        if (args.length === 0) return message.reply('You must supply a search term.');
        const query = args.join(' ');
        try {
        const { body } = await snek.get(`https://registry.npmjs.com/${query.toLowerCase()}`);
        // Get the latest version by the dist-tags.
        const version = body.versions[body['dist-tags'].latest];
        // Get and check for any dependencies.
        let deps = version.dependencies ? Object.keys(version.dependencies) : null;
        // Grab the list of maintainers.
        let maintainers = body.maintainers.map(user => user.name);
        let github = version.repository.url
        let gitshort = github.slice(23, -4)


        // If there's more than 10 maintainers, we want to truncate them down.
        if (maintainers.length > 10) {
        const len = maintainers.length - 10;
        maintainers = maintainers.slice(0, 10);
        maintainers.push(`...${len} more.`);
        }

        // Same with the dependencies.
        if (deps && deps.length > 10) {
        const len = deps.length - 10;
        deps = deps.slice(0, 10);
        deps.push(`...${len} more.`);
        }

        function customTemplate() {
        return this.duration.asSeconds() >= 86400 ? "w [weeks], d [days]" : "h [hrs], m [mins], s [secs]";
        }

        let updated = moment.duration(Date.now() - new Date(body.time[body['dist-tags'].latest]).getTime()).format(customTemplate, {
        trim: false
        });

        // Now we just need to present the data to the end user.
        const embed = new Discord.RichEmbed()
        .setColor(0xCB3837)
        .setAuthor(`${body.name} - npmjs Informação do Pacote`, 'https://i.imgur.com/ErKf5Y0.png')
        .setThumbnail('https://i.imgur.com/8DKwbhj.png')
        .addField(`Descrição`, `${version.description || 'Sem descrição.'}\n\u200B`)

        .addField('Última modificação', `${updated} atrás`, true)
        .addField('Versão', `${body['dist-tags'].latest}`, true)
        .addField('Licença', `${body.license}\n\u200B`, true)
        .addField('Mantenedores', maintainers.join(', '), true)

        .addField('Dependências', `${deps && deps.length ? deps.join(', ') : '*None*'}\n\u200B`, false)
        .addField('\`NPMjs Pacote\`', `[\`https://www.npmjs.com/package/${query.toLowerCase()}\`](https://www.npmjs.com/package/${query.toLowerCase()})`)
        .addField('\`Github Repository\`', `[\`https://www.github.com/${gitshort}\`](https://www.github.com/${gitshort})`)

        message.channel.send({embed});
        } catch (error) {
        if(error.status == 404) return message.channel.send('**Não foi possível encontrar nenhum resultado.**');
        console.log(error);
        }  

        }
        module.exports.help = {
        name: "npm"
        }