const Discord = require("discord.js");
const fs = require("fs");
exports.run = (bot, message) => {
	let database = JSON.parse(fs.readFileSync('./database/serversconfig.json', 'utf8'));
	if(database[message.guild.id] !== undefined) {
	if(Object.keys(database[message.guild.id].comandos).some(a => message.content === a)) {
		message.channel.sendMessage(database[message.guild.id].comandos[Object.keys(database[message.guild.id].comandos).find(a => message.content === a)])
	}
}}