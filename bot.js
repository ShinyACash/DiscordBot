const Discord = require("discord.js");

const client = new Discord.Client;

const trainedRecently = new Set();
const usedprivserver = new Set();
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
const isMuted = new Set();
const usedCodeRem = new Set();
let dnd = false;
let code1 = false;
let code2 = false;
let code3 = false;
let code4 = false;
let code5 = false;
let code6 = false;
let code7 = false;
let code8 = false;

let r_code1 = false;
let r_code2 = false;
let r_code3 = false;
let r_code4 = false;
let r_code5 = false;
let r_code6 = false;
let r_code7 = false;
let r_code8 = false;
let r_code9 = false;
let r_code10 = false;


//let myID = '';


//let dndtrigger = false;
//const userId = message.guild.members.find(m => m.id === "695513111414964225");





var ms = require('ms');









//var Shiny_fcounter = 0
//var Bot = 'Bot the Bot';
//var Botdig = '6458'; 

var GameProg = 0;




const emoji = client.emojis.cache.get("782957768545665074")
//let myRole = message.guild.roles.cache.find(role => role.name === "{Role Name}");

client.once('ready', () => {
    console.log('Bot online!');
    client.user.setActivity('Dank Memer-senpai, aah~', { type: 'WATCHING' });
    
    //ShinyNcounter += 1;
    //client.channels.cache.get('775564519233028099').send('Hallo people I am online!');
});

//client.user.setActivity('Dank Memer-senpai and Pokétwo-senpai, aah~', { type: 'WATCHING' });


//const { writeFileSync } = require("fs");
//const data = require("C:/Users/Akash/Documents/GitHub/DiscordBot/app/bot.js");
//const secretdata = require("C:/Users/Akash/Documents/GitHub/DiscordBot/app/bot.js");
//ShinyNcounter += 1 



const usersMap = new Map();
const LIMIT = 5;
const TIME = 300000;
const DIFF = 3000;

client.on('message', async(message) => {
    if(message.author.bot) return;
    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        const { lastMessage, timer } = userData;
        const difference = message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;
        console.log(difference);

        if(difference > DIFF) {
            clearTimeout(timer);
            console.log('Cleared Timeout');
            userData.msgCount = 1;
            userData.lastMessage = message;
            userData.timer = setTimeout(() => {
                usersMap.delete(message.author.id);
                console.log('Removed from map.')
            }, TIME);
            usersMap.set(message.author.id, userData)
        }
        else {

            if(message.member.hasPermission('MANAGE_MESSAGES')){
                return;
            }
            else{
                ++msgCount;
                if(parseInt(msgCount) === LIMIT) {
                    let muterole = message.guild.roles.cache.find(role => role.name === 'Muted');
                    if(!muterole) {
                        try{
                            muterole = await message.guild.roles.create({
                                name : "Muted",
                                permissions: []
                            })
                            message.guild.channels.cache.forEach(async (channel, id) => {
                                await channel.createOverwrite(muterole, {
                                    SEND_MESSAGES: false,
                                    ADD_REACTIONS : false
                                })
                            })
                        }catch (e) {
                            console.log(e)
                        }
                    }
                    message.member.roles.add(muterole);
                    //if(message.member.hasPermission('MANAGE_MESSAGES')) return message.member.roles.remove(muterole);
                    isMuted.add(message.author.id);
                    //message.channel.send('You have been muted!');
                    var channel = message.guild.channels.cache.get("778889714001510400");

                    var logAuto = new Discord.MessageEmbed()
                    .setColor('#02FE97')
                    .setTitle('User Muted (Spam Detected)')
                    .setThumbnail(message.author.displayAvatarURL())
                    .addField('User:', message.author.username, true)
                    .addField('Time muted for: ', '5 min', true)
                    channel.send(logAuto);

                    isMuted.add(`${member}`);
                    setTimeout(() => {
                        message.member.roles.remove(muterole);
                        //message.channel.send('You have been unmuted!')
                        var logAutounmute = new Discord.MessageEmbed()
                        .setColor('#02FE97')
                        .setTitle('User Unmuted')
                        .setThumbnail(message.author.displayAvatarURL())
                        .addField('User:', message.author.username, true)
                        channel.send(logAutounmute);

                        isMuted.delete(`${member}`);
                    }, TIME);
                }else {
                    userData.msgCount = msgCount;
                    usersMap.set(message.author.id, userData);
                }
            }
        }
    }
    else {
        let fn = setTimeout(() => {
            usersMap.delete(message.author.id);
            console.log('Removed from map.')
        }, TIME);
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage : message,
            timer : fn
        });
    }
    //const userId = message.guild.members.find(m => m.id === "695513111414964225");
})

client.on('messageDelete', async msg =>{
    let deletelog = new Discord.MessageEmbed()
    .setTitle('Yo a msg was deleted!')
    .setColor('#ff0000')
    .setThumbnail(msg.author.displayAvatarURL())
    .addField('Deleted from: ', msg.channel)
    .addField('Deleted msg: ', msg.content)
    .addField('Who\'s msg was it?: ', msg.author.tag)
    .setFooter('what a scrub');

    let deletelogging = client.channels.cache.get('775608981451702302');

    deletelogging.send(deletelog);
})


client.on('message', async(msg) => {
    //var ms = require('ms');
    if(msg.author.bot) return;
    if(!msg.guild) return;

    var prefix = ".";
    if(!msg.content.toLowerCase().startsWith(prefix)) return;

    var args = msg.content.split(' ');
    var cmd = args.shift().slice(prefix.length).toLowerCase();

    //const userID = msg.guild.members.find(m => m.id === "695513111414964225");

    

    if(cmd === "mute"){
        if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You can\'t even use that, maybe try when u actually HAVE mod abilities...');

        var user = msg.mentions.users.first();
        if(!user) return msg.reply('You didn\'t mention anyone!');

        var member;

        try {
            member = await msg.guild.members.fetch(user);
        } catch(err) {
            member = null;
        }

        if(!member) return msg.reply('Stop messing with me boi!');
        if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You cannot mute that person!, so yea...stop trying');

        

        var reason = args.splice(2).join(' ');
        if(!reason) return msg.reply('You need to give a reason!');

        var channel = msg.guild.channels.cache.get("778889714001510400");
        var logchannel = msg.guild.channels.cache.get("775608981451702302");

        var log = new Discord.MessageEmbed()
        .setColor('#02FE97')
        .setTitle('User Muted')
        .addField('User:', user, true)
        .addField('By:', msg.author, true)
        .addField('Reason:', reason)
        channel.send(log);

        var adminlog = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Mute Case')
        .addField('User:', user, true)
        .addField('By:', msg.author, true)
        .setFooter('↑ that person is a scum, beware...')
        logchannel.send(adminlog);

        var embed = new Discord.MessageEmbed()
        .setTitle('You were muted!')
        .addField('Reason:', reason, true);

        try {
            user.send(embed);
        } catch(err) {
        console.warn(err);
        }

        var role = msg.guild.roles.cache.find(r => r.name === 'Muted');
        isMuted.add(`${member}`);
        member.roles.add(role);

        setTimeout(async() => {
         member.roles.remove(role);
        }, 600000);

    }

    if(cmd === "msgshiny"){
        if(dnd == true){
            let replies = ["Shiny-sama is currently busy, if he is REALLY needed then pls dm him. じゃあな! 😄","Shiny-sama is busy rn... If you try evade dnd mode... あなたを殺す, 🔪", "Ya-hallo, he's on dnd mode, pls msg him in dms or here he'll read them later 🥱", "He's busy, dm him if it's important.", "Look, sometimes a person can be busy, right now Shiny-sama is busy. DND ⛔", "Shiny-sama わ忙しいです. Use google translate if u want.", "He busy, DESU!","My guy busy man there are times when u don't wanna get disturbed.",  "Probs watching anime or studying or something else ig.", "Not available...."];
            let rand_replies = replies[Math.floor(Math.random() * replies.length)];
            msg.channel.send(rand_replies);
        }

        if(dnd == false){
            var m_msg = args.splice(1).join(' ');
            if(!m_msg) return msg.reply('u wasted my time building an embed for nothin\'? Not cool man.');

            var msg_embed = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setTitle('There\'s a need for you Shiny-sama')
            .addField('By:', msg.author, true)
            .addField('Msg:', m_msg, true)
            client.users.cache.get("695513111414964225").send(msg_embed);

            msg.channel.send("msg succesfully sent! ✅");
        }
    }

    if(cmd === "dnd"){
        if(msg.author.id === "695513111414964225"){
            dnd = true;
            msg.channel.send("gucci desu.");
            myID = msg.author.id;
            //id = msg.author.id;
        }
        else{
            msg.channel.send("look bruv, it's only for Shiny-sama.");
        }
    }

    if(cmd === "dndend"){
        if(msg.author.id === "695513111414964225"){
            if(dnd == true){
                dnd = false;
                msg.channel.send("dnd mode disabled.");
            }
            
            else{
                msg.channel.send("it's already disabled.");
            }
        }
    }

    

   /*if(msg.content.includes('')){
        
        /*var user = msg.mentions.users.first();
        if(!user) return;
        var member;

        try {
            member = await msg.guild.members.fetch(user);
        } catch(err) {
            member = null;
        }

        if(!member) return;

        console.log("check code here");

        if(member.roles.find(r => r.name === 'Owner')) return dndtrigger = true;

        if(msg.mentions.users.first === id){
            if(dnd == true){
                console.log("got dat mention!");
                let replies = ["Shiny-sama is currently busy, if he is REALLY needed then pls dm him. じゃあな! 😄", "He's busy, dm him if it's important.", "Look, sometimes a person can be busy, right now Shiny-sama is busy. DND ⛔", "Shiny-sama わ忙しいです. Use google translate if u want.", "He busy, DESU!", "Probs watching anime or studying or something else ig.", "Not available...."];
                let rand_replies = replies[Math.floor(Math.random() * replies.length)];
                msg.channel.send(rand_replies);
            }
            else{
                return;
            } 
        }
        else{
            return;
        }
        
    }


    
    if(msg.mentions.has('<@695513111414964225>')){
        msg.channel.send("mention is working, yay-");
    }

    if(msg.content.startsWith('<@695513111414964225>')){
        msg.channel.send("it works!! 😭");
    }

    function getUserFromMention(mention) {
        if (!mention) return;
    
        if (mention.startsWith('<@') && mention.endsWith('>')) {
            mention = mention.slice(2, -1);
    
            if (mention.startsWith('!')) {
                mention = mention.slice(1);
            }
    
            return client.users.cache.get(mention);
        }
    }*/
   

    


    

    if(cmd === "ps"){
        if(usedprivserver.has(msg.author.id)){
            msg.channel('yo! you already used the command!');
        }
        else{
            msg.channel.send("https://www.roblox.com/games/286090429/Arsenal?privateServerLinkCode=vUfmN_6NMDvhBBYoO5RxtFi3pKcYydxu")
            .then(msg => {
                msg.delete({ timeout: 30000 })
            });
            msg.channel.send("This Link will be deleted in 30 secs")
            .then(msg => {
                msg.delete({ timeout: 30000 })
            });

            usedprivserver.add(msg.author.id);

            setTimeout(async() =>{
                usedprivserver.delete(msg.author.id);
            }, 30000)
        }
    }


    if(cmd === "unmute"){
        if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You can\'t use that!');

        var user = msg.mentions.users.first();


        var member;
        try {
            member = await msg.guild.members.fetch(user);
        } catch(err) {
            member = null;
        }

        if(!isMuted.has(`${member}`)) return msg.reply('Yo they are not even muted, stfu.'); 

        if(!member) return msg.reply('They aren\'t even in the server!, stop messing with me boi!');
        if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You cannot unmute that person!, so yea...stop trying');

        var role = msg.guild.roles.cache.find(r => r.name === 'Muted');
        member.roles.remove(role);

        var channel = msg.guild.channels.cache.get("778889714001510400");
        var logchannel = msg.guild.channels.cache.get("775608981451702302");

        var log = new Discord.MessageEmbed()
        .setColor('#02FE97')
        .setTitle('User Unmuted')
        .addField('User:', user, true)
        .addField('By (Mod):', msg.author, true)
        channel.send(log);

        var adminlog = new Discord.MessageEmbed()
        .setColor('#00ff00')
        .setTitle('Unmute Case')
        .addField('User:', user, true)
        .addField('By:', msg.author, true)
        .setFooter('↑ that person is a nigga, beware...')
        logchannel.send(adminlog);

        isMuted.remove(`${member}`);


    }

    if(cmd === "ping"){

        var ping = client.ws.ping;

        var log = new Discord.MessageEmbed()
        .setColor('#02FE97')
        .setTitle('Ping Check')
        .addField('Yo ping!! ', ping + 'ms', true)
        msg.channel.send(log);

        //msg.channel.send(`Yo ping!! ${client.ws.ping}ms`);
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
        .setColor('#02FE97')
        .setTitle('User Warned')
        .addField('User:', user, true)
        .addField('By:', msg.author, true)
        .addField('Reason:', reason)
        channel.send(log);
    
        var embed = new Discord.MessageEmbed()
        .setTitle('You were warned!, better listen to the moderator...')
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
        .setColor('#02FE97')
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
            if(member.hasPermission('ADMINISTRATOR')) return msg.reply('You cannot ban this person!');
        }
    
        var reason = args.splice(1).join(' ');
        if(!reason) return msg.reply('You need to give a reason!');
    
        var channel = msg.guild.channels.cache.get('778889714001510400');
    
        var log = new Discord.MessageEmbed()
        .setColor('#02FE97')
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
    
        msg.guild.members.ban(user); 
    
        msg.channel.send(`**${user}** has been banned by **${msg.author}**!`);
    }
    
    if(cmd === "bdelete"){
        if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You can\'t use that! only mods can when they have to...');
        if (!args[0]) return message.reply('oi, state a number.')
        if (parseInt(args[0]) > 100) return message.reply("you cannot enter more than 100 messages at a time, so yea, also my limit is 2 weeks of msgs.");
        msg.channel.bulkDelete(parseInt(args[0]), true).then(() => {
            msg.channel.send("Deleted "+ parseInt(args[0]) +" messages.").then(msg => msg.delete(3000));
        });
    }
    
});


client.on('message', mg => {

    if(mg.content === 'JONAH FALCON'){
        mg.author.send('Ah the person with the biggest dick huh, welp he was the one who created elon\'s child....');
        code1 = true;
    }
    if(mg.content === 'X AE A-XII'){
        if(code1 == true){
            mg.author.send('https://cdn.discordapp.com/attachments/774877979552776192/814459289841303562/20210225_164453.mp4');
            mg.author.send('srry for the quality but thas wut discord can handle for now-');
            code2 = true;
        }
        else{
            mg.author.send('Did you cheat?');
        }
       
        
    }
    if(mg.content === 'MOMETASONE AQUEOUS'){
        if(code2 == true){
            mg.author.send('best president ever is what you need negus.., welp good job finding a code.');
            code3 = true;
        }
        else{
            mg.author.send('Did you cheat?');
        }
        //mg.author.send('best president ever is what you need negus.., welp good job finding a code.');
        
    }
    if(mg.content === 'DONALD JOHN TRUMP'){
        if(code3 == true){
            mg.author.send('Watch Re:zero man Re:zero OP, welp just a suggestion, but good job finding a code boi!!');
            code4 = true;
        }
        else{
            mg.author.send('Did you cheat?');
        }
        //mg.author.send('Watch Re:zero man Re:zero OP, welp just a suggestion, but good job finding a code boi!!');
        
    }
    if(mg.content === 'PARADISUS PARADOXUM'){
        if(code4 == true){
            mg.author.send('oh hallo, i was playing pokemon made for us bots, welp u found a code.')
            mg.author.send('https://cdn.discordapp.com/attachments/774877979552776192/813999350329245717/unknown.png');
            code5 = true;
        }
        else{
            mg.author.send('Did you cheat?');
        }
        /*mg.author.send('oh hallo, i was playing pokemon made for us bots, welp u found a code.')
        mg.author.send('https://cdn.discordapp.com/attachments/774877979552776192/813999350329245717/unknown.png');*/
        
    }
    if(mg.content === 'MISSINGNO.'){
        if(code5 == true){
            mg.author.send('Wanna play PHANTOM FORCES? lmaoo, welp good job for missingno. there');
            code6 = true;
        }
        else{
            mg.author.send('Did you cheat?');
        }
        //mg.author.send('Wanna play PHANTOM FORCES? lmaoo, welp good job for missingno. there');
        
    }
    if(mg.content === '292439477'){
        if(code6 == true){
            mg.author.send('Harri Putter all da wae, yes me, bot the bot, is reading it now, also, hey you got a code!');
            code7 = true;
        }
        else{
            mg.author.send('Did you cheat?');
        }
        //mg.author.send('Harri Putter all da wae, yes me, bot the bot, is reading it now, also, hey you got a code!');
        
    }
    if(mg.content === 'J.K. ROWLING'){
        if(code7 == true){
            mg.author.send('GOOD JOB!! You found all codes, now just type ".MSGSHINY  ! REVEAL-CODE" to get your free perma admin!');
            code8 = true;
        }
        else{
            mg.author.send('Did you cheat?');
        }
        //mg.author.send('GOOD JOB!! You found all codes, now just type ".MSGSHINY  ! REVEAL-CODE" to get your free perma admin!');
        
    }
    if(mg.content === '.MSGSHINY  ! REVEAL-CODE'){
        if(code8 == true){
            mg.author.send('SIKE!! THAS THE WRONG CODESET!! srry bruv but u messed up');
            mg.author.send('https://tenor.com/view/ohhh-whoah-gif-14206432');
            //code9 = true;
        }
        else{
            mg.author.send('Did you cheat?');
        }
        //mg.author.send('SIKE!! THAS THE WRONG CODESET!! srry bruv but u messed up');
        //mg.author.send('https://tenor.com/view/ohhh-whoah-gif-14206432');
        
    }
    if(mg.content === 'HADESSWORD.MP4'){
        mg.author.send('Ah, so u finally found it in admin, i see, welp gl with the next one');
        mg.author.send('https://cdn.discordapp.com/attachments/774877979552776192/814192226707963904/20210224_230047_3.mp4');
        r_code1 = true;
        
    }
    if(mg.content === '17155806230'){
        if(r_code1 == true){
            mg.author.send('aight, bruv think of the most randomest and longest word with a lotta letters. also, ye that was a code');
            r_code2 = true;
        }
        else{
            mg.author.send('Did you cheat?');
        }
        
    }
    if(mg.content === 'LLANFAIRPWLLGWYNGYLLGOGERYCHWYRNDROBWLLLLANTYSILIOGOGOGOCH'){
        if(r_code2 == true){
            mg.author.send('HOLY SHIT you actually found out that it was ^ monstrocity. also, bot the bot is now coding for ROBLOX!!');
            mg.author.send('https://cdn.discordapp.com/attachments/774877979552776192/813986880126582794/Screenshot_2.png');
            r_code3 = true;
        }
        else{
            mg.author.send('Did you cheat?');
        }
        
    }
    if(mg.content === 'SAFER INTERNET DAY 2021'){
        if(r_code3 == true){
            mg.author.send('Took you quite some time eh? welp the next code is also hidden in the piture, gl.');
            r_code4 = true;
        }
        else{
            mg.author.send('Did you cheat?');
        }
        //mg.author.send('Took you quite some time eh? welp the next code is also hidden in the piture, gl.');
        
    }
    if(mg.content === '774877979552776192/813986880126582794'){
        if(r_code4 == true){
            mg.author.send('aight bruv, you just need our trade mark for fucking india. yes, NUKE THIS COUNTRY!!');
            r_code5 = true;
        }
        else{
            mg.author.send('Did you cheat?');
        }
        //mg.author.send('aight bruv, you just need our trade mark for fucking india. yes, NUKE THIS COUNTRY!!');
        
    }
    if(mg.content === 'FUCK INDIA™'){
        if(r_code5 == true){
            mg.author.send('One the hardest geometry dash lvls is all you need negus. gl shounen!');
            r_code6 = true;
        }
        else{
            mg.author.send('Did you cheat?');
        }
        //mg.author.send('One the hardest geometry dash lvls is all you need negus. gl shounen!');
        
    }
    if(mg.content === 'THE GOLDEN'){
        if(r_code6 == true){
            mg.author.send('next one is what a group of programmers might keep their name, google is your best bud here nigga.');
            r_code7 = true;
        }
        else{
            mg.author.send('Did you cheat?');
        }
        
        
    }
    if(mg.content === 'ABSTRACT CONNOISSEURS'){
        if(r_code7 == true){
            mg.author.send('yo look at this car,');
            mg.author.send('https://cdn.discordapp.com/attachments/774877979552776192/813991996968402974/9k.png');
            mg.author.send("lmaoo, also for the next code u might need to find a name... welp i didn't have much to say anyway.");
            r_code8 = true;
        }
        else{
            mg.author.send('Did you cheat?');
        }
        
        
    }
    if(mg.content === 'DAIHATSU NAKED'){
        if(r_code8 == true){
            mg.author.send('yo u just need ONE MORE code and u gucci bruv!! also, check out the GT 1030 availability in online stores, this graphic card is enough to run my game i suppose.');
            r_code9 = true;
        }
        else{
            mg.author.send('Did you cheat?');
        }
        //mg.author.send('yo u just need ONE MORE code and u gucci bruv!! also, check out the GT 1030 availability in online stores, this graphic card is enough to run my game i suppose.');
        
    }
    if(mg.content === 'PH-GT1030-O2G'){
        if(r_code9 == true){
            mg.author.send('DAYUM, the fact that you made it this far, SUBARASHIKI, dewa, OMEDETO GOZAIMAS (translation: magnificent, well, CONGRATULATIONS) you got yourself free perma admin negu');
            r_code10 = true;
        }
        else{
            mg.author.send('Did you cheat?');
        }
        //mg.author.send('DAYUM, the fact that you made it this far, SUBARASHIKI, dewa, OMEDETO GOZAIMAS (translation: magnificent, well, CONGRATULATIONS) you got yourself free perma admin negu');
        
    }
    


})

client.on('message', msg => {
    if(msg.content.includes('https://discord.gg/')){
        msg.delete({ timeout : 0 })

        var user = msg.author;

        var role = msg.guild.roles.cache.find(r => r.name === 'Muted');

        var channel = msg.guild.channels.cache.get('778889714001510400');

        msg.member.roles.add(role);

        var mutelog = new Discord.MessageEmbed()
        .setTitle('Rules Violator')
        .setColor('#02FE97')
        .addField('User: ', user)
        .addField('Reason: ', 'boi tried to send server invites')
        .setFooter('pepega boi.')
        channel.send(mutelog);

        setTimeout(async() =>{
            msg.member.roles.remove(role);
            channel.send('he is now unmuted');
        }, 600000)

    }
    if (msg.content.includes('bot the bot u are nice' || 'bot the bot u are cool')) {
        msg.reply('Thanks, you are cool too');
    }
    else if (msg.content === "!check mention") {
        msg.channel.send("@everyone");
    }
    if(msg.content.includes('entertain me') || msg.content.includes('intertain me')){
        msg.reply('git entertained. :Pepega:');
    }
    else if (msg.content.includes('FUCK')) {
        msg.reply('Do you wanna get banned? jk lol. Use abbreviations');
    }

    if(msg.content.includes('nigga') || msg.content.includes('NIGGA')){
        msg.channel.send('yeah THAT, NiGgA');
    }
    
    if(msg.content.includes('ty') || msg.content.includes('thanks') || msg.content.includes('thnx') || msg.content.includes('thank')){
        if(msg.content.includes('bot')){
            msg.channel.send('welcome BITCH');
        }
    }
    if(msg.content.includes('haha')){
        msg.channel.send('imma take over the world with AI one day, sadly javascript ain\'t that powerful...')
    }
    if(msg.content.includes('india') || msg.content.includes('India')){
        msg.channel.send('Imma hack north korea\'s nuclear launch systems one day and nuke that country...');
    }
    if(msg.content === 'SHINYGOTREM'){
        if(usedCodeRem.has(msg.author.id)){
            msg.react('❌');
            msg.channel.send(`bro, ${msg.author}, you already used your coupon u dumb-peep-`);
        }
        else{
            var codeembed = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .setColor('#0BB5DB')
            .setThumbnail('https://cdn.discordapp.com/attachments/775944283039203359/845542331184054272/340201012057900.png')
            .addField('You have now claimed your coupon of 40% off on any pass or sub in the server!', ' ', true)
            .addField('Expiry: ', 'one month after claim.', true)
            .addField('Use it wisely!')
            .setFooter('Finally! | 🥰')
            msg.channel.send(codeembed);

            var dateofclaim = new Discord.MessageEmbed()
            .setTitle('A memeber claimed a coupon!')
            .addField('Who was it?: ', msg.author, true)
            .addField('Date and Time of claim: ', ' ', true)
            .setTimestamp(msg.createdAt)
            .addField('Expiry :', 'Pls type it out. Yeah my code isn\'t that well devloped-', true)
            client.users.cache.get("695513111414964225").send(dateofclaim);


            msg.author.send('Take a screenshot of it and send it to @Pr0gramm3d_t0_K!LL if you want extra measurements (a dm is already sent to him for the date of claim) for him to remember and not scam you. -just an adivec from your\'s truly, Bot the Bot.-')
            usedCodeRem.add(msg.author.id);
        }
        
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
        let mem = ['ShinyACash', 'xNightmare', 'blindbutnotblind'];
        let rand_mem = mem[Math.floor(Math.random() * mem.length)];
        msg.channel.send('The random person is ' + rand_mem);
    }
    
})








client.login(process.env.token);

