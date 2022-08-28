import { Telegraf } from "telegraf";

const bootstrap = async () => {
   const TOKEN = process.env.BOT_TOKEN

   if (!TOKEN) {
      throw new Error('BOT_TOKEN enviroment variable not defined')
   }

   const bot = new Telegraf(TOKEN)

   bot.start(
      (ctx) => {

      }
   );

   bot.launch()
}

bootstrap()