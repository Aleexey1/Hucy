const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Infelizmente você não tem permissão!");
    message.delete()
    message.channel.send('@everyone | @here')
    let embed = new Discord.RichEmbed()
    .setTitle('**AVISO**')
    .setDescription(args.join(' '))
    .setThumbnail(bot.user.displayAvatarURL)
    .setColor('#00374')
    .setFooter(`Aviso enviado por: ${message.author.tag}`, bot.user.displayAvatarURL);

    message.channel.send(embed)
}

exports.help = {
    name: "say"
}