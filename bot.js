const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '-help') {
    	message.reply('В данный момент не найдено команд..');
  	}
    if (message.content === '-setpictures') {
    	message.reply('Pictures is not found');
  	}

if (message.content.startsWith(prefix + "kick")) {
if (message.mentions.users.size === 0) {
  return message.reply("Mention a user to kick.")
}
let kickMember = message.guild.member(message.mention.user.first());
if (!kickMember) {
  return message.reply("That user does not seem valid.");
}
if (!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
  return message.reply("Оууу. Я не имею таких разрешений");
}
kickMember.kick();
}
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
