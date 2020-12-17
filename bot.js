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
const ms = require('ms');




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


client.on('message', async(msg) => {
    //var ms = require('ms');
    if(msg.author.bot) return;
    if(!msg.guild) return;

    var prefix = ".";
    if(!msg.content.toLowerCase().startsWith(prefix)) return;

    var args = msg.content.split(' ');
    var cmd = args.shift().slice(prefix.length).toLowerCase();

    if(cmd === "mute"){
        if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You can\'t use that!');

        var user = msg.mentions.users.first();
        if(!user) return msg.reply('You didn\'t mention anyone!');

        var member;

        try {
            member = await msg.guild.members.fetch(user);
        } catch(err) {
        member = null;
        }

        if(!member) return msg.reply('They aren\'t in the server!');
        if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You cannot mute that person!');

        var rawTime = args[1];
        var time = ms(rawTime);
        if(!time) return msg.reply('You didn\'t specify a time!');

        var reason = args.splice(2).join(' ');
        if(!reason) return msg.reply('You need to give a reason!');

        var channel = msg.guild.channels.cache.get("778889714001510400");

        var log = new Discord.MessageEmbed()
        .setTitle('User Muted')
        .addField('User:', user, true)
        .addField('By:', msg.author, true)
        .addField('Expires:', rawTime)
        .addField('Reason:', reason)
        channel.send(log);

        var embed = new Discord.MessageEmbed()
        .setTitle('You were muted!')
        .addField('Expires:', rawTime, true)
        .addField('Reason:', reason, true);

        try {
            user.send(embed);
        } catch(err) {
        console.warn(err);
        }

        var role = msg.guild.roles.cache.find(r => r.name === 'Muted');

        member.roles.add(role);

        setTimeout(async() => {
         member.roles.remove(role);
        }, time);

        msg.channel.send(`**${user}** has been muted by **${msg.author}** for **${rawTime}**!`);
    }

    if(cmd === "ping"){
        msg.channel.send(`Pong! ${client.ws.ping}ms`);
    }

    if(cmd === "warn"){
        if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You can\'t use that!');

        var user = msg.mentions.users.first();
        if(!user) return msg.reply('You didn\'t mention anyone!');
    
        var member;
    
        try {
            member = await msg.guild.members.fetch(user);
        } catch(err) {
            member = null;
        }
    
        if(!member) return msg.reply('They aren\'t in the server!');
    
        var reason = args.splice(1).join(' ');
        if(!reason) return msg.reply('You need to give a reason!');
    
        var channel = msg.guild.channels.cache.get('778889714001510400');
    
        var log = new Discord.MessageEmbed()
        .setTitle('User Warned')
        .addField('User:', user, true)
        .addField('By:', msg.author, true)
        .addField('Reason:', reason)
        channel.send(log);
    
        var embed = new Discord.MessageEmbed()
        .setTitle('You were warned!')
        .setDescription(reason);
    
        try {
            user.send(embed);
        } catch(err) {
            console.warn(err);
        }
    
        msg.channel.send(`**${user}** has been warned by **${msg.author}**!`);
    }

    if(cmd === "kick"){
        if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply('You can\'t use that!');

        var user = msg.mentions.users.first();
        if(!user) return msg.reply('You didn\'t mention anyone!');
    
        var member;
    
        try {
            member = await msg.guild.members.fetch(user);
        } catch(err) {
            member = null;
        }
    
        if(!member) return msg.reply('They aren\'t in the server!');
        if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You cannot kick this person!');
    
        var reason = args.splice(1).join(' ');
        if(!reason) return msg.reply('You need to give a reason!');
    
        var channel = msg.guild.channels.cache.get('778889714001510400');
    
        var log = new Discord.MessageEmbed()
        .setTitle('User Kicked')
        .addField('User:', user, true)
        .addField('By:', msg.author, true)
        .addField('Reason:', reason)
        channel.send(log);
    
        var embed = new Discord.MessageEmbed()
        .setTitle('You were kicked!')
        .setDescription(reason);
    
        try {
            await user.send(embed);
        } catch(err) {
            console.warn(err);
        }
    
        member.kick(reason);
    
        msg.channel.send(`**${user}** has been kicked by **${msg.author}**!`);
    }

    if(cmd === "ban"){
        if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('You can\'t use that!');

        var user = msg.mentions.users.first();
        if(!user) return msg.reply('You didn\'t mention anyone!');
    
        var member;
    
        try {
            member = await msg.guild.members.fetch(user);
        } catch(err) {
            member = null;
        }
    
        if(member){
            if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You cannot ban this person!');
        }
    
        var reason = args.splice(1).join(' ');
        if(!reason) return msg.reply('You need to give a reason!');
    
        var channel = msg.guild.channels.cache.find(c => c.name === 'potato');
    
        var log = new Discord.MessageEmbed()
        .setTitle('User Banned')
        .addField('User:', user, true)
        .addField('By:', msg.author, true)
        .addField('Reason:', reason)
        channel.send(log);
    
        var embed = new Discord.MessageEmbed()
        .setTitle('You were banned!')
        .setDescription(reason);
    
        try {
            await user.send(embed);
        } catch(err) {
            console.warn(err);
        }
    
        msg.guild.members.ban(user); // This should not be user.id like I said in my video. I made a mistake. Sorry! :)
    
        msg.channel.send(`**${user}** has been banned by **${msg.author}**!`);
    }
    
});

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

