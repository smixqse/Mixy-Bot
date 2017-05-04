const Discord = require("discord.js");
var moment = require("moment")
const config = require("../config.json")
exports.run = (bot, message, args) => {
if (message.content.includes('bot.token')) {
            message.channel.sendMessage('<:vpRedTick:257437215615877129> | RAIO PROTETOR! Protegi meu token de ser exibido!');
        } else {
            var code = message.content.split(' ').slice(1).join(' ')
            try {
                message.channel.sendMessage(eval(code));
            } catch (err) {
                message.channel.sendMessage(`:x: | ${err}`);
            }
        }}