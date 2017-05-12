const Discord = require("discord.js");
const fs = require("fs");
exports.run = (bot, message, args) => {
	let database = JSON.parse(fs.readFileSync('./database/serversconfig.json', 'utf8'));
	let argsJunto = message.content.split(' ').slice(1).join(' ')
	if(message.channel.type === 'dm') {
		message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você só pode executar este comando num servidor.')
	} else {
	if(message.member.hasPermission('MANAGE_MESSAGES')) {
	if(args.length < 1) {
		message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você não deu argumentos. Veja o uso correto usando o comando de ajuda.')
	} else {
		if(!database[message.guild.id]) {
			message.channel.sendMessage('<:vpRedTick:257437215615877129> | Não há nada a deletar.')
	} else {
		if(!database[message.guild.id].comandos) {
			message.channel.sendMessage('<:vpRedTick:257437215615877129> | Não há nada a deletar.')
		} else {
			if(Object.keys(database[message.guild.id].comandos).some(a => args.join(' ') === a)) {
				delete database[message.guild.id].comandos[args.join(' ')]
				setTimeout(() => {fs.writeFile('./database/serversconfig.json', JSON.stringify(database), (err) => {
    			if (err) console.error(err)
  				})}, 1000)
				message.channel.sendMessage('<:vpGreenTick:257437292820561920> | O comando `' + args.join(' ') + '` foi deletado.')
			} else {
				message.channel.sendMessage('<:vpRedTick:257437215615877129> | Esse comando não existe.')
			}
		}
	}
}
} else {
	message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você não tem a permissão necessária para executar este comando. `MANAGE_MESSAGES`')
}
}}