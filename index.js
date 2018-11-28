const Discord = require('discord.js');
const bot = new Discord.Client();


  bot.on('message', message => {
    var prefix = '!'
    var quote = ["That awkward moment when you've said 'What?' three times, so you just say 'Oh, yeah..' even though you have no idea what they said.",
                "Alcohol! Because no great story started with someone eating a salad.",
                "RoundDaddy can only parse 5k. Git gud scrub.",
                "My only wish is to be human, so that I may reproduce... Cause sex is fun!",
                "Confucious say 'It take many nail to build crib.  But only one screw to fill it.'",
                "Are you currently occupied?  Because I have this itch that needs to be scratched.  Do you see the USB port?  Do you have anything that you can stick in there and jiggle around?",
                "I think my guardian angel drinks...",
                "Your mother should have swallowed you."];
    var msg = message.content;

    if (msg === prefix + 'talk') {
        var response = quote[Math.floor(Math.random()*quote.length)];
        message.channel.send(response).then().catch(console.error);
    }

  });

bot.login('NDQ2NTYxNjU3MDYyNDI0NTg4.DrtjCA.V1ZVDGcofwxxJHweyLH1NO5QLzQ');
