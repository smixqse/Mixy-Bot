const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
const fs = require("fs")
let comandos = JSON.parse(fs.readFileSync('./comandos.json', 'utf8'))
exports.run = (bot, message, args) => {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ');
    if(argsJunto < 1) {
    const HelpEmbed = new Discord.RichEmbed()
    HelpEmbed.setAuthor('Solicitado por ' + message.author.username, message.author.avatarURL);
    HelpEmbed.addField('Comandos', '`' + Object.keys(comandos).join('` `') + '`\n\n**Prefix:** `mixy.` ou `m.`\n\nPara ver mais sobre um comando, execute `mixy.help (comando)`.\n**Exemplo:** `mixy.help poll`')
    HelpEmbed.setFooter('Mixybot criado por SMix.', 'https://cdn.discordapp.com/avatars/294881981630644224/fa9e90b10df8173085dd4a84ab67f52f.webp?size=1024');
    if(message.channel.type === 'dm') {
        message.channel.sendEmbed(HelpEmbed)
    } else {
        if(message.member.highestRole.color !== undefined) {
            HelpEmbed.setColor(message.member.highestRole.color)
            if(message.guild.member(bot.user).hasPermission('EMBED_LINKS')) {
                message.channel.sendEmbed(HelpEmbed)
            } else {
                message.author.sendEmbed(HelpEmbed);
                message.channel.sendMessage(':warning: | Eu não tenho a permissão `EMBED_LINKS` neste servidor. O resultado foi enviado por privado.');
            }
        }
    }
} else {
    if(Object.keys(comandos).some(a => a === args[0])) {
        const HelpEmbed = new Discord.RichEmbed()
        HelpEmbed.setAuthor('Solicitado por ' + message.author.username, message.author.avatarURL);
        HelpEmbed.setTitle('mixy.' + Object.keys(comandos)[Object.keys(comandos).findIndex(a => a === args[0])])
        HelpEmbed.setDescription(comandos[args[0]].description + '\n\n**Uso: **' + comandos[args[0]].usage)
        if(message.channel.type === 'dm') {
        message.channel.sendEmbed(HelpEmbed)
    } else {
        if(message.member.highestRole.color !== undefined) {
            HelpEmbed.setColor(message.member.highestRole.color)
            if(message.guild.member(bot.user).hasPermission('EMBED_LINKS')) {
                message.channel.sendEmbed(HelpEmbed)
            } else {
                message.author.sendEmbed(HelpEmbed);
                message.channel.sendMessage(':warning: | Eu não tenho a permissão `EMBED_LINKS` neste servidor. O resultado foi enviado por privado.');
            }
        }
    }
    } else {
        message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você não escreveu um comando correto.')
    }
}}