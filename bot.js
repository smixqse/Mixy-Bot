const Discord = require("discord.js");
const bot = new Discord.Client();
const token = 'Meu Token';
var moment = require('moment');
moment().format();
moment.locale('pt-BR');
console.log(moment.locale());

// Código
bot.on('ready', () => {
    console.log('O bot iniciou-se normalmente.')
});

function desligar() {
	process.exit()
}

// Aliases
var aliasesWhoIs = ['mixy.whois', 'm.whois', 'mixy.userinfo', 'mixy.user', 'm.userinfo', 'm.user', 'm.w', 'm.u'];
var aliasesBotID = ['mixy.botID', 'mixy.botId', 'mixy.botid', 'mixy.oauth', 'mixy.OAuth', 'm.botID', 'm.botid', 'm.botId', 'm.oauth', 'm.o'];
var aliasesSay = ['mixy.say', 'm.say', 'mixy.s'];
var aliasesPoll = ['mixy.poll', 'm.poll'];
var aliasesHelp = ['mixy.help', 'm.help', 'm.h', 'mixy.h'];
var aliasesServerInfo = ['mixy.serverinfo', 'm.serverinfo', 'mixy.server', 'm.server', 'm.si'];
var aliasesDelete = ['mixy.delete', 'mixy.del', 'm.del', 'm.delete', 'm.d', 'mixy.prune', 'm.prune', 'm.pr'];
var aliasesInvite = ['mixy.invite', 'mixy.inv', 'm.invite', 'm.inv', 'm.i'];
var aliasesAvatar = ['mixy.avatar', 'mixy.avy', 'm.avatar', 'm.avy', 'm.a'];
var aliasesKick = ['mixy.kick', 'm.kick', 'm.k'];
var aliasesEval = ['mixy.eval', 'm.e', 'mixy.e', 'm.eval'];
var aliasesOff = ['mixy.off', 'm.off']

// Help de Comandos
var comandos = ['mixy.userinfo', 'mixy.oauth', 'mixy.say', 'mixy.poll', 'mixy.help', 'mixy.serverinfo', 'mixy.prune', 'mixy.invite', 'mixy.avatar', 'mixy.kick', 'mixy.eval', 'mixy.off'];
var descricoes = ['Mostra informações de algum usuário do server.', 'Mostra o link de convite de algum bot.', 'Faz o Mixy dizer algo.', 'Cria uma votação feita de reações.' , 'Mostra a lista de comandos.', 'Mostra informações do server atual.', 'Apaga mensagens do canal.', 'Pega o convite do bot e o convite pro server oficial do Mixy.', 'Mostra o seu avatar, do server ou o avatar de alguém que você mencionar.', 'Expulsa um membro do server.', 'Executa um código. APENAS PARA O CRIADOR.', 'Desliga o bot. APENAS PARA O CRIADOR.'];
var exemplos = ['`mixy.userinfo @SMix`', '`mixy.oauth @MixyBot`', 'mixy.say oi!', '`mixy.poll O server precisa de melhorias?`', '`mixy.help`, `mixy.help mixy.say`', '`mixy.serverinfo`', '`mixy.prune 15`', '`mixy.invite`', '`mixy.avatar server`, `mixy.avatar @SMix`, `mixy.avatar me`', '`mixy.kick @SMix`', '`mixy.eval bot.token`', '`mixy.off`']
var aliases = [aliasesWhoIs.join(' / '), aliasesBotID.join(' / '), aliasesSay.join(' / '), aliasesPoll.join(' / '), aliasesHelp.join(' / '), aliasesServerInfo.join(' / '), aliasesDelete.join(' / '), aliasesInvite.join(' / '), aliasesAvatar.join(' / '), aliasesKick.join(' / '), aliasesEval.join(' / '), aliasesOff.join(' / ')]


bot.on('ready', ready => {
	bot.user.setGame('alegria em ' + bot.guilds.size + ' servers! | mixy.help', 'https://twitch.tv/monstercat')
})

bot.on('message', message => { // Comando WhoIs
	let NaoEImportante = message.content.split(' ')
	let Comando = NaoEImportante[0]
    if (aliasesWhoIs.some(a=> a === Comando)) {
    	let parts = message.content.split(' ');
    let args = parts.slice(1, parts.length).join(' ');
    	    let user = message.mentions.users.first();
        if (message.mentions.users.first() === undefined) {
            message.channel.sendMessage('<:vpRedTick:257437215615877129> | O usuário mencionado não foi reconhecido pelo bot, ou você não mencionou ninguém.').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
        } else {
            const whoIs = new Discord.RichEmbed();
            whoIs.setAuthor('Solicitado por ' + message.author.username, message.author.avatarURL);
            if (user.presence.game !== null) {
                if (user.presence.game.streaming) {
                    whoIs.setDescription('Transmitindo **' + user.presence.game.name + '**.');
                } else {
                    whoIs.setDescription('Jogando **' + user.presence.game.name + '**.');
                }
            }
            whoIs.addField('Nome de Usuário', user.username, true)
            whoIs.addField('ID', user.id, true);
            whoIs.setThumbnail(user.avatarURL);
            whoIs.addField('Status', user.presence.status, true);
            whoIs.addField('Conta criada', moment(user.createdAt).format('LL'), true);
            whoIs.setTimestamp();

            if (message.channel.type === 'dm') {
                message.channel.sendEmbed(whoIs);
            } else if (message.channel.permissionsFor(message.guild.member(bot.user)).hasPermission('EMBED_LINKS')) {
            	whoIs.addField('Entrou no server', moment(message.guild.member(user).joinedAt).format('LL'), true);
            	if (message.member.highestRole.color !== undefined) {
                whoIs.setColor(message.member.highestRole.color)
            }
                message.channel.sendEmbed(whoIs);
            } else {
            	whoIs.addField('Entrou no server', moment(message.guild.member(user).joinedAt).format('LL'), true);
            	if (message.member.highestRole.color !== undefined) {
                whoIs.setColor(message.member.highestRole.color)
            }
                message.author.sendEmbed(whoIs);
                message.channel.sendMessage(':warning: | Eu não tenho a permissão `EMBED_LINKS` neste servidor. O resultado foi enviado por privado.');
            }
        } // Comando Eval
    } else if (aliasesEval.some(a => a === Comando) && (message.author.id == '205319106608627722')) {
        if (message.content.includes('bot.token')) {
            message.channel.sendMessage('<:vpRedTick:257437215615877129> | RAIO PROTETOR! Protegi meu token de ser exibido!');
        } else {
            var code = message.content.slice(aliasesEval[aliasesEval.findIndex(a => a === Comando)].length + 1);
            try {
                message.channel.sendMessage(eval(code));
            } catch (err) {
                message.channel.sendMessage(`:x: | ${err}`);
            }
        } // Comando Oauth
    } else if (aliasesBotID.some(a=> a === Comando)) {
    	let parts = message.content.split(' ');
    let args = parts.slice(1, parts.length).join(' ');
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
        } // Comando Say
    } else if (aliasesSay.some(a=> a === Comando)) {
    	let parts = message.content.split(' ');
    let identifier = parts[0];
    let args = parts.slice(1, parts.length).join(' ');
        if (args.length !== 0) {
            message.channel.bulkDelete(1);
            message.channel.sendMessage(':speech_balloon: **|** **' + `${args}` + '**');
        } else {
            message.channel.sendMessage('<:vpRedTick:257437215615877129> | A sintaxe do comando está incorreta. Sintaxe correta: `' + parts[0] + ' Sou legal!`').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
        } //Comando Poll
    } else if (aliasesPoll.some(a => a === Comando)) {
    	let parts = message.content.split(' ');
    let identifier = parts[0];
    let args = parts.slice(1, parts.length).join(' ');
        const pollcommand = new Discord.RichEmbed();
        pollcommand.setAuthor('Votação por ' + message.author.username, message.author.avatarURL);
        if (message.member.highestRole.color !== undefined) {
            pollcommand.setColor(message.member.highestRole.color);
        }
        pollcommand.setDescription(`${args}`);
        pollcommand.setTimestamp();
        if (parts.length > 1) {
            if (message.channel.permissionsFor(message.guild.member(bot.user)).hasPermission('EMBED_LINKS')) {
                message.channel.sendEmbed(pollcommand).then(message => {
                    message.react('👍').then(message.react('👎'))
                })
            } else {
                message.channel.sendMessage(':x: | Eu não posso criar a votação, pois não tenho a permissão `EMBED_LINKS`.').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
            }

        } else {
            message.channel.sendMessage(':x: | Parece que você não escreveu nada na sua votação. Sintaxe correta: `' + parts[0] + ' ' + message.author.username + ' é lindo?`').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
        } // Comando Help
    } else if (aliasesHelp.some(a=> a === Comando)) {
    	let parts = message.content.split(' ');
    	if(parts.length < 2) {
        const helpcommand = new Discord.RichEmbed();
        helpcommand.setAuthor('Solicitado por ' + message.author.username, message.author.avatarURL);

        helpcommand.addField('Comandos:', '`' + comandos.join('`  `') + '`' + '\n\nPara ver mais sobre um comando, execute `' + parts[0] + ' (comando)`.');
        helpcommand.setTimestamp();
        helpcommand.setFooter('Mixybot criado por SMix.', 'https://cdn.discordapp.com/avatars/294881981630644224/fa9e90b10df8173085dd4a84ab67f52f.webp?size=1024');
        if (message.channel.type === 'dm') {
            message.channel.sendEmbed(helpcommand);
        } else if (message.channel.permissionsFor(message.guild.member(bot.user)).hasPermission('EMBED_LINKS')) {
        	if (message.member.highestRole.color !== undefined) {
            helpcommand.setColor(message.member.highestRole.color);
        }
            message.channel.sendEmbed(helpcommand);
        } else {
        	if (message.member.highestRole.color !== undefined) {
            helpcommand.setColor(message.member.highestRole.color);
        }
        
            message.author.sendEmbed(helpcommand);
            setTimeout(() => {message.channel.sendMessage('<:vpGreenTick:257437292820561920> | Mandei as informações por privado.')}, 3000)
        }} else if (comandos.some(a => a === parts[1])) {
        	const helpForCommand = new Discord.RichEmbed();
        	helpForCommand.setTitle(comandos.find(a => a === parts[1]));
        	helpForCommand.setDescription(descricoes[comandos.findIndex(a => a === parts[1])] + '\n\n **Exemplo: **' + exemplos[comandos.findIndex(a => a === parts[1])] + '\n\n**Aliases: ** ' + aliases[comandos.findIndex(a => a === parts[1])]);
helpForCommand.setFooter('Mixybot criado por SMix.', 'https://cdn.discordapp.com/avatars/294881981630644224/fa9e90b10df8173085dd4a84ab67f52f.webp?size=1024');
        	if(message.channel.type === 'text') {
        		if (message.member.highestRole.color !== undefined) {
            helpForCommand.setColor(message.member.highestRole.color);
        }
        	}
        	if (message.channel.type === 'dm') {
            message.channel.sendEmbed(helpForCommand);
        } else if (message.channel.permissionsFor(message.guild.member(bot.user)).hasPermission('EMBED_LINKS')) {
        	if (message.member.highestRole.color !== undefined) {
            helpForCommand.setColor(message.member.highestRole.color);
        }
            message.channel.sendEmbed(helpForCommand);
        } else {
        
            message.author.sendEmbed(helpForCommand);
            setTimeout(() => {message.channel.sendMessage('<:vpGreenTick:257437292820561920> | Mandei as informações por privado.')}, 3000)

        }} else {
        	message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você não escreveu um comando correto. Sintaxe correta: `' + parts[0] + ' mixy.invite`').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
        } // Comando ServerInfo
    } else if (aliasesServerInfo.some(a=> a === Comando)) {
        const serverinfo = new Discord.RichEmbed();
        if (message.guild === null) {
            message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você não parece estar executando o comando num servidor.');
        } else {
            if (message.guild.iconUrl === null) {
                serverinfo.setAuthor('Informações de ' + message.guild.name, 'https://cdn.discordapp.com/avatars/294881981630644224/fa9e90b10df8173085dd4a84ab67f52f.webp')
            } else {
                serverinfo.setAuthor('Informações de ' + message.guild.name, message.guild.iconURL);
                serverinfo.setThumbnail(message.guild.iconURL);
            }
            serverinfo.addField('Nome do server', message.guild.name, true);
            serverinfo.addField('Região do server', message.guild.region, true);
            serverinfo.addField('Dono', message.guild.owner.user.username + '#' + message.guild.owner.user.discriminator, true);
            serverinfo.addField('Membros', message.channel.guild.members.size, true);
            serverinfo.addField('Data de criação', moment(message.guild.createdAt).format('LL'));
            serverinfo.addField('Cargos', message.guild.roles.size, true);
            membrosOn = ['']
	message.guild.members.forEach(member => {
	if(member.presence.status === 'online' || member.presence.status === 'idle' || member.presence.status === 'dnd' ) {
	membrosOn.push(member.user.username)
	}
	})	
			serverinfo.addField('Membros online', membrosOn.length - 1, true)
            serverinfo.setTimestamp();
            serverinfo.setFooter('Solicitado por ' + message.author.username, message.author.avatarURL);
            if (message.member.highestRole.color !== undefined) {
                serverinfo.setColor(message.member.highestRole.color);
            }
            if (message.channel.permissionsFor(message.guild.member(bot.user)).hasPermission('EMBED_LINKS')) {
                message.channel.sendEmbed(serverinfo);
            } else {
                message.author.sendEmbed(serverinfo);
                message.channel.sendMessage(':warning: | Eu não tenho a permissão `EMBED_LINKS` neste servidor. O resultado foi enviado por privado.');
            }
        } // Comando Delete
    } else if (aliasesDelete.some(a=> a === Comando)) {
        let parts = message.content.split(' ');
        let args = parts[1]
        let toDeleteCount = parseInt(parts[1]);
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            if (message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) {
                if (parts.length > 1 && parts.length < 3) {
                    if (isNaN(toDeleteCount) === false) {
                        if (toDeleteCount <= 100) {
                            message.channel.bulkDelete(toDeleteCount + 1, true)
                            message.channel.sendMessage('<:vpGreenTick:257437292820561920> | ' + toDeleteCount + ' mensagens foram deletadas neste canal.').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })

                        } else {
                            message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você só pode apagar até 100 mensagens por vez.').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
                        }
                    } else {
                        message.channel.sendMessage('<:vpRedTick:257437215615877129> | Parece que os argumentos dados não são números. Sintaxe correta: `' + parts[0] + ' 10`').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
                    }
                } else {
                    message.channel.sendMessage('<:vpRedTick:257437215615877129> | Informe o número de mensagens a deletar. Sintaxe correta: `' + parts[0] + ' 10`').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
                }
            } else {
                message.channel.sendMessage('<:vpRedTick:257437215615877129> | Eu não tenho permissão necessária para fazer isso: `MANAGE_MESSAGES`').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
            }
        } else {
            message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você não tem a permissão necessária para fazer isso: `MANAGE_MESSAGES`').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
        } // Comando Avatar
    } else if (aliasesAvatar.some(a=> a === Comando)){
		let parts = message.content.split(' ');
        let args = parts.slice(1, parts.length).join(' ');
        if(message.mentions.users.first() !== undefined){
        	message.channel.sendMessage(':frame_photo: | O link para o avatar de **' + message.mentions.users.first().username + '** é: **' + message.mentions.users.first().avatarURL + '**.')
        } else if (parts[1] === 'server') {
        	message.channel.sendMessage(':frame_photo: | O link para o avatar deste server é: **' + message.guild.iconURL + '**.')
        } else if (parts[1] === 'me') {
        	message.channel.sendMessage(':frame_photo: | O link para o seu avatar é: **' + message.author.avatarURL + '**.')
        } else {
        	message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você não deu argumentos corretos. Digite `m.h mixy.avatar` para ver exemplos.').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
        } // Comando Kick
	} else if(aliasesKick.some(a=> a === Comando)) {
		if(message.channel.type === 'dm') {
			message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você deve executar este comando apenas em servidores.')
		}
		let parts = message.content.split(' ');
        let args = parts.slice(1, parts.length).join(' ');
        if(message.member.id === message.guild.ownerID) {
        	if(message.guild.member(bot.user).highestRole.position > message.guild.member(message.mentions.users.first()).highestRole.position) {
							message.guild.member(message.mentions.users.first()).kick(message.guild.member())
							message.channel.sendMessage('<:vpGreenTick:257437292820561920> | O usuário **' + message.mentions.users.first().username + '** foi expulso do servidor.')
							} else if (message.guild.member(bot.user).highestRole.position < message.guild.member(message.mentions.users.first()).highestRole.position) {
							message.channel.sendMessage('<:vpRedTick:257437215615877129> | O usuário mencionado tem cargo maior que eu.')
						} else if (message.guild.member(bot.user).highestRole.position === message.guild.member(message.mentions.users.first()).highestRole.position) {
							message.channel.sendMessage('<:vpRedTick:257437215615877129> | A pessoa que você está tentando expulsar tem permissões idênticas às minhas.')
						}}
		if(message.member.hasPermission('KICK_MEMBERS')) {
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
	} else if(aliasesOff.some(a => a === Comando) && message.author.id === '205319106608627722') {
		message.channel.sendMessage('<:vpGreenTick:257437292820561920> | O bot foi desligado.').then(() => {
			desligar()
		})

	}
});

bot.login(token);
