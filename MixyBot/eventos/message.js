const Discord = require("discord.js");
const fs = require("fs");
exports.run = (bot, message) => {
	let database = JSON.parse(fs.readFileSync('./database/serversconfig.json', 'utf8'));
	if(message.channel.type === 'dm') return;
	if(database[message.guild.id] !== undefined) {
		if(database[message.guild.id].comandos === undefined || database[message.guild.id].comandos === null) return;
	if(Object.keys(database[message.guild.id].comandos).some(a => message.content === a)) {
		message.channel.sendMessage(database[message.guild.id].comandos[Object.keys(database[message.guild.id].comandos).find(a => message.content === a)])
	}
}}