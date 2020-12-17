const Discord = require("discord.js");

const client = new Discord.Client;

const talkedRecently = new Set();
const gottenMsg1 = new Set();
const gottenMsg2 = new Set();
const gottenMsg3 = new Set();
const gottenMsg4 = new Set();
const gottenMsg5 = new Set();
const gottenMsg6 = new Set();
const gottenMsg7 = new Set();
const gottenMsg8 = new Set();
const gottenMsg9 = new Set();
const gottenMsg10 = new Set();
const gottenMsg11 = new Set();
const gottenMsg12 = new Set();
const gottenMsg13 = new Set();




//var Shiny_fcounter = 0
//var Bot = 'Bot the Bot';
//var Botdig = '6458'; 




var ShinyNcounter = 0
var DanNcounter = 0
var OJNcounter = 0
var OGNcounter = 0
var CARENcounter = 0
var TotalNcounter = ShinyNcounter + DanNcounter + OJNcounter + OGNcounter + CARENcounter

const emoji = client.emojis.cache.get("782957768545665074")
//let myRole = message.guild.roles.cache.find(role => role.name === "{Role Name}");

client.once('ready', () => {
    console.log('Bot online!');
    //ShinyNcounter += 1;
    //client.channels.cache.get('775564519233028099').send('Hallo people I am online!');
});


//const { writeFileSync } = require("fs");
//const data = require("C:/Users/Akash/Documents/GitHub/DiscordBot/app/bot.js");
//const secretdata = require("C:/Users/Akash/Documents/GitHub/DiscordBot/app/bot.js");
//ShinyNcounter += 1 
console.log(ShinyNcounter + " ---> Shiny")
console.log(DanNcounter + " ---> Dan")
console.log(OJNcounter + " ---> OJ")
console.log(OGNcounter + " ---> OG")
console.log(CARENcounter + " ---> Care")
console.log("======")
TotalNcounter = ShinyNcounter + DanNcounter + OGNcounter + OJNcounter + CARENcounter
console.log(TotalNcounter)





client.on('message', mg => {
    if (mg.content === '!privServer') {
        if (mg.author.username === 'ShinyACash') {
            mg.channel.send('https://www.roblox.com/games/286090429/Arsenal?privateServerLinkCode=vUfmN_6NMDvhBBYoO5RxtFi3pKcYydxu').then(msg => {
                msg.delete({ timeout: 30000 })
            });
            mg.channel.send('Message will be deleted in 30s').then(msg => {
                msg.delete({ timeout: 30000 })
            });
        }
        if (mg.author.username === 'Zero Two') {
            mg.channel.send('https://www.roblox.com/games/286090429/Arsenal?privateServerLinkCode=vUfmN_6NMDvhBBYoO5RxtFi3pKcYydxu').then(msg => {
                msg.delete({ timeout: 30000 })
            });
            mg.channel.send('Message will be deleted in 30s').then(msg => {
                msg.delete({ timeout: 30000 })
            });
        }
        if (mg.author.username === 'blindbutnotblind') {
            mg.channel.send('https://www.roblox.com/games/286090429/Arsenal?privateServerLinkCode=vUfmN_6NMDvhBBYoO5RxtFi3pKcYydxu').then(msg => {
                msg.delete({ timeout: 30000 })
            });
            mg.channel.send('Message will be deleted in 30s').then(msg => {
                msg.delete({ timeout: 30000 })
            });
        }
    }
})

client.on('message', msg => {
    if (msg.content.includes('bot the bot u are nice' || 'bot the bot u are cool')) {
        msg.reply('Thanks, you are cool too');
    }
    else if (msg.content === "!check mention") {
        msg.channel.send("@everyone");
    }
    else if (msg.content.includes('nigga')) {
        if (msg.author.username === 'ShinyACash') {
            if (talkedRecently.has(msg.author.id)) {
                msg.channel.send(`Wait 30s before getting a +1 nigga, ${msg.author}.`);
            }
            else {


                msg.channel.send(`+1 to your nigga counter ${msg.author}`);
                ShinyNcounter += 1;

                talkedRecently.add(msg.author.id);
                setTimeout(() => {

                    talkedRecently.delete(msg.author.id);
                }, 30000);
            }
        }
        else if (msg.author.username === 'Zero Two') {
            if (talkedRecently.has(msg.author.id)) {
                msg.channel.send(`Wait 30s before getting a +1 nigga, ${msg.author}.`);
            }
            else {

                // the user can type the command ... your command code goes here :)
                msg.channel.send(`+1 to your nigga counter ${msg.author}`);
                DanNcounter += 1;
                
                // Adds the user to the set so that they can't talk for a minute
                talkedRecently.add(msg.author.id);
                setTimeout(() => {
                    // Removes the user from the set after a minute
                    talkedRecently.delete(msg.author.id);
                }, 30000);
            }
        }
        else if (msg.author.username === 'IMCARE') {
            if (talkedRecently.has(msg.author.id)) {
                msg.channel.send(`Wait 30s before getting a +1 nigga, ${msg.author}.`);
            } else {

                // the user can type the command ... your command code goes here :)
                msg.channel.send(`+1 to your nigga counter ${msg.author}`);
                CARENcounter += 1;
                
                // Adds the user to the set so that they can't talk for a minute
                talkedRecently.add(msg.author.id);
                setTimeout(() => {
                    // Removes the user from the set after a minute
                    talkedRecently.delete(msg.author.id);
                }, 30000);
            }
        }
        else if (msg.author.username === 'Dogey DooD') {
            if (talkedRecently.has(msg.author.id)) {
                msg.channel.send(`Wait 30s before getting a +1 nigga, ${msg.author}.`);
            } else {

                // the user can type the command ... your command code goes here :)
                msg.channel.send(`+1 to your nigga counter ${msg.author}`);
                OJNcounter += 1;
               
                // Adds the user to the set so that they can't talk for a minute
                talkedRecently.add(msg.author.id);
                setTimeout(() => {
                    // Removes the user from the set after a minute
                    talkedRecently.delete(msg.author.id);
                }, 30000);
            }

        }
        else if (msg.author.username === 'blindbutnotblind') {
            if (talkedRecently.has(msg.author.id)) {
                msg.channel.send(`Wait 30s before getting a +1 nigga, ${msg.author}.`);
            } else {

                // the user can type the command ... your command code goes here :)
                msg.channel.send(`+1 to your nigga counter ${msg.author}`);
                OGNcounter += 1;
                
                // Adds the user to the set so that they can't talk for a minute
                talkedRecently.add(msg.author.id);
                setTimeout(() => {
                    // Removes the user from the set after a minute
                    talkedRecently.delete(msg.author.id);
                }, 30000);
            }
        }
    }
    else if (msg.content === '!n') {
        if (msg.author.username === 'ShinyACash') {
            msg.channel.send(`${msg.author}, your nigga counter is at ` + ShinyNcounter + `. Good Job!`);
            
        }
        else if (msg.author.username === 'Zero Two') {
            msg.channel.send(`${msg.author}, your nigga counter is at ` + DanNcounter + `. Good Job!`);
            
        }
        else if (msg.author.username === 'IMCARE') {
            msg.channel.send(`${msg.author}, your nigga counter is at ` + CARENcounter + `. Good Job!`);
           
        }
        else if (msg.author.username === 'Dogey DooD') {
            msg.channel.send(`${msg.author}, your nigga counter is at ` + OJNcounter + `. Good Job!`);
            
        }
        else if (msg.author.username === 'blindbutnotblind') {
            msg.channel.send(`${msg.author}, your nigga counter is at ` + OGNcounter + `. Good Job!`);
            
        }
    }
    else if (msg.content.includes('FUCK')) {
        msg.reply('Do you wanna get banned? jk lol. Use abbreviations');
    }
    else if (msg.content.includes('ty')) {
        if (msg.content.includes('bot')) {
            msg.reply('welcome BITCH');
            if (msg.content.includes('asshole' || 'a hole')) {
                msg.reply('F off BITCH');
            }
        }
    }
    else if (msg.content.includes('bot')) {
        if (msg.content.includes('a hole' || 'asshole')) {
            msg.reply('F off BITCH');
        }
    }
    else if (msg.content === "!nTotal") {
        TotalNcounter = ShinyNcounter + DanNcounter + OJNcounter + OGNcounter + CARENcounter;
        msg.channel.send("Our total n-word count is at " + TotalNcounter + ". DAYUM BOIS!");
    }

})


client.on('message', msg => {

    if (msg.content === '!bot online?') {
        msg.reply('yes sir!');
    }
    else if (msg.content === '!bot offline?') {
        msg.reply('no sir!');
    }
            /*else if(msg.content === '!thingyneeded'){
                let neededtxt = client.channels.get('758755163178926161').name
                msg.reply(neededtxt);
            }*/
    else if (msg.content === '!1v1') {
        let one = ['ShinyACash', 'xNightmare', 'Dogey Dood', 'blindbutnotblind'];
        let two = ['ShinyACash', 'xNightmare', 'Dogey Dood', 'blindbutnotblind'];
        let rand_one = one[Math.floor(Math.random() * one.length)];
        let rand_two = two[Math.floor(Math.random() * two.length)];
        while (rand_one === rand_two) {
            let rand_two = two[Math.floor(Math.random() * two.length)];
            if (rand_one !== rand_two) {
                break;
            }
        }
        msg.channel.send('1v1 has been chosen between ' + rand_one + ' and ' + rand_two);
    }    
    else if (msg.content === '!randomMember') {
        let mem = ['ShinyACash', 'xNightmare', 'Dogey Dood', 'blindbutnotblind'];
        let rand_mem = mem[Math.floor(Math.random() * mem.length)];
        msg.channel.send('The random person is ' + rand_mem);
    }
    
})








client.login(process.env.token);

