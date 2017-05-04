const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
const fs = require("fs")
exports.run = (bot, message, args) => {
	let argsJunto = message.content.split(" ").slice(1).join(' ')
	if(message.author.id === '205319106608627722') {
    if(argsJunto.length < 1) {
    	message.channel.sendMessage(`<:vpRedTick:257437215615877129> | Diga um comando para ser resetado.`); 
    } else {
    	delete require.cache[require.resolve(`./${args[0]}.js`)];
    	message.channel.sendMessage('<:vpGreenTick:257437292820561920> | O comando `' + argsJunto + '` foi resetado.'); 
    }
  // the path is relative to the *current folder*, so just ./filename.js
} else {
  	message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você não tem permissão para executar este comando.')
  }
}