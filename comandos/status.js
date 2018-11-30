const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    let stats = args.join(" ");
    if(!stats) return message.channel.send("o que quer que eu jogue?");
    bot.user.setActivity(stats, {type: "PLAYING"});
    message.channel.send(`agora estou jogando ${stats}`)
  }

exports.help = {
    name: "status"
}