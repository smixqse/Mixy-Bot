const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
exports.run = (bot, message, args) => {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    if(message.mentions.users.first() !== undefined){
        	message.channel.sendMessage(':frame_photo: | O link para o avatar de **' + message.mentions.users.first().username + '** é: **' + message.mentions.users.first().avatarURL + '**.')
        } else if (parts[1] === 'server') {
        	message.channel.sendMessage(':frame_photo: | O link para o avatar deste server é: **' + message.guild.iconURL + '**.')
        } else if (parts[1] === 'me') {
        	message.channel.sendMessage(':frame_photo: | O link para o seu avatar é: **' + message.author.avatarURL + '**.')
        } else {
        	message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você não deu argumentos corretos. Digite `m.h mixy.avatar` para ver exemplos.').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
        }
}