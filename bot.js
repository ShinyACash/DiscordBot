const Discord = require("discord.js");
const client = new Discord.Client;
const isMuted = new Set();
const usedCodeRem = new Set();
const claimed = new Set();
//const hunt = new Set();






const crystal1_1 = new Set();
const crystal1_2 = new Set();
const crystal1_3 = new Set();
const crystal1 = new Set();

const crystal2_1 = new Set();
const crystal2_2 = new Set();
const crystal2_3 = new Set();
const crystal2_4 = new Set();
const crystal2 = new Set();

const crystal3_1 = new Set();
const crystal3_2 = new Set();
const crystal3_3 = new Set();
const crystal3 = new Set();




var danW = 10;
var ogW = 5;

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
                    }, 300000);
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

    let owner = msg.guild.roles.cache.find(role => role.name === 'Owner');

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
    
    if(cmd === "bdelete"){
        if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You can\'t use that! only mods can when they have to...');
        if (!args[0]) return message.reply('oi, state a number.')
        if (parseInt(args[0]) > 100){
            message.reply("you cannot enter more than 100 messages at a time, so yea, also my limit is 2 weeks of msgs.");
        }
        msg.channel.bulkDelete(parseInt(args[0]), true).then(() => {
            msg.channel.send("Deleted "+ parseInt(args[0]) +" messages.").then(msg => msg.delete(3000));
        });
    }


    if(cmd === 'slots'){
        if(msg.author.id === "774874294999580672"){
            msg.reply("You have " + danW + " slots in your **exclusive** waifus");
        }
        else if(msg.author.id === "683636590245183508"){
            msg.reply("You have " + ogW + " slots in your **exclusive** waifus");
        }
        else if(msg.author.id !== "774874294999580672" || msg.author.id !== "683636590245183508"){
            msg.react('❌');
        }
    }
});


client.on('message', mg => {

   

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

            var date = new Date();

            let dateofClaim = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            let expiry = date.getDate() + '/' + (date.getMonth() + 2) + '/' + date.getFullYear();

            var codeembed = new Discord.MessageEmbed()
            .setTitle('Congratulations!')
            .setColor('#0BB5DB')
            .setThumbnail('https://cdn.discordapp.com/attachments/775944283039203359/850978662702120960/images.png')
            .addField('You have now claimed your coupon of 40% off on any pass or sub in the server!', 'nice!', true)
            .addField('Expiry: ', expiry, true)
            .addField('Use it wisely!', "Don't try using this cmd again pls...", false)
            .setFooter('Finally! | 🥰')
            msg.channel.send(codeembed);

            var dateofclaim = new Discord.MessageEmbed()
            .setTitle('A memeber claimed a coupon!')
            .setColor('#0BB5DB')
            .addField('Who was it?: ', msg.author, true)
            .addField('Date and Time of claim: ', dateofClaim, true)
            .addField('Expiry :', expiry, true)
            client.users.cache.get("695513111414964225").send(dateofclaim);


            msg.author.send('Take a screenshot of it and send it to @Pr0gramm3d_t0_K!LL if you want extra measurements (a dm is already sent to him for the date of claim) for him to remember and not scam you. -just an adivce from your\'s truly, Bot the Bot.-')
            usedCodeRem.add(msg.author.id);
        }
        
    }

})


client.on('message', msg => {

    if(msg.content === "Let the Hunt Begin!"){

        var huntembed = new Discord.MessageEmbed()
        .setTitle("Welcome to The Hunt-III")
        .setColor("#cfe00b")
        .addField("Hallo!", "You have started your hunt! [👍](https://cdn.discordapp.com/attachments/775944283039203359/851095965259006012/my_ass.png)", false)
        .addField("Hint!", "[Click here! -probs a rick roll but oki-](https://www.youtube.com/watch?v=dQw4w9WgXcQ)", false)
        .addField("PS", "you need 3 crystal parts to make up the master crystal. Also, you can use this cmd again to get this embed again without scrolling all the way if you want. When you get all the codes for a single crystal, just type 'crystal -the number-' in my dms or anywhere in the server and you'll get a dm. Example: crystal 1")
        msg.author.send(huntembed);
    }
    
    if(msg.content === "my_ass.png (300x300)"){
        if(crystal1_1.has(msg.author.id)){
            msg.author.send("You already used it ❌");
        }
        else{
            msg.author.send("aight, one down, you need three in total for a crystal piece unlock! try getting the next one, here's a hint, 'The Stars that Engrave History.' (this code is part of crystal 1)");
            crystal1_1.add(msg.author.id);
        }
    }

    if(msg.content === "dQw4w9WgXcQ"){
        if(crystal1_2.has(msg.author.id)){
            msg.author.send("You already used it ❌");
        }
        else{
            msg.author.send("nice......okay i accept that was lame but- anyway, you need three total codes for the first crystal unlock! (this code is part of crystal 1)");
            crystal1_2.add(msg.author.id);
        }
    }

    if(msg.content === "arc 5" || msg.content === "arc V"){
        if(crystal1_3.has(msg.author.id)){
            msg.author.send("You already used it ❌");
        }
        else{
            msg.author.send("smart move, i bet you tried on 're zero' or something like that didn't you? (this code is part of crystal 1)");
            crystal1_3.add(msg.author.id);
        }
    }

    if(msg.content === "crystal 1"){
        if(crystal1_1.has(msg.author.id) && crystal1_2.has(msg.author.id) && crystal1_3.has(msg.author.id)){
            
            var crystal1embed = new Discord.MessageEmbed()
            .setTitle("Congratulations!")
            .setColor("GREEN")
            .addField("Good Job!", "You now have the [first crystal](https://cdn.discordapp.com/attachments/775944283039203359/851321511532298270/pyroxene_crystal.jpg)")
            .addField("Your next hint is: ", "'Little birds can remember', good luck")
            .setFooter("Keep Trying, the difficulty isn't that hard! | 😎")
            msg.author.send(crystal1embed);

            crystal1.add(msg.author.id);
        }
        else{
            msg.author.send("nah bro, get all three codes for this crystal first.");
        }
    }

    if(msg.content === "pyroxene crystal" || msg.content === "Pyroxene Crystal" || msg.content === "pyroxene_crystal"){
        if(crystal2_1.has(msg.author.id)){
            msg.author.send("You already used it ❌");
        }
        else{
            msg.author.send("You tried re zero again didn't you? lol. Anyway, you got the code, good job. (this code is part of crystal 2, there are 4 codes in crystal 2)");
            crystal2_1.add(msg.author.id);
        }
    }

    if(msg.content === "hyouka" || msg.content === "Hyouka"){
        if(crystal2_2.has(msg.author.id)){
            msg.author.send("You already used it ❌");
        }
        else{
            msg.author.send("Good job bro! Now your next hint is `I am kind of blue I am also a part of an anime, find me (also a part of discord).` (this code is part of crystal 2, there are 4 codes in crystal 2)");
            crystal2_2.add(msg.author.id);
        }
        
    }

    if(msg.content === "yuki nagato" || msg.content === "Yuki Nagato"){
        if(crystal2_3.has(msg.author.id)){
            msg.author.send("You already used it ❌");
        }
        else{
            msg.author.send("You tried mudae before this didn't you? anyway, youe found a code. Your next Hint: `biggest dicc`. (this code is part of crystal 2, there are 4 codes in crystal 2)");
            crystal2_3.add(msg.author.id);
        }
        
    }

    if(msg.content === "JONAH FALCON" || msg.content === "JONAH-FALCON"){
        if(crystal2_4.has(msg.author.id)){
            msg.author.send("You already used it ❌");
        }
        else{
            msg.author.send("gives me nostalgia, but hey you found a code! (this code is part of crystal 2, there are 4 codes in crystal 2)");
            crystal2_4.add(msg.author.id);
        }
    }

    if(msg.content === "crystal 2"){
        if(crystal2_1.has(msg.author.id) && crystal2_2.has(msg.author.id) && crystal2_3.has(msg.author.id) && crystal2_4.has(msg.author.id)){
            var crysta21embed = new Discord.MessageEmbed()
            .setTitle("Congratulations!")
            .setColor("GREEN")
            .addField("Good Job!", "You now have the second crystal [✅](https://github.com/ShinyACash/The-Hunt-III-resources/blob/main/README.md)")
            .addField("Your next hint is: ", "'Japanese Movie, Your name. -in japanese-', good luck")
            .setFooter("Keep Trying, the difficulty isn't that hard! | 😎")
            msg.author.send(crysta21embed);

            crystal2.add(msg.author.id);
        }
        else{
            msg.author.send("Get the other codes first!");
        }
    }

    if(msg.content === "readme.exe"){
        if(crystal3_1.has(msg.author.id)){
            msg.author.send("You already used it ❌");
        }
        else{
            msg.author.send("dayum! you actually got it! didn't except you to get it but oki (this code is part of crystal 3 -there are 4 codes in crystal 3)");
            crystal3_1.add(msg.author.id);
        }
    }

    if(msg.content === "kimi no na wa" || msg.content === "Kimi No Na Wa" || msg.content === "Kimi no Na Wa."){
        if(crystal3_2.has(msg.author.id)){
            msg.author.send("You already used it ❌");
        }
        else{
            msg.author.send("probs the easiest one so far eh? welp your next hint: `Shiny-sama's book series` (this code is part of crystal 3 -there are 4 codes in crystal 3)");
            crystal3_2.add(msg.author.id);
        }
    }

    if(msg.content === "Why Are We The Chosen Ones?" || msg.content === "wawtco" || msg.content === "why are we the chosen ones?"){
        if(crystal3_3.has(msg.author.id)){
            msg.author.send("You already used it ❌");
        }
        else{
            msg.author.send("yeah it was just an advertisement but it was a code as well! (this code is part of crystal 3 -there are 4 codes in crystal 3)");
            crystal3_3.add(msg.author.id);
        }
    }

    if(msg.content === "crystal 3"){
        if(crystal3_1.has(msg.author.id) && crystal3_2.has(msg.author.id) && crystal3_3.has(msg.author.id)){
            var crystal3embed = new Discord.MessageEmbed()
            .setTitle("Congratulations!")
            .setColor("GREEN")
            .addField("Good Job!", "You probs found all the crystals by now, if not then contact my owner pls. If you have all the crystals then type `master crystal` in my dm or anywhere in the server.")
            .setFooter("Keep Trying, the difficulty isn't that hard! | 😎")
            msg.author.send(crystal3embed);

            crystal3.add(msg.author.id);
        }
        else{
            msg.author.send("bro find the others first!");
        }
    }

    if(msg.content === "master crystal"){
        if(crystal1.has(msg.author.id) && crystal2.has(msg.author.id) && crystal3.has(msg.author.id)){
            var crystalmembed = new Discord.MessageEmbed()
            .setTitle("Congratulations!")
            .setColor("GREEN")
            .addField("Good Job!", "You fused all the crystals and made the master crystal! time to get your reward eh? welp i highly doubt you reached here without solutions but oki. a dm was sent to shiny for your winnings.")
            .setFooter("You did it bruv | 😎")
            msg.author.send(crystalmembed);

            client.users.cache.get("695513111414964225").send(`Yo! someone figured it out! ${msg.author} figured it out!`);
        }

        else{
            msg.author.send("you failed, y'know why? YOU DON HAVE ALL DEM CRYSTALS!");
        }
    }
})








client.login(process.env.token);

