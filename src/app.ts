import { Bot, Context } from "grammy";

const bot = new Bot("");

bot.on("message", (ctx: Context) => ctx.reply("Hi There!"));

bot.start();
