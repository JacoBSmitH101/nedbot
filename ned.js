const Discord = require('discord.js');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const bot = new Discord.Client();
const prefix = '!';

const channel = bot.channels.cache.get("ChannelID")
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    // Yay, it worked!
    console.log("Successfully connected.");
  }).catch(e => {
    // Oh no, it errored! Let's log it to console :)
    console.error(e);
  });

bot.on('message', (message) => {
    if(message.content.startsWith(prefix) || message.author.bot) {

        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();

        
        if (command === 'args-info') {
            if (!args.length) {
                return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
            }
        
            message.channel.send(`Command name: ${command}\nArguments: ${args}`);
        }
    }else{

        const args = message.content.split(' ');
        const command = args.shift().toLowerCase();
        for (arg in args) {
            if (arg == 'die'){
                message.channel.send('This is a christian channel, please dont use that vile language')
            }
        }
        if(command === 'ping'){
            message.channel.send(`NEVER! ${message.author}`)
        }
        else if(command == 'die') {
            message.channel.send('This is a christian channel, please dont use that vile language')
        }else if (command == 'Ned' || command == 'ned') {
            message.channel.send('Yesss............')
        }
    }
    
})

bot.login(process.env.TOKEN);





