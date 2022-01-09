const Discord = require("discord.js");
const client = new Discord.Client;
require('discord-buttons')(client);
const isMuted = new Set();
const usedCodeRem = new Set();
const claimed = new Set();
//const hunt = new Set();

const disbut = require("discord-buttons");


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

var me = 0;
var min = 0;
var aak = 0;
var dum = 0;

var me_t = 0;
var min_t = 0;
var aak_t = 0;
var dum_t = 0;

var me_i = 0;
var min_i = 0;
var aak_i = 0;
var dum_i = 0;

var me_p = 0;
var min_p = 0;
var aak_p = 0;
var dum_p = 0;

let promo = false;
var logno = 0;




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

    switch(cmd){
        case "help":
            let help_e = new Discord.MessageEmbed()
            .setColor('#02FE97')
            .setTitle('List of Commands')
            .addField('Admin Commands:', "`bdelete`", false)
            .addField("Useless Commands:", "`ping` \n `slots` \n `help` \n `msgshiny` \n `bruh`", false)
            .addField("Coupon Commands:", "uhh...depends on when a coupon is active. Shiny will inform you if any.", false)
            msg.channel.send(help_e);
            break;
        case "bruh":
            let msg_b = "Bruh.";
            let bruh_b = new disbut.MessageButton()
            .setStyle("blurple")
            .setLabel("Bruh")
            .setID('mybruh')
            msg.channel.send(msg_b, bruh_b);
            break;
        case "log":
            logno = logno + 1;
            var l_msg = args.splice(0).join(' ');
            if(!l_msg) return msg.reply('u wasted my time building an embed for nothin\'? Not cool fam.');
            msg.react("✅");
            let log_e= new Discord.MessageEmbed()
            .setColor('#02FE97')
            .setTitle(`log #${logno} of the day!`)
            .addField('By: ', `${msg.author}`, false)
            .addField('Msg: ', l_msg, false)
            client.channels.cache.get("929751053979746324").send(log_e);
    }
    

    if(cmd === "msgshiny"){
        if(dnd == true){
            let replies = ["Shiny-sama is currently busy, if he is REALLY needed then pls dm him. じゃあな! 😄","Shiny-sama is busy rn... If you try evade dnd mode... あなたを殺す, 🔪", "Ya-hallo, he's on dnd mode, pls msg him in dms or here he'll read them later 🥱", "He's busy, dm him if it's important.", "Look, sometimes a person can be busy, right now Shiny-sama is busy. DND ⛔", "Shiny-sama わ忙しいです. Use google translate if u want.", "He busy, DESU!","My guy busy man there are times when u don't wanna get disturbed.",  "Probs watching anime or studying or something else ig.", "Not available...."];
            let rand_replies = replies[Math.floor(Math.random() * replies.length)];
            msg.channel.send(rand_replies);
        }

        if(dnd == false){
            var m_msg = args.splice(0).join(' ');
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

   

    if(cmd === "ital"){
        msg.channel.send("*why do i even read all this shit?*");
    }

    if(cmd === 'dingug+'){
        if (!args[0]) return message.reply('oi, state a number.')
        if(parseInt(args[0]) > 1){
            me = me + parseInt(args[0]);
            msg.channel.send("Added " + parseInt(args[0]) + " points to le dingug.");
        }
        else return;
    }

    if(cmd === 'aak+'){
        if (!args[0]) return message.reply('oi, state a number.')
        if(parseInt(args[0]) > 1){
            aak = aak + parseInt(args[0]);
            msg.channel.send("Added " + parseInt(args[0]) + " points to la aak.");
        }
    }

    if(cmd === 'min+'){
        if (!args[0]) return message.reply('oi, state a number.')
        if(parseInt(args[0]) > 1){
            min = min + parseInt(args[0]);
            msg.channel.send("Added " + parseInt(args[0]) + " points to la senpai.");
        }
        else return;
    }

    if(cmd === 'dum+'){
        if (!args[0]) return message.reply('oi, state a number.')
        if(parseInt(args[0]) > 1){
            dum = dum + parseInt(args[0]);
            msg.channel.send("Added " + parseInt(args[0]) + " points to la dumdum.");
        }
        else return;
    }

    if(cmd === 'dingug-'){
        if (!args[0]) return message.reply('oi, state a number.')
        if(parseInt(args[0]) > 1){
            me = me - parseInt(args[0]);
            msg.channel.send("Subtracted " + parseInt(args[0]) + " points from le dingug.");
        }
        else return;
    }

    if(cmd === 'aak-'){
        if (!args[0]) return message.reply('oi, state a number.')
        if(parseInt(args[0]) > 1){
            aak = aak - parseInt(args[0]);
            msg.channel.send("Subtracted " + parseInt(args[0]) + " points from la taek00kyolo.");
        }
    }

    if(cmd === 'min-'){
        if (!args[0]) return message.reply('oi, state a number.')
        if(parseInt(args[0]) > 1){
            min = min - parseInt(args[0]);
            msg.channel.send("Subtracted " + parseInt(args[0]) + " points from la senpai.");
        }
        else return;
    }

    if(cmd === 'dum-'){
        if (!args[0]) return message.reply('oi, state a number.')
        if(parseInt(args[0]) > 1){
            dum = dum - parseInt(args[0]);
            msg.channel.send("Subtracted " + parseInt(args[0]) + " points from la dumdum.");
        }
        else return;
    }

    if(cmd === 'reset'){
        me = 0;
        min = 0;
        aak = 0;
        dum = 0;
        me_i = 0;
        min_i = 0;
        aak_i = 0;
        dum_i = 0;
        me_t = 0;
        min_t = 0;
        aak_t = 0;
        dum_t = 0;
        me_t = 0;
        min_t = 0;
        aak_t = 0;
        dum_t = 0;
        msg.channel.send("Reset Successful. 👍");
        msg.react("✅");
    }

    if(cmd === 'shop'){
        let img = new disbut.MessageButton()
            .setStyle('blurple')
            .setLabel('IMG')
            .setID('1500')

        let truth = new disbut.MessageButton()
            .setStyle('blurple')
            .setLabel('Truth')
            .setID('50')

        let pass = new disbut.MessageButton()
            .setStyle('blurple')
            .setLabel('Pass')
            .setID('500');

        let row = new disbut.MessageActionRow()
            .addComponents(img, truth, pass);

        var shop = new Discord.MessageEmbed()
        .setTitle('Le Shop')
        .setColor('#0BB5DB')
        .addField('Invinciblemonehgrabber', 'Price: 1500 points', false)
        .addField('Truth', 'Price: 50 points', false)
        .addField('Pass', 'Price: 500 points', false)
        msg.channel.send(shop, row);
    }

    if(cmd === 'useable'){
        if(msg.author.id === '695513111414964225'){
            var useable1 = new Discord.MessageEmbed()
            .setTitle(`dingug's useables`)
            .addField("Invinciblemonehgrabber: ", me_i, false)
            .addField("Pass: ", me_p, false)
            .addField("Truth: ", me_t, false)
            .setFooter('that it?')
            msg.channel.send(useable1);
        }
        if(msg.author.id === '819853557149990962'){
            var useable2 = new Discord.MessageEmbed()
            .setTitle(`senpai's useables`)
            .addField("Invinciblemonehgrabber: ", min_i, false)
            .addField("Pass: ", min_p, false)
            .addField("Truth: ", min_t, false)
            .setFooter('that it?')
            msg.channel.send(useable2);
        }
        if(msg.author.id === '849557271768072202'){
            var useable3 = new Discord.MessageEmbed()
            .setTitle(`taek00kyolo's useables`)
            .addField("Invinciblemonehgrabber: ", aak_i, false)
            .addField("Pass: ", aak_p, false)
            .addField("Truth: ", aak_t, false)
            .setFooter('that it?')
            msg.channel.send(useable3);
        }
        if(msg.author.id === '794180288715685898'){
            var useable4 = new Discord.MessageEmbed()
            .setTitle(`dumdum's useables`)
            .addField("Invinciblemonehgrabber: ", dum_i, false)
            .addField("Pass: ", dum_p, false)
            .addField("Truth: ", dum_t, false)
            .setFooter('that it?')
            msg.channel.send(useable4);
        }
    }

    if(cmd === 'use'){
        var use = args.splice(0).join(' ');
        if(!use) return ;

        if(msg.author.id === '695513111414964225'){
            if(use === "img"){
                if(me_i > 0){
                    me_i = me_i - 1;
                    msg.channel.send(`${msg.author} used le ***IMG***`);
                }
                else{msg.channel.send("you don own any bruhhh");}
            }
            if(use === 'truth'){
                if(me_t > 0){
                    me_t = me_t - 1;
                    msg.channel.send(`${msg.author} used le truth`);
                }
                else{msg.channel.send("you don own any bruhhh");}
            }
            
            if(use === 'pass'){
                if(me_p > 0){
                    me_p = me_p - 1;
                    msg.channel.send(`${msg.author} used le pass`);
                }
                else{msg.channel.send("you don own any bruhhh");}
            }
            //else{msg.channel.send("you don own any bruhhh");}
        }
        if(msg.author.id === '819853557149990962'){
            if(use === "img"){
                if(min_i > 0){
                    min_i = min_i - 1;
                    msg.channel.send(`${msg.author} used le ***IMG***`);
                }
                else{msg.channel.send("you don own any bruhhh");}
            }
            if(use === 'truth'){
                if(min_t > 0){
                    min_t = min_t - 1;
                    msg.channel.send(`${msg.author} used le truth`);
                }
                else{msg.channel.send("you don own any bruhhh");}
            }
            if(use === 'pass'){
                if(min_p > 0){
                    min_p = min_p - 1;
                    msg.channel.send(`${msg.author} used le pass`);
                }
                else{msg.channel.send("you don own any bruhhh");}
            }
        }
        if(msg.author.id === '849557271768072202'){
            if(use === "img"){
                if(aak_i > 0){
                    aak_i = aak_i - 1;
                    msg.channel.send(`${msg.author} used le ***IMG***`);
                }
                else{msg.channel.send("you don own any bruhhh");}
            }
            if(use === 'truth'){
                if(aak_t > 0){
                    aak_t = aak_t - 1;
                    msg.channel.send(`${msg.author} used le truth`);
                }
                else{msg.channel.send("you don own any bruhhh");}
            }
            if(use === 'pass'){
                if(aak_p > 0){
                    aak_p = aak_p - 1;
                    msg.channel.send(`${msg.author} used le pass`);
                }
                else{msg.channel.send("you don own any bruhhh");}
            }
        }
        if(msg.author.id === '794180288715685898'){
            if(use === "img"){
                if(dum_i > 0){
                    dum_i = dum_i - 1;
                    msg.channel.send(`${msg.author} used le ***IMG***`);
                }
                else{msg.channel.send("you don own any bruhhh");}
            }
            if(use === 'truth'){
                if(dum_t > 0){
                    dum_t = dum_t - 1;
                    msg.channel.send(`${msg.author} used le truth`);
                }
                else{msg.channel.send("you don own any bruhhh");}
            }
            if(use === 'pass'){
                if(dum_p > 0){
                    dum_p = dum_p - 1;
                    msg.channel.send(`${msg.author} used le pass`);
                }
                else{msg.channel.send("you don own any bruhhh");}
            }
        }

    }
});


client.on('clickButton', async (button) => {
    if(button.id === '1500'){
        if(button.clicker.id === '695513111414964225'){
            if(me < 1500){
                button.channel.send(`You don't have enough points to buy that f00l, ${button.clicker.user.tag}`);
            }
            if(me >= 1500){
                me = me - 1500;
                me_i = me_i + 1;
                button.channel.send(`Purchase sucessful!, ${button.clicker.user.tag} just purchased invin- too long bro!`);
            }
        }
        if(button.clicker.id === '819853557149990962'){
            if(min < 1500){
                button.channel.send(`You don't have enough points to buy that f00l, ${button.clicker.user.tag}`);
            }
            if(min >= 1500){
                min = min - 1500;
                min_i = min_i + 1;
                button.channel.send(`Purchase sucessful!, ${button.clicker.user.tag} just purchased invin- too long bro!`);
            }
        }
        if(button.clicker.id === '849557271768072202'){
            if(aak < 1500){
                button.channel.send(`You don't have enough points to buy that f00l, ${button.clicker.user.tag}`);
            }
            if(aak >= 1500){
                aak = aak - 1500;
                aak_i = aak_i + 1;
                button.channel.send(`Purchase sucessful!, ${button.clicker.user.tag} just purchased invin- too long bro!`);
            }
        }
        if(button.clicker.id === '794180288715685898'){
            if(dum < 1500){
                button.channel.send(`You don't have enough points to buy that f00l, ${button.clicker.user.tag}`);
            }
            if(dum >= 1500){
                dum = dum - 1500;
                dum_i = dum_i + 1;
                button.channel.send(`Purchase sucessful!, ${button.clicker.user.tag} just purchased invin- too long bro!`);
            }
        }
    }
    if(button.id === '500'){
        if(button.clicker.id === '695513111414964225'){
            if(me < 500){
                button.channel.send(`You don't have enough points to buy that f00l, ${button.clicker.user.tag}`);
            }
            if(me >= 500){
                me = me - 500;
                me_p = me_p + 1;
                button.channel.send(`Purchase sucessful!, ${button.clicker.user.tag} just purchased pass!`);
            }
        }
        if(button.clicker.id === '819853557149990962'){
            if(min < 500){
                button.channel.send(`You don't have enough points to buy that f00l, ${button.clicker.user.tag}`);
            }
            if(min >= 500){
                min = min - 500;
                min_p = min_p + 1;
                button.channel.send(`Purchase sucessful!, ${button.clicker.user.tag} just purchased pass!`);
            }
        }
        if(button.clicker.id === '849557271768072202'){
            if(aak < 500){
                button.channel.send(`You don't have enough points to buy that f00l, ${button.clicker.user.tag}`);
            }
            if(aak >= 500){
                aak = aak - 500;
                aak_p = aak_p + 1;
                button.channel.send(`Purchase sucessful!, ${button.clicker.user.tag} just purchased pass!`);
            }
        }
        if(button.clicker.id === '794180288715685898'){
            if(dum < 500){
                button.channel.send(`You don't have enough points to buy that f00l, ${button.clicker.user.tag}`);
            }
            if(dum >= 1500){
                dum = dum - 500;
                dum_p = dum_p + 1;
                button.channel.send(`Purchase sucessful!, ${button.clicker.user.tag} just purchased pass!`);
            }
        }
    }
    if(button.id === '50'){
        if(button.clicker.id === '695513111414964225'){
            if(me < 50){
                button.channel.send(`You don't have enough points to buy that f00l, ${button.clicker.user.tag}`);
            }
            if(me >= 50){
                me = me - 50;
                me_t = me_t + 1;
                button.channel.send(`Purchase sucessful!, ${button.clicker.user.tag} just purchased truth!`);
            }
        }
        if(button.clicker.id === '819853557149990962'){
            if(min < 50){
                button.channel.send(`You don't have enough points to buy that f00l, ${button.clicker.user.tag}`);
            }
            if(min >= 50){
                min = min - 50;
                min_t = min_t + 1;
                button.channel.send(`Purchase sucessful!, ${button.clicker.user.tag} just purchased truth!`);
            }
        }
        if(button.clicker.id === '849557271768072202'){
            if(aak < 50){
                button.channel.send(`You don't have enough points to buy that f00l, ${button.clicker.user.tag}`);
            }
            if(aak >= 50){
                aak = aak - 50;
                aak_t = aak_t + 1;
                button.channel.send(`Purchase sucessful!, ${button.clicker.user.tag} just purchased truth!`);
            }
        }
        if(button.clicker.id === '794180288715685898'){
            if(dum < 50){
                button.channel.send(`You don't have enough points to buy that f00l, ${button.clicker.user.tag}`);
            }
            if(dum >= 50){
                dum = dum - 50;
                aak_t = aak_t + 1;
                button.channel.send(`Purchase sucessful!, ${button.clicker.user.tag} just purchased truth!`);
            }
        }

        if(button.id === 'mybruh'){
            open("https://www.youtube.com/watch?v=9MJ-RuNYILo");
        }
        button.defer();
    }
})

client.on('message', msg => {
    if(msg.content.includes('https://discord.gg/')){
        msg.delete({ timeout : 0 })

        var user = msg.author;

        var role = msg.guild.roles.cache.find(r => r.name === 'Muted');

        var channel = msg.guild.channels.cache.get('778889714001510400');

        if(msg.author.bot) return;

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
    
    if(msg.content.includes('fuck')){
        msg.reply("not cool fam, not cool. you might wanna stop.");
    }

    if(msg.content.includes('joe')){
        msg.reply("gg.");
    }

    if(msg.content.includes('your mom')){
        msg.reply("and here i was busy with yours ;))");
    }

})


client.on('message', msg => {
    if(msg.content === ".points"){
        var point = new Discord.MessageEmbed()
        .setTitle('Le Points')
        .setColor('#0BB5DB')
        .addField('le Shiny-sama: ', me)
        .addField('la senpai: ', min)
        .addField('la taek00kyolo: ', aak)
        .addField('la dumdum: ', dum)
        .setFooter('why do i have to deal with the scores?')
        msg.channel.send(point);
    }
})








client.login(process.env.token);

