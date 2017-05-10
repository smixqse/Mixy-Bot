const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
const fs = require("fs")
exports.run = (bot, message, args) => {
    let database = JSON.parse(fs.readFileSync('./database/serversconfig.json', 'utf8'))
    if(!database[message.guild.id]) {
        message.channel.sendMessage(':green_book: | Não há nenhum comando personalizado neste servidor.')
    } else if (!database[message.guild.id].comandos) {
        message.channel.sendMessage(':green_book: | Não há nenhum comando personalizado neste servidor.')
    } else if (Object.keys(database[message.guild.id].comandos).length < 1) {
        message.channel.sendMessage(':green_book: | Não há nenhum comando personalizado neste servidor.')
    } else {
    const HelpEmbed = new Discord.RichEmbed()
    HelpEmbed.setAuthor('Solicitado por ' + message.author.username, message.author.avatarURL);
    HelpEmbed.addField('Comandos Personalizados:', '`' + Object.keys(database[message.guild.id].comandos).join('` `') + '`')
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
}}