const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '-help') {
    	message.reply('-setpictures');
  	}
    if (message.content === '-setpictures') {
    	message.reply('Пикчи не найдены, получить роль Создателя командой "-helpopmanage"');
  	}
    if (message.content === '-helpopmanage') {
    	message.reply('Sorry, role "Создатель" is not found.');
  	}
    if (message.content === '-hackthis') {
    	message.reply('http://zipansion.com/47l1q - Раскрутка YouTube, ВКонтакте, Твиттер, FaceBook, Инстаграмм, Одноклассники, Советую! так-же если зарегистрируетесь бонус от меня 100 баллов на счёт!');
  	}

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
