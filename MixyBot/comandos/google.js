const Discord = require("discord.js");
var google = require("google")
const config = require("../config.json")

exports.run = (bot, message, args) => {
/*	let argsJunto = message.content.split(" ").slice(1).join(' ')
	if(argsJunto.length < 1) {
		message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você não deu argumentos da pesquisa. Use `mixy.help google` para ver o uso correto.')
	} else {
		var mensagem = message.content
		message.channel.sendMessage(':mag_right: | Pesquisando...').then(message => {

	google(mensagem.slice(mensagem.length - argsJunto.length - 1), function(err, res){
		var i = 0
	while(res.links[i].link == null) {
			i++
		}
	if(res.links[i] == undefined) {
	console.log('reslinks undefined')
message.edit('<:vpRedTick:257437215615877129> | Sua pesquisa não teve resultados.')
		}
		message.edit('**Resultado para: **`' + mensagem.slice(mensagem.length - argsJunto.length - 1) + '`\n\n' + res.links[i].title + '\n' + res.links[i].href) 
	}
	})
})}*/
message.channel.sendMessage('<:vpRedTick:257437215615877129> | Este comando está em manutenção.')
}
