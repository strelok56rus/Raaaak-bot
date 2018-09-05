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

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
