const Discord = require("discord.js")
exports.run = (bot, message, args) => {
	message.channel.sendMessage(':alarm_clock: | Calculando...').then(message => {
		message.edit(':alarm_clock: | O ping é de ' + (Date.now() - message.createdTimestamp) + 'ms.')
	})
}