const Discord = require("discord.js");
const client = new Discord.Client;
const isMuted = new Set();
const usedCodeRem = new Set();
const claimed = new Set();
//const hunt = new Set();






const code1 = new Set();
const code2 = new Set();
const code3 = new Set();
const code4 = new Set();
const code5 = new Set();
const code6 = new Set();
const code7 = new Set();
const code8 = new Set();
const code9 = new Set();
const code10 = new Set();

const admin1 = new Set();
const admin2 = new Set();
const admin3 = new Set();

const waifu1 = new Set();
const waifu2 = new Set();
const waifu3 = new Set();

let promo = false;




var danW = 10;
var ogW = 5;


let dnd = false;



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
    client.user.setActivity('.help', { type: 'PLAYING' });

    
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
                    //isMuted.add(message.author.id);
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
                    }, 30000);
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

    //let owner = msg.guild.roles.cache.find(role => role.name === 'Owner');

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

    if(cmd === "help"){
        msg.channel.send("YEA SUCK YOUR MOM");
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
    if(msg.content.includes('entertain me') || msg.content.includes('intertain me')){
        msg.reply('git entertained. :Pepega:');
    }

    if(msg.content.includes('nigga') || msg.content.includes('NIGGA')){
        msg.channel.send('yeah THAT, NiGgA');
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
    if(msg.content === '.start'){
        var s_embed = new Discord.MessageEmbed()
        .setTitle('Good Luck')
        .setColor('#0BB5DB')
        .addField("Instructions", "+ Use our dms to enter your code.\n + It is possible in every way so do *not* come and ask shiny for any hints.\n + There are 10 codes in total.\n + After you get all 10 codes, use the cmd `.huntend` and you'll get your reward.\n + You have two total days to figure out the codes. [👍](https://cdn.discordapp.com/attachments/775944283039203359/858357823468601344/Fail_stamp.png)", false)
        .addField('Hint', "You get to meet people who are not really people through me. The answer you seek is me whom you see quite often. Who am I?")
        .setFooter('Good Luck')
        msg.author.send(s_embed);
    }

    if(msg.content === "discordbotlist.com"){
        if(code1.has(msg.author.id)){
            msg.react('❌');
            msg.channel.send("You used it already");
        }
        else{
            msg.react('✅');
            msg.channel.send("Good Job on figuring that out! +1 to your code list.");
            msg.channel.send("Error. . .Bot restarting with exit code 0x00000133.");
            client.user.setStatus("offline");
            setTimeout(() => {
                client.user.setStatus("online");
            }, 5000);
            code1.add(msg.author.id);
        }
    }

    if(msg.content === "DPC_WATCHDOG_VIOLATION"){
        if(code2.has(msg.author.id)){
            msg.react('❌');
            msg.channel.send("You used it already");
        }
        else{
            msg.react('✅');
            msg.channel.send("Good Job on figuring that out! +1 to your code list.");
            msg.channel.send("https://cdn.discordapp.com/attachments/775944283039203359/858362811230453820/btb.zip");
            msg.channel.send("Instructions: Download the folder and open the file `btb.html` where you'll be able to get your other code.");
            code2.add(msg.author.id);
        }
    }

    if(msg.content === "mushoku tensei" || msg.content === "mushoku_tensei" || msg.content === "mushoku-tensei"){
        if(code3.has(msg.author.id)){
            msg.react('❌');
            msg.channel.send("You used it already");
        }
        else{
            msg.react('✅');
            msg.channel.send("Good Job on figuring that out! +1 to your code list.");
            msg.channel.send("Your next hint: Ayanokoji-kun");
            code3.add(msg.author.id);
        }
    }

    if(msg.content === "toppat 4 lyfe" || msg.content === "toppat_4_lyfe" || msg.content === "toppat_4_lyfe.mp3"){
        if(code4.has(msg.author.id)){
            msg.react('❌');
            msg.channel.send("You used it already");
        }
        else{
            msg.react('✅');
            msg.channel.send("Good Job on figuring that out! +1 to your code list.");
            msg.channel.send("Your next hint is: Apparent Leader of the toppat clan.");
            code4.add(msg.author.id);
        }
    }

    if(msg.content === "Henry Stickmin" || msg.content === "henry stickmin" || msg.content === "Henry stickmin" || msg.content === "henry Stickmin"){
        if(code5.has(msg.author.id)){
            msg.react('❌');
            msg.channel.send("You used it already");
        }
        else{
            msg.react('✅');
            msg.channel.send("Good Job on figuring that out! +1 to your code list.");
            msg.channel.send("30 31 37 20 30 38 39 20 35 37 36 20 30 31 35 20 30 30 31 20 30 30 35 2e 20 59 6f 75 72 20 63 6f 64 65 20 69 73 20 74 68 65 20 74 68 69 72 64 20 6f 6e 65 20 66 72 6f 6d 20 74 68 65 20 72 69 67 68 74 2e");
            code5.add(msg.author.id);
        }
    }

    if(msg.content === "ichigo" || msg.content === "Ichigo"){
        if(code6.has(msg.author.id)){
            msg.react('❌');
            msg.channel.send("You used it already");
        }
        else{
            msg.react('✅');
            msg.channel.send("Good Job on figuring that out! +1 to your code list.");
            msg.channel.send("Something if you lose, you die internally. What according to you is that? It may be correct, but for the code, there is only one answer.");
            code6.add(msg.author.id);
        }
    }

    if(msg.content === "love" || msg.content === "Love"){
        if(code7.has(msg.author.id)){
            msg.react('❌');
            msg.channel.send("You used it already");
        }
        else{
            msg.react('✅');
            msg.channel.send("Good Job on figuring that out! +1 to your code list.");
            msg.channel.send("What is the best Game Launcher? pretty ez tbh.");
            code7.add(msg.author.id);
        }
    }

    if(msg.content === "classroom of the elite" || msg.content === "COTE" || msg.content === "cote" || msg.content === "Classroom Of The Elite"){
        if(code8.has(msg.author.id)){
            msg.react('❌');
            msg.channel.send("You used it already");
        }
        else{
            msg.react('✅');
            msg.channel.send("Good Job on figuring that out! +1 to your code list.");
            msg.channel.send("you know wut? imma give you the code this time. Here: `code`");
            code8.add(msg.author.id);
        }
    }

    if(msg.content === "steam" || msg.content === "Steam"){
        if(code9.has(msg.author.id)){
            msg.react('❌');
            msg.channel.send("You used it already");
        }
        else{
            msg.react('✅');
            msg.channel.send("Good Job on figuring that out! +1 to your code list.");
            code9.add(msg.author.id);
        }
    }

    if(msg.content === "code"){
        if(code10.has(msg.author.id)){
            msg.react('❌');
            msg.channel.send("You used it already");
        }
        else{
            msg.react('✅');
            msg.channel.send("Good Job on figuring that out! +1 to your code list.");
            code10.add(msg.author.id);
        }
    }

    if(msg.content === ".huntend"){
        if(code1.has(msg.author.id) && code2.has(msg.author.id) && code3.has(msg.author.id) && code4.has(msg.author.id) && code5.has(msg.author.id) && code6.has(msg.author.id) && code7.has(msg.author.id) && code8.has(msg.author.id) && code9.has(msg.author.id) && code10.has(msg.author.id)){
            if(msg.author.id === "683636590245183508"){
                msg.author.send("Congratulations! You have received your prizes.");
                msg.author.send("Your Product Key for claiming your free 2 months of admin is `CMHKJ-WI2UN-PRNTOP`");
                msg.author.send("Your Product Key for claiming your free exclusive waifu slot is `218HF-OIKUP-MNJYHT`");
            }
            if(msg.author.id === "774874294999580672"){
                msg.author.send("Your Product Key for claiming your free 2 months of admin is `OIKJE-98JEM-POI49D`");
                msg.author.send("Your Product Key for claiming your free exclusive waifu slot is `01UJK-OIJ3N-WUEHBR`");
            }
            if(msg.author.id === "714021486243086388"){
                msg.author.send("Your Product Key for claiming your free 2 months of admin is `ERUHI-93HBR-OEUBM4`");
                msg.author.send("Your Product Key for claiming your free exclusive waifu slot is `8UY3F-OIKJN-WTYB3M`");
            }
            if(msg.author.id === "695513111414964225"){
                msg.author.send("gucci desu.");
            }
        }
    }

    if(msg.content === ".CMHKJ-WI2UN-PRNTOP"){
        if(msg.author.id === "683636590245183508"){
            if(admin1.has(msg.author.id)){
                msg.react("❌");
                msg.channel.send("Product Key is either invalid or already used.");
            }
            else{
                msg.react("✅");
                client.users.cache.get("695513111414964225").send(`${msg.author} has claimed free admin!`);
                admin1.add(msg.author.id);
            }
        }
        else{
            msg.react("❌");
            msg.channel.send("Product Key is invalid or already used.");
        }
    }

    if(msg.content === ".218HF-OIKUP-MNJYHT"){
        if(msg.author.id === "683636590245183508"){
            if(waifu1.has(msg.author.id)){
                msg.react("❌");
                msg.channel.send("Product Key is either invalid or already used.");
            }
            else{
                msg.react("✅");
                client.users.cache.get("695513111414964225").send(`${msg.author} has claimed free slot!`);
                waifu1.add(msg.author.id);
            }
        }
        else{
            msg.react("❌");
            msg.channel.send("Product Key is invalid or already used.");
        }
    }

    if(msg.content === ".OIKJE-98JEM-POI49D"){
        if(msg.author.id === "774874294999580672"){
            if(admin2.has(msg.author.id)){
                msg.react("❌");
                msg.channel.send("Product Key is either invalid or already used.");
            }
            else{
                msg.react("✅");
                client.users.cache.get("695513111414964225").send(`${msg.author} has claimed free admin!`);
                admin2.add(msg.author.id);
            }
        }
        else{
            msg.react("❌");
            msg.channel.send("Product Key is invalid or already used.");
        }
    }

    if(msg.content === ".01UJK-OIJ3N-WUEHBR"){
        if(msg.author.id === "774874294999580672"){
            if(waifu2.has(msg.author.id)){
                msg.react("❌");
                msg.channel.send("Product Key is either invalid or already used.");
            }
            else{
                msg.react("✅");
                client.users.cache.get("695513111414964225").send(`${msg.author} has claimed free slot!`);
                waifu2.add(msg.author.id);
            }
        }
        else{
            msg.react("❌");
            msg.channel.send("Product Key is invalid or already used.");
        }
    }

    if(msg.content === ".ERUHI-93HBR-OEUBM4"){
        if(msg.author.id === "7714021486243086388"){
            if(admin3.has(msg.author.id)){
                msg.react("❌");
                msg.channel.send("Product Key is either invalid or already used.");
            }
            else{
                msg.react("✅");
                client.users.cache.get("695513111414964225").send(`${msg.author} has claimed free admin!`);
                admin3.add(msg.author.id);
            }
        }
        else{
            msg.react("❌");
            msg.channel.send("Product Key is invalid or already used.");
        }
    }

    if(msg.content === ".8UY3F-OIKJN-WTYB3M"){
        if(msg.author.id === "7714021486243086388"){
            if(waifu3.has(msg.author.id)){
                msg.react("❌");
                msg.channel.send("Product Key is either invalid or already used.");
            }
            else{
                msg.react("✅");
                client.users.cache.get("695513111414964225").send(`${msg.author} has claimed free slot!`);
                waifu3.add(msg.author.id);
            }
        }
        else{
            msg.react("❌");
            msg.channel.send("Product Key is invalid or already used.");
        }
    }

    if(msg.content === ".NGHWW-82FNR-I2O3NM"){
        if(promo === true){
            msg.react('❌');
            msg.channel.send("Product Key is either no longer valid or already used.");
        }

        else{
            msg.react("✅");
            client.users.cache.get("695513111414964225").send(`${msg.author} has claimed the nsfw promo pass.`);
            promo = true;
        }
    }
})








client.login(process.env.token);

