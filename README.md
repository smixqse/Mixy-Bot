# Mixy-Bot
## Um bot de utilitários brasileiro feito para ajudar servidores!

MixyBot é um bot brasileiro feito por SMix#9658 para dar uma ajudinha em servidores, tanto em moderação quanto em outras coisas.

## Recursos

### Moderação

Comandos de moderação! Sim! Kicke pessoas, delete mensagens, e muitas coisas a mais estarão por vir!

### Utilitários

Crie votações, faça o bot falar, e muitas coisas a mais estarão por vir!

### Como uso ele?

É muito simples! Adicione o bot [clicando neste link](https://discordapp.com/oauth2/authorize?client_id=294881981630644224&scope=bot&permissions=268495991) e pronto! (você pode escolher que permissões o bot terá.)

Se você quiser hostear o Mixy, siga as etapas:

**1. Instale o node.js.**

Para rodar o bot, você precisa ter o node.js. Baixe ele clicando [aqui](https://nodejs.org/en/download/), depois instale-o.

**2. Instale os pacotes necessários.**

Considerando que o bot foi feito usando discord.js, devemos baixá-lo para ele funcionar. Crie uma pasta com o nome do bot em algum lugar de seu PC, e coloque dentro tudo que está dentro [desta pasta](./MixyBot). Depois, segure Shift e clique com o botão direito do mouse em algum lugar vazio da pasta. Selecione "Abrir janela de comando aqui."

<img src="https://i.imgur.com/xHH9fw3.png">

Quando o CMD abrir, digite `npm install --save discord.js`.

Aguarde até que você possa digitar novamente no CMD, então digite `npm install moment --save`.

Aguarde denovo, e digite `npm i google-translate-api`, aguarde, e feche o CMD.

***3. Configure o bot.**

Você não vai poder hostear no mesmo usuário que o MixyBot oficial, então você deverá criar um novo. [Clique aqui](https://discordapp.com/developers/applications/me) e, quando a página carregar, clique em "New app". Coloque as informações do seu bot, de preferência as mesmas do Mixy original, e então clique em "Create app", depois clique em "Create bot user".

<img src="http://image.prntscr.com/image/953137a1bcf7414686ff4e37c7d5c6a0.png">

Logo depois, do lado de "Token", clique em "click to reveal".

:warning: **Não compartilhe seu token com ninguém. o token dá acesso total a seu bot.** :warning:

Copie o token que aparecer. Depois, de volta à pasta com os arquivos do bot, abra `config.json`. Onde tem "COLOQUE_SEU_TOKEN_AQUI", substitua pelo seu token, e salve o arquivo.

No Discord, crie uma menção sua, e depois coloque `\` no início, e mande como uma mensagem. Vai aparecer mais ou menos assim:

`<@SEU_ID>`

Copie o número depois do @, e cole no `config.json` dentro das aspas, e salve.

Para adicionar seu bot a servers, substitua "CLIENT_ID" pelo Client ID mostrado nas informações do seu bot, no link abaixo.

https://discordapp.com/oauth2/authorize?&client_id=CLIENT_ID&scope=bot

Agora, entre no link.

**4. Rode o bot.**

Você está pronto! Para criar um executável que rode seu bot, clique com o botão direito em algum lugar vazio da pasta, entre em "Novo", e crie um arquivo de texto. Abra ele e coloque: 'node bot.js'. Depois, salve como '.bat'. Agora, você pode executar seu bot clicando no .bat.
