const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
exports.run = (bot, message, args) => {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    let usermentioned = message.mentions.users.first();
        if (usermentioned === undefined) {
            message.channel.sendMessage('<:vpRedTick:257437215615877129> | O usuário mencionado não é um bot. (ou ninguém foi mencionado)').then(message => {
                                setTimeout(() => {message.delete()}, 5000)
                            })
        } else if (usermentioned.bot) {
            message.channel.sendMessage('<:vpGreenTick:257437292820561920> | O link de convite para o bot **' + usermentioned.username + '** é: **<https://discordapp.com/oauth2/authorize?&client_id=' + usermentioned.id + '&scope=bot>**.');
        } else {
            message.channel.sendMessage('<:vpRedTick:257437215615877129> | O usuário mencionado não é um bot. (ou ninguém foi mencionado)').then(message => {
                                setTimeout(() => {message.delete()}, 5000)
                            })
        }
}