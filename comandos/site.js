const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle('INFO')
    .setColor('#8520C3')
    .setDescription('Olá, bem vindo ao nosso grupo no discord, abaixo teremos nossa e loja e o nosso IP do servidor, se você comprar vip entre na loja e compre para nos ajudar a manter o servidor on-line\nObrigado por usar nosso bot!\n \n \n \nIP: ```jogar.hudymc.tk```\n \n \n \nLoja: ```Desenvolvimento```')

    message.channel.send(embed)
}
exports.help = {
    name: "site"
}