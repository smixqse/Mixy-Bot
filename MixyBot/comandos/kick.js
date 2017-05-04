const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
exports.run = (bot, message, args) => {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    if(message.channel.type === 'dm') {
			message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você deve executar este comando apenas em servidores.')
		} else if (message.member.id === message.guild.ownerID) {
        	if(message.guild.member(bot.user).highestRole.position > message.guild.member(message.mentions.users.first()).highestRole.position) {
							message.guild.member(message.mentions.users.first()).kick(message.guild.member())
							message.channel.sendMessage('<:vpGreenTick:257437292820561920> | O usuário **' + message.mentions.users.first().username + '** foi expulso do servidor.')
							} else if (message.guild.member(bot.user).highestRole.position < message.guild.member(message.mentions.users.first()).highestRole.position) {
							message.channel.sendMessage('<:vpRedTick:257437215615877129> | O usuário mencionado tem cargo maior que eu.')
						} else if (message.guild.member(bot.user).highestRole.position === message.guild.member(message.mentions.users.first()).highestRole.position) {
							message.channel.sendMessage('<:vpRedTick:257437215615877129> | A pessoa que você está tentando expulsar tem permissões idênticas às minhas.')
						}} else if(message.member.hasPermission('KICK_MEMBERS')) {
			if(message.guild.member(bot.user).hasPermission('KICK_MEMBERS')) {
				if(message.mentions.users.first() !== undefined) {
					if(message.member.highestRole.position > message.guild.member(message.mentions.users.first()).highestRole.position) {
						if(message.guild.member(bot.user).highestRole.position > message.guild.member(message.mentions.users.first()).highestRole.position) {
							message.guild.member(message.mentions.users.first()).kick(message.guild.member())
							message.channel.sendMessage('<:vpGreenTick:257437292820561920> | O usuário **' + message.mentions.users.first().username + '** foi expulso do servidor.')
						} else if (message.guild.member(bot.user).highestRole.position < message.guild.member(message.mentions.users.first()).highestRole.position) {
							message.channel.sendMessage('<:vpRedTick:257437215615877129> | O usuário mencionado tem cargo maior que eu.')
						} else if (message.guild.member(bot.user).highestRole.position === message.guild.member(message.mentions.users.first()).highestRole.position) {
							message.channel.sendMessage('<:vpRedTick:257437215615877129> | A pessoa que você está tentando expulsar tem permissões idênticas às minhas.')
						}
					} else if (message.member.highestRole.position < message.guild.member(message.mentions.users.first()).highestRole.position) {
						message.channel.sendMessage('<:vpRedTick:257437215615877129> | O usuário mencionado tem cargo maior que você.')
					} else if (message.member.highestRole.position === message.guild.member(message.mentions.users.first()).highestRole.position) {
						message.channel.sendMessage('<:vpRedTick:257437215615877129> | A pessoa que você está tentando expulsar tem permissões idênticas às suas.')
					}
				} else {
					message.channel.sendMessage('<:vpRedTick:257437215615877129> | O usuário não reconheceu a pessoa mencionada, ou você não mencionou ninguém.')
				}
			} else {
				message.channel.sendMessage('<:vpRedTick:257437215615877129> | Eu não tenho a permissão necessária para fazer isso: `KICK_MEMBERS`')
			}
		} else {
			message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você não tem a permissão necessária para fazer isso: `KICK_MEMBERS`')
		}
}