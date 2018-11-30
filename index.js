const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

bot.on('guildMemberAdd', member => 
    member.addRole("476927204845027348")
);

bot.on('guildMemberAdd', member => {
    if (member.guild.id !== "506629091902881807") return;
    let avatar = member.user.avatarURL
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(avatar)
        .setTitle("**BEM-VINDO**")
        .addField('Bem vindo(a)!', `Olá ${member}, seja bem-vindo ao nosso grupo discord, bom esse grupo discord é do nosso servidor de minecraft, para entrar no servidor basta entrar no ip:\n \njogar.hudymc.tk (MANUTENÇÃO)\n \nEspero que você goste do nosso servidor, chame seus amigos!`)
        .setTimestamp()
    bot.channels.get('509055249110007828').send({embed})

});

fs.readdir("./comandos", (err, files) => {
    if(err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() == "js");
    arquivojs.forEach((f,i) => {
        let props = require(`./comandos/${f}`);
        console.log(`comando ${f} carregado com sucesso.`)
        bot.commands.set(props.help.name, props);
    });
});

bot.on("message", async message => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return; {
  if (message.content.startsWith('https://discord.gg/', 'https://discord.gg/invite')) {
        message.delete();
        return message.channel.send(`
<a:Alerta:501028184641241108> Alerta, o ${message.author} estÃ¡ tentando divulgar outro grupo discord! 
<a:Alerta:501028184641241108>`);
        
    }
  } 

});

bot.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;

    let arquivocmd = bot.commands.get(command.slice(prefix.length));
    if(arquivocmd) arquivocmd.run(bot,message,args);
});

bot.login(process.env.BOT_TOKEN);
