const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
exports.run = (bot, message, args) => {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    	   if (argsJunto.length !== 0) {
            message.channel.bulkDelete(1);
            message.channel.sendMessage(':speech_balloon: **|** **' + `${argsJunto}` + '**');
        } else {
            message.channel.sendMessage('<:vpRedTick:257437215615877129> | A sintaxe do comando está incorreta. Sintaxe correta: `' + parts[0] + ' Sou legal!`').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
        }
}