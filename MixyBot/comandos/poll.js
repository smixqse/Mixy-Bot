const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
exports.run = (bot, message, args) => {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    const pollcommand = new Discord.RichEmbed();
    if(args.length === 0) {
    	message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você não deu argumentos.').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
    } else {
        pollcommand.setAuthor('Votação por ' + message.author.username, message.author.avatarURL);
        if (message.member.highestRole.color !== undefined) {
            pollcommand.setColor(message.member.highestRole.color);
        }
        pollcommand.setDescription(`${argsJunto}`);
        pollcommand.setTimestamp();
        if (parts.length > 1) {
            if (message.channel.permissionsFor(message.guild.member(bot.user)).hasPermission('EMBED_LINKS')) {
                message.channel.sendEmbed(pollcommand).then(message => {
                    message.react('👍').then(message.react('👎'))
                })
            } else {
                message.channel.sendMessage(':x: | Eu não posso criar a votação, pois não tenho a permissão `EMBED_LINKS`.').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
            }}
}}