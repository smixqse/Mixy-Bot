const Discord = require("discord.js");
const bot = new Discord.Client();
var moment = require('moment');
moment().format();
moment.locale('pt-BR');
console.log(moment.locale());
const fs = require("fs")
const config = require("./config.json")

// Código
bot.on('ready', () => {
    console.log('O bot iniciou-se normalmente.')
});

function desligar() {
    process.exit()
}


bot.on('ready', ready => {
    bot.user.setGame('em ' + bot.guilds.size + ' servers! | mixy.help', 'https://twitch.tv/monstercat')
})

fs.readdir("./eventos/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./eventos/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
  });
});

bot.on('message', message => {
    if (message.author.bot) return;
    if (!config.aliases.some(a => message.content.startsWith(a))) return;
    let comando = message.content.split(" ")[0];
    let command = comando.slice(config.aliases[config.aliases.findIndex(a => message.content.startsWith(a))].length)

  let args = message.content.split(" ").slice(1)
  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
    console.error(err)
  }
});


bot.login(config.token);
