const { Telegraf } = require('telegraf');

const bot = new Telegraf('6186225356:AAGVVQIXpafwLUGo9SrHnCORDbhTaqni2cc');
bot.start((ctx) => ctx.reply('Hello guys welcome to PuffPuffPassbot type /puff1 /puff2 /puff3 to go ahead'));
bot.command('puff1', (ctx) => ctx.reply('Bhai nahi hai kya?'));
bot.command('puff2', (ctx) => ctx.reply('Train chor de Devesh'));
bot.command('puff3', (ctx) => ctx.reply('Pass karde BSDK narak jayega '));
bot.launch();