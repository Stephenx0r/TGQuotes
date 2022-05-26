import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { Telegraf } from 'telegraf'
require('dotenv').config();
const bot = new Telegraf(process.env.API_KEY);
const express = require('express')
const expressApp = express()
const request = require('request');

const postroute="https://motivational-quotes1.p.rapidapi.com/motivation?rapidapi-key=1efae110e5msh25a07c2ac3997d4p10230fjsn41c8a8403b21";

let quote="";
request.post(
  {
  url:postroute
  },
function(error, response, body)
{
    quote=response.body;
});

// bot.command('start', function(ctx){
//    // console.log(ctx.from)
//    bot.telegram.sendMessage(ctx.chat.id, 'Hey there Ready for a quote❣.', {
//    })
// })

// bot.start((ctx) => ctx.reply('Welcome'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.command("start" , function(ctx)
{
  ctx.reply(quote);
})



bot.on((ctx) => {
  console.log(ctx.chat)
})

bot.launch();
