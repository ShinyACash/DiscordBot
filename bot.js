const Discord = require("discord.js");

const client = new Discord.Client;

const trainedRecently = new Set();
const mission = new Set();
const ramen = new Set();
const hasattacked = new Set();
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

var Gameon = 0;
const isInGame = new Set();
var startingMSG = 0;
const isWinner = new Set();
const isImp = new Set();
const isNormie = new Set();
const isGuard = new Set();


var ms = require('ms');

var S_Health = 100;
var D_Health = 100;
var O_Health = 100;

var duelturn = 0;

var S_clone = 0;
var D_clone = 0;
var O_clone = 0;


var S_tomoe = 0;
var D_tomoe = 0;
var O_tomoe = 0;

var S_sharingan = 0;
var D_sharingan = 0;
var O_sharingan = 0;

var S_tomoe_msg = 0;
var D_tomoe_msg = 0;
var O_tomoe_msg = 0;

var S_tailscount = 0;
var D_tailscount = 0;
var O_tailscount = 0;


var S_Chakra = 50;
var D_Chakra = 50;
var O_Chakra = 50;

var tS_Chakra = S_Chakra;
var tD_Chakra = D_Chakra;
var tO_Chakra = O_Chakra;

var dueler1 = "";
var dueler2 = "";




//var Shiny_fcounter = 0
//var Bot = 'Bot the Bot';
//var Botdig = '6458'; 

var GameProg = 0;




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
                setTimeout(() => {
                    message.member.roles.remove(muterole);
                    //message.channel.send('You have been unmuted!')
                    var logAutounmute = new Discord.MessageEmbed()
                    .setColor('#02FE97')
                    .setTitle('User Unmuted')
                    .setThumbnail(message.author.displayAvatarURL())
                    .addField('User:', message.author.username, true)
                    channel.send(logAutounmute);
                }, TIME);
            } else {
                userData.msgCount = msgCount;
                usersMap.set(message.author.id, userData);
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
})

client.on('messageDelete', async msg =>{
    let deletelog = new Discord.MessageEmbed()
    .setTitle('Yo a msg was deleted, nigga!')
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

        if(!member) return msg.reply('They aren\'t even in the server!, stop messing with me boi!');
        if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You cannot mute that person!, so yea...stop trying');

        

        var reason = args.splice(2).join(' ');
        if(!reason) return msg.reply('You need to give a reason!');

        var channel = msg.guild.channels.cache.get("778889714001510400");

        var log = new Discord.MessageEmbed()
        .setColor('#02FE97')
        .setTitle('User Muted')
        .addField('User:', user, true)
        .addField('By:', msg.author, true)
        .addField('Reason:', reason)
        channel.send(log);

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

        client.channels.cache.get('775608981451702302').send(`**${user}** has been muted by **${msg.author}**!`);
    }

    if(cmd === "train"){
        let train_msg = ['by 1', 'by 10', 'by 1', 'by 10', 'by 1', 'by 10', 'by 10', 'by 1', 'by 10', 'by 1', 'by 10', 'by 100', 'by 50', 'by 50', 'by 50', 'by 50', 'by 50', 'by 50', 'by 1000', 'by 100', 'by 10', 'by 10', 'by 10', 'by 10', 'by 10'];
        let rand_train_msg = train_msg[Math.floor(Math.random() * train_msg.length)];
        if(trainedRecently.has(msg.author.id)){
            let waitlog = new Discord.MessageEmbed()
            .setTitle('Chill out')
            .setColor('#02FE97')
            .setDescription(`Yo ${msg.author.username}, chill out, training and everyday activities require chakra and u can die if u run out...`)
            .setDescription('just relax for 1 min \'tebayuo...')
            msg.channel.send(waitlog);
        }
        else{
            msg.channel.send('You trained and your chakra count went up ' + rand_train_msg + ` ${msg.author}`);
            if(msg.author.id === '695513111414964225'){
                if(rand_train_msg === 'by 1'){
                    S_Chakra += 1;
                }
                else if(rand_train_msg === 'by 10'){
                    S_Chakra += 10;
                }
                else if(rand_train_msg === 'by 100'){
                    S_Chakra += 100;
                }
                else if(rand_train_msg === 'by 50'){
                    S_Chakra += 50;
                }
                else if(rand_train_msg === 'by 1000'){
                    S_Chakra += 1000;
                }
            }
            else if(msg.author.id === '774874294999580672'){
                if(rand_train_msg === 'by 1'){
                    D_Chakra += 1;
                }
                else if(rand_train_msg === 'by 10'){
                    D_Chakra += 10;
                }
                else if(rand_train_msg === 'by 100'){
                    D_Chakra += 100;
                }
                else if(rand_train_msg === 'by 50'){
                    D_Chakra += 50;
                }
                else if(rand_train_msg === 'by 1000'){
                    D_Chakra += 1000;
                }
            }
            else if(msg.author.id === '714021486243086388'){
                if(rand_train_msg === 'by 1'){
                    O_Chakra += 1;
                }
                else if(rand_train_msg === 'by 10'){
                    O_Chakra += 10;
                }
                else if(rand_train_msg === 'by 100'){
                    O_Chakra += 100;
                }
                else if(rand_train_msg === 'by 50'){
                    O_Chakra += 50;
                }
                else if(rand_train_msg === 'by 1000'){
                    O_Chakra += 1000;
                }
            }

            trainedRecently.add(msg.author.id)
            setTimeout(async() => {
                trainedRecently.delete(msg.author.id);
            }, 60000)
        }
    }
    
    if(cmd === 'mission'){
        let mission_msg = ['success', 'success', 'success', 'failure', 'failure', 'success', 'success', 'success', 'failure', 'success', 'success', 'failure', 'success', 'failure'];
        let rand_mission_msg = mission_msg[Math.floor(Math.random() * mission_msg.length)];
        let mission_msg2 = ['And u had to kill 2 so u gained 250 chakra lvl, but u lost 5 health.', 'And u had to kill 2 so u gained 250 chakra lvl, but u lost 5 health.','And u had to kill 2 so u gained 250 chakra lvl, but u lost 5 health.', 'And u had to kill 2 so u gained 250 chakra lvl but u lost 10 health.', 'And u had to kill 3 so u gained 500 chakra lvl.', 'And u had to kill 4 so u gained 1000 chakra lvl but u lost 25 health.'];
        let rand_mission_msg2 = mission_msg2[Math.floor(Math.random() * mission_msg2.length)];
        
        if(mission.has(msg.author.id)){
            let missionwaitlog = new Discord.MessageEmbed()
            .setTitle('Chill out')
            .setColor('#02FE97')
            .setDescription(`Yo ${msg.author.username}, chill out, training and everyday activities require chakra and u can die if u run out...`)
            .setDescription('just relax for 10 min \'tebayuo...')
            msg.channel.send(missionwaitlog);
        }
        else{
            if(rand_mission_msg === 'failure'){
                msg.channel.send(`Your mission failed and u used up 20 chakra (current chakra not total amount)`);
                if(msg.author.id === '695513111414964225'){
                    tS_Chakra -= 20;
                }
                if(msg.author.id === '774874294999580672'){
                    tD_Chakra -= 20;
                }
                if(msg.author.id === '714021486243086388'){
                    tO_Chakra -= 20;
                }

            }
            else if(rand_mission_msg === 'success'){
                if(msg.author.id === '695513111414964225'){
                    if(rand_mission_msg2 === 'And u had to kill 2 so u gained 250 chakra lvl, but u lost 5 health.'){
                        S_Chakra += 250;
                        S_Health -= 5;
                    }
                    if(rand_mission_msg2 === 'And u had to kill 2 so u gained 250 chakra lvl, but u lost 10 health.'){
                        S_Chakra += 250;
                        S_Health -= 10;
                    }
                    if(rand_mission_msg2 === 'And u had to kill 3 so u gained 500 chakra lvl.'){
                        S_Chakra += 500;
                    }
                    if(rand_mission_msg2 === 'And u had to kill 4 so u gained 1000 chakra lvl, but u lost 25 health.'){
                        S_Chakra += 1000;
                        S_Health -= 25;
                    }
                }
                if(msg.author.id === '774874294999580672'){
                    if(rand_mission_msg2 === 'And u had to kill 2 so u gained 250 chakra lvl, but u lost 5 health.'){
                        D_Chakra += 250;
                        D_Health -= 5;
                    }
                    if(rand_mission_msg2 === 'And u had to kill 2 so u gained 250 chakra lvl, but u lost 10 health.'){
                        D_Chakra += 250;
                        D_Health -= 10;
                    }
                    if(rand_mission_msg2 === 'And u had to kill 3 so u gained 500 chakra lvl.'){
                        D_Chakra += 500;
                    }
                    if(rand_mission_msg2 === 'And u had to kill 4 so u gained 1000 chakra lvl, but u lost 25 health.'){
                        D_Chakra += 1000;
                        D_Health -= 25;
                    }
                }
                if(msg.author.id === '714021486243086388'){
                    if(rand_mission_msg2 === 'And u had to kill 2 so u gained 250 chakra lvl, but u lost 5 health.'){
                        O_Chakra += 250;
                        O_Health -= 5;
                    }
                    if(rand_mission_msg2 === 'And u had to kill 2 so u gained 250 chakra lvl, but u lost 10 health.'){
                        O_Chakra += 250;
                        O_Health -= 10;
                    }
                    if(rand_mission_msg2 === 'And u had to kill 3 so u gained 500 chakra lvl.'){
                        O_Chakra += 500;
                    }
                    if(rand_mission_msg2 === 'And u had to kill 4 so u gained 1000 chakra lvl, but u lost 25 health.'){
                        O_Chakra += 1000;
                        O_Health -= 25;
                    }
                }
                let missionlog = new Discord.MessageEmbed()
                .setTitle('Mission Success!')
                .setColor('#02FE97')
                .addField('You passed your mission with a: ', rand_mission_msg, true)
                .addField(rand_mission_msg2, 'Good Job!! - Hokage', false)
                msg.channel.send(missionlog);

                mission.add(msg.author.id)

                setTimeout(async() => {
                    mission.delete(msg.author.id);
                }, 600000)
            }
        }
    }

    if(cmd === 'ramen'){
        if(ramen.has(msg.author.id)){
            msg.channel.send('YO! u JUST ate ramen, take care of your stomach...');
        }
        else{
            if(msg.author.id === '695513111414964225'){
                tS_Chakra = S_Chakra;
                S_Health = 100;
                msg.channel.send('You ate some ramen and now u are full health and chakra!!');
            }
            if(msg.author.id === '774874294999580672'){
                tD_Chakra = D_Chakra;
                D_Health = 100;
                msg.channel.send('You ate some ramen and now u are full health and chakra!!');
            }
            if(msg.author.id === '714021486243086388'){
                tO_Chakra = S_Chakra;
                O_Health = 100;
                msg.channel.send('You ate some ramen and now u are full health and chakra!!');
            }
            ramen.add(msg.author.id);
            setTimeout(async() => {
                ramen.delete(msg.author.id);
            }, 60000)
        }
        
    }

    if(cmd === "chakra"){
        if(msg.author.id === '695513111414964225'){
            let S_chakralog = new Discord.MessageEmbed()
            .setTitle('Chakra Count')
            .setColor('#02FE97')
            .addField('Your Chakra: ', S_Chakra, true)
            msg.channel.send(S_chakralog);
            if(S_tomoe_msg === 1) return;
            else{
                if(S_Chakra >= 2000){
                    S_tomoe += 1;
                    msg.author.send('You felt a sensation in your eyes.... you now have the one tomoe SHARINGAN!!');
                    S_tomoe_msg += 1;
                    S_sharingan = 100;
                }
            }
        }
        if(msg.author.id === '774874294999580672'){
            let D_chakralog = new Discord.MessageEmbed()
            .setTitle('Chakra Count')
            .setColor('#02FE97')
            .addField('Your Chakra: ', D_Chakra, true)
            msg.channel.send(D_chakralog);
            if(D_tomoe_msg === 1) return;
            else{
                if(D_Chakra >= 2000){
                    D_tomoe += 1;
                    msg.author.send('You felt a sensation in your eyes.... you now have the one tomoe SHARINGAN!!');
                    D_tomoe_msg += 1;
                    D_sharingan = 100;
                }
            }
        }
        if(msg.author.id === '714021486243086388'){
            let O_chakralog = new Discord.MessageEmbed()
            .setTitle('Chakra Count')
            .setColor('#02FE97')
            .addField('Your Chakra: ', O_Chakra, true)
            msg.channel.send(O_chakralog);
            if(O_tomoe_msg === 1) return;
            else{
                if(O_Chakra >= 2000){
                    O_tomoe += 1;
                    msg.author.send('You felt a sensation in your eyes.... you now have the one tomoe SHARINGAN!!');
                    O_tomoe_msg += 1;
                }
            }
        }

        
    }

    if(cmd === 'duel'){
        var dueler = msg.mentions.users.first();
        if(!dueler) return msg.reply('You didn\'t mention anyone!');
        if(msg.author.id === '695513111414964225'){
            if(dueler.id === '774874294999580672'){
                msg.channel.send(`Ayo ${msg.author}, you go first.`);
                //dueler1 = `${msg.author.id}`;
                //dueler2 = `${dueler.id}`;
                Gameon = 1;
                var jutsulog = new Discord.MessageEmbed()
                .setTitle('All Jutsus')
                .setColor('#02FE97')
                .addField('clone(10 chakra), kunai(5 chakra), fireball(100 chakra), galepalm (200 chakra), mudwall(500 chakra), minirasengan(1000 chakra), flamewheel(800 chakra), genjutsu(1000 chakra + 10 sharingan), rasengan(2000 chakra), woodbarier(1500 chakra), chidori(2500 chakra + 50 sharingan), giantrasengan(4000 chakra), blackchidori(5000 chakra + 100 sharingan), rasenganbarrage(5000 chakra), majesticflame(7000 chakra + 100 sharingan), senin-mode/sage mode is not yet available...')
                msg.channel.send(jutsulog);
            }
        }
        if(msg.author.id === '774874294999580672'){
            if(dueler.id === '695513111414964225'){
            
            }
            if(dueler.id === '714021486243086388'){
                
            }
        }
        if(msg.author.id === '714021486243086388'){
            if(dueler.id === '695513111414964225'){
            
            }
            if(dueler.id === '774874294999580672'){
                
            }
        }
    }

    if(cmd === 'clone'){
        if(Gameon === 1){
            if(msg.author.id === '695513111414964225'){
                if(hasattacked.has(msg.author.id)){
                    msg.channel.send(`ayo ${msg.author}, u need at least 10 secs to use chakra again!`);
                }
                else{
                    S_clone = 1;
                    tS_Chakra -= 10;
                    msg.channel.send('Shiny used BUSHIN-NO-JUTSU!!');
                    hasattacked.add(msg.author.id);
                    if(tS_Chakra <= 0){
                        msg.channel.send('Shiny died cuz he ran out of chakra, Dan won!!');
                        Gameon = 0;
                        if(D_Chakra >= 10000){
                            msg.channel.send('Dan has awakened his MANGEKYO SHARINGAN!!! for killing his friend... good job?');
                        }
                    }

                    setTimeout(async() =>{
                        hasattacked.delete(msg.author.id);

                    }, 10000)
                }
            }

            if(msg.author.id === '774874294999580672'){
                if(hasattacked.has(msg.author.id)){
                    msg.channel.send(`ayo ${msg.author}, u need at least 10 secs to use chakra again!`);
                }
                else{
                    D_clone = 1;
                    tD_Chakra -= 10;
                    msg.channel.send('Dan used BUSHIN-NO-JUTSU!!');
                    hasattacked.add(msg.author.id);
                    if(tD_Chakra <= 0){
                        msg.channel.send('Dan died, Shiny won!!');
                        Gameon = 0;
                        if(S_Chakra >= 10000){
                            msg.channel.send('Shiny has awakened his MANGEKYO SHARINGAN!!! for killing his friend... good job?');
                        }
                    }
                    setTimeout(async() =>{
                        hasattacked.delete(msg.author.id);
                    }, 10000)
                }
            }
            
        }
    }

    if(cmd === 'fireball'){
        if(Gameon === 1){
            if(msg.author.id === '695513111414964225'){
                if(hasattacked.has(msg.author.id)){
                    msg.channel.send(`ayo ${msg.author}, u need at least 30 secs to use fireball again!`);
                }
                else{
                    if(S_clone = 1){
                        D_Health -= 35;
                        S_clone = 0;
                        if(D_Health <= 0){
                            msg.channel.send('Dan died, Shiny won!!');
                            Gameon = 0;
                            if(S_Chakra >= 10000){
                                msg.channel.send('Shiny has awakened his MANGEKYO SHARINGAN!!! for killing his friend... good job?');
                            }
                        }
                        msg.channel.send('Shiny Hit Dan with a fireball jutsu and it did 35 dmg cuz of the clone!, but used 100 chakra');
                    }
                    else{
                        D_Health -= 35;
                        msg.channel.send('Shiny did 35 dmg to dan by hitting him with a fireball jutsu and used 100 chakra');
                    }
                    tS_Chakra -= 100;
                    if(tS_Chakra <= 0){
                        msg.channel.send('Shiny died, Dan won!!');
                        Gameon = 0;
                        if(D_Chakra >= 10000){
                            msg.channel.send('Dan has awakened his MANGEKYO SHARINGAN!!! for killing his friend... good job?');
                        }
                    }

                    setTimeout(async() =>{
                        hasattacked.delete(msg.author.id);

                    }, 30000)
                }
            }

            if(msg.author.id === '774874294999580672'){
                if(hasattacked.has(msg.author.id)){
                    msg.channel.send(`ayo ${msg.author}, u need at least 30 secs to use fireball jutsu again!`);
                }
                else{
                    
                    if(D_clone = 1){
                        S_Health -= 35;
                        D_clone = 0;
                        if(S_Health <= 0){
                            msg.channel.send('Shiny died, Dan won!!');
                            Gameon = 0;
                            if(S_Chakra >= 10000){
                                msg.channel.send('Shiny has awakened his MANGEKYO SHARINGAN!!! for killing his friend... good job?');
                            }
                        }
                        msg.channel.send('Dan hit Shiny with a fireball jutsu and it did 35 dmg cuz of the clone!, but used 100 chakra');
                    }
                    
                    else{
                        S_Health -= 35;
                        msg.channel.send('Dan did 35 dmg to shiny by hitting him with a fireball jutsu and used 100 chakra');
                    }
                    tD_Chakra -= 100;
                    if(tD_Chakra <= 0){
                        msg.channel.send('Dan died, Shiny won!!');
                        Gameon = 0;
                        if(S_Chakra >= 10000){
                            msg.channel.send('Shiny has awakened his MANGEKYO SHARINGAN!!! for killing his friend... good job?');
                        }
                    }
                    setTimeout(async() =>{
                        hasattacked.delete(msg.author.id);
                    }, 30000)
                }
            }
            
        }
    }

    if(cmd === 'clone'){
        if(Gameon === 1){
            if(msg.author.id === '695513111414964225'){
                if(hasattacked.has(msg.author.id)){
                    msg.channel.send(`ayo ${msg.author}, u need at least 10 secs to use chakra again!`);
                }
                else{
                    S_clone = 1;
                    tS_Chakra -= 10;
                    msg.channel.send('Shiny used BUSHIN-NO-JUTSU!!');
                    hasattacked.add(msg.author.id);
                    if(tS_Chakra <= 0){
                        msg.channel.send('Shiny died cuz he ran out of chakra, Dan won!!');
                        Gameon = 0;
                        if(D_Chakra >= 10000){
                            msg.channel.send('Dan has awakened his MANGEKYO SHARINGAN!!! for killing his friend... good job?');
                        }
                    }

                    setTimeout(async() =>{
                        hasattacked.delete(msg.author.id);

                    }, 10000)
                }
            }

            if(msg.author.id === '774874294999580672'){
                if(hasattacked.has(msg.author.id)){
                    msg.channel.send(`ayo ${msg.author}, u need at least 10 secs to use chakra again!`);
                }
                else{
                    D_clone = 1;
                    tD_Chakra -= 10;
                    msg.channel.send('Dan used BUSHIN-NO-JUTSU!!');
                    hasattacked.add(msg.author.id);
                    if(tD_Chakra <= 0){
                        msg.channel.send('Dan died, Shiny won!!');
                        Gameon = 0;
                        if(S_Chakra >= 10000){
                            msg.channel.send('Shiny has awakened his MANGEKYO SHARINGAN!!! for killing his friend... good job?');
                        }
                    }
                    setTimeout(async() =>{
                        hasattacked.delete(msg.author.id);
                    }, 10000)
                }
            }
            
        }
    }

    if(cmd === "cc"){
        if(msg.author.id === '695513111414964225'){
            let S_Cchakralog = new Discord.MessageEmbed()
            .setTitle('Chakra Count')
            .setColor('#02FE97')
            .addField('Your Current Chakra: ', tS_Chakra, true)
            msg.channel.send(S_Cchakralog);
        }
        if(msg.author.id === '774874294999580672'){
            let D_Cchakralog = new Discord.MessageEmbed()
            .setTitle('Chakra Count')
            .setColor('#02FE97')
            .addField('Your Current Chakra: ', tD_Chakra, true)
            msg.channel.send(D_Cchakralog);
        }
        if(msg.author.id === '714021486243086388'){
            let O_Cchakralog = new Discord.MessageEmbed()
            .setTitle('Chakra Count')
            .setColor('#02FE97')
            .addField('Your Current Chakra: ', tO_Chakra, true)
            msg.channel.send(O_Cchakralog);
        }
    }

    if(cmd === "health"){
        if(msg.author.id === '695513111414964225'){
            let S_hlog = new Discord.MessageEmbed()
            .setTitle('Health Count')
            .setColor('#02FE97')
            .addField('Your Health: ', S_Health, true)
            msg.channel.send(S_hlog);
        }
        if(msg.author.id === '774874294999580672'){
            let D_hlog = new Discord.MessageEmbed()
            .setTitle('Health Count')
            .setColor('#02FE97')
            .addField('Your Health: ', D_Health, true)
            msg.channel.send(D_hlog);
        }
        if(msg.author.id === '714021486243086388'){
            let O_hlog = new Discord.MessageEmbed()
            .setTitle('Health Count')
            .setColor('#02FE97')
            .addField('Your Health: ', O_Health, true)
            msg.channel.send(O_hlog);
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

        var log = new Discord.MessageEmbed()
        .setColor('#02FE97')
        .setTitle('User Unmuted')
        .addField('User:', user, true)
        .addField('By (Mod):', msg.author, true)
        channel.send(log);

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
    
        var channel = msg.guild.channels.cache.find(c => c.name === 'potato');
    
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
    if(msg.content.includes('entertain me')){
        msg.reply('git entertained. :pepega:');
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

