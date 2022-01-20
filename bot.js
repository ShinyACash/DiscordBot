const Discord = require("discord.js");
const client = new Discord.Client;
require('discord-buttons')(client);
const isMuted = new Set();
const usedCodeRem = new Set();
const claimed = new Set();
//const hunt = new Set();

const disbut = require("discord-buttons");

//<9287389847198>


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

                                                                                                                                                                                                                                                                                                                                                                                                        let enc2 = "entcoding";





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
    if(msg.author.bot) return;
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

/*switch(cmd){
        case "help":
            let help_e = new Discord.MessageEmbed()
            .setColor('#02FE97')
            .setTitle('List of Commands')
            .addField('Admin Commands:', "`mute` \n `unmute` \n `bdelete`", false)
            .addField("Useless Commands:", "`ping` \n `slots` \n `help` \n `msgshiny` \n `nigga` \n `bruh`", false)
            .addField("Coupon Commands:", "uhh...depends on when a coupon is active. Shiny will inform you if any.", false)
            channel.send(help_e);
            break;
        case "nigga":
            msg.channel.send("nigga. really nigga? you just gon use a cmd for NIGGA? are you really sure nigga? ok fine since this doesn't really do anything, imma give nigga. https://www.youtube.com/watch?v=YG4iTGjuoKw");
            break;
        case "bruh":
            let bruh_b = new disbut.MessageButton()
            .setStyle("purple")
            .setLabel("Bruh")
            .setID('mybruh')
            msg.channel.send(bruh_b);
            break;
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
        
    }*/



                                                                                                                                                                                                                                                                                                                                                                                                                                let enc = "p3rh4psth15m1ghTw0rK";
/*

@ -459,6 +464,76 @@ client.on('message', async(msg) => {
    if(cmd === "help"){
        msg.channel.send("YEA SUCK YOUR MOM");
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
            msg.channel.send("Added " + parseInt(args[0]) + " points to le dingug.");
        }
        else return;
    }

    if(cmd === 'aak-'){
        if (!args[0]) return message.reply('oi, state a number.')
        if(parseInt(args[0]) > 1){
            aak = aak - parseInt(args[0]);
            msg.channel.send("Added " + parseInt(args[0]) + " points to le dingug.");
        }
    }

    if(cmd === 'min-'){
        if (!args[0]) return message.reply('oi, state a number.')
        if(parseInt(args[0]) > 1){
            min = min - parseInt(args[0]);
            msg.channel.send("Added " + parseInt(args[0]) + " points to le dingug.");
        }
        else return;
    }

    if(cmd === 'dum-'){
        if (!args[0]) return message.reply('oi, state a number.')
        if(parseInt(args[0]) > 1){
            dum = dum - parseInt(args[0]);
            msg.channel.send("Added " + parseInt(args[0]) + " points to le dingug.");
        }
        else return;
    }
});


@ -545,289 +620,16 @@ client.on('message', msg => {


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
    if(msg.content === ".points"){
        var point = new Discord.MessageEmbed()
            .setTitle('Le Points')
            .setColor('#0BB5DB')
            .addField('le Shiny-sama: ', me)
            .addField('la senpai: ', min)
            .addField('la taek00kyolo: ', aak)
            .addField('la dumdum: ', dum)
            .footer('why do i have to deal with the scores?')
            msg.channel.send(point);
    }
})
    */




client.on('message', async(msg) => {
    //var ms = require('ms');
    if(msg.author.bot) return;

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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            let log_e = new Discord.MessageEmbed()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            .setColor('#02FE97')
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            .setTitle(`log #${logno} of the day!`)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            .addField('By: ', `${msg.author}`, false)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            .addField('Msg: ', l_msg, false)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            client.channels.cache.get("929751053979746324").send(log_e);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            break;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        case "10A":
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            let m_list = new Discord.MessageEmbed()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            .setColor("#02FE97")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            .setTitle("List of the cmds using 10A here:")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            .addField("this is under dev currently...check bacc when it's complete", "null", false)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            msg.channel.send(m_list);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            break;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        case "chamber":
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            msg.author.send("console boot initiated...").then((msg) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                setTimeout(async() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    msg.edit("boot complete! [https://github.com/ShinyACash/DiscordBot] check logs for any changes made.");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }, 8000)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            break;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        case "decode":
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            var d_msg = args.splice(0).join(' ');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if(!d_msg) return msg.author.send('Please don\'t use this if you don\'t know what you are doing. If you do know what you are doing, use the syntax as `.decode examplearr` and then enter the decoding cipher.');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if(d_msg.includes("695513111414964225 yp;f 774874294999580672 yp djiy-yjr-givl-i[> niy jr-s-mohhs/ovsmydjpedjomuyjsyojsbrs,omfpg,upem/[rjs[dyjodnoypgrmvpfomh,ohjyeptl/")){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                msg.author.send("Finding log file and enc...").then((msg) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    setTimeout(async() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        msg.edit("Found! please enter cipher with `.cipher csx` (replace csx with the cipher string.)");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }, 5000)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if(d_msg.includes("jxdgndvkfxgvk d")){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                msg.author.send("Finding log file and enc...").then((msg) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    setTimeout(async() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        msg.edit("Found! please enter cipher with `.cipher csx` (replace csx with the cipher string.)");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }, 5000)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            else{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                msg.author.send("Finding log file and enc...").then((msg) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    setTimeout(async() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        msg.edit("Failed! \nWarning!: This failure may reset the bot and all nodes connected to it. Please use caution!");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }, 5000)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            break;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        case "cipher":
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            var c_msg = args.splice(0).join(' ');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if(!c_msg) return msg.author.send('Please don\'t use this if you don\'t know what you are doing. If you do know what you are doing, use the syntax as `.cipher csx` and then enter the decoding cipher by replacing csx.');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if(c_msg === enc){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                msg.author.send("Ciphering...").then((msg) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    setTimeout(async() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        msg.edit("Result: Please replace all letters and characters with their predecessor keys (keys to the left of the character), example q = w, so in encoding, it'll be w for the letter q.");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }, 5000)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            else if(c_msg === enc2){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                msg.author.send("Ciphering...").then((msg) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    setTimeout(async() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        msg.edit("Result: Please replace all letters and characters with the the keys above them, for example: q = a, so in the encoding, it will be a for the letter q.");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }, 3000)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            else{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                msg.author.send("Ciphering...").then((msg) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    setTimeout(async() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        msg.edit("Result: Failed, no csx found.");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }, 7000)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            break;



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

                                                                                                                                                                                                                                                                                                    if(cmd === "digit"){
                                                                                                                                                                                                                                                                                                        var g_msg = args.splice(0).join(' ')
                                                                                                                                                                                                                                                                                                        if (!g_msg) return msg.author.send("Syntax: `.digit XXXXX`");
                                                                                                                                                                                                                                                                                                        if(g_msg === "92873"){
                                                                                                                                                                                                                                                                                                            msg.author.send("Inputing...").then((msg) => {
                                                                                                                                                                                                                                                                                                                setTimeout(async() => {
                                                                                                                                                                                                                                                                                                                    msg.edit("fcZXfoB2f70 \nYT.");
                                                                                                                                                                                                                                                                                                                }, 5000)
                                                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                        else{
                                                                                                                                                                                                                                                                                                            msg.author.send("Inputing...").then((msg) => {
                                                                                                                                                                                                                                                                                                                setTimeout(async() => {
                                                                                                                                                                                                                                                                                                                    msg.edit("Access Denied.");
                                                                                                                                                                                                                                                                                                                }, 5000)
                                                                                                                                                                                                                                                                                                            });
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
        }                                                                                                                                                                                                                                                                                                                                                                                                                           //code.git?
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
                                                                                                                                                                                                                                                                                                                                                                                                                    if(msg.content === "THH.dc(/win/sys)"){
                                                                                                                                                                                                                                                                                                                                                                                                                        msg.author.send("Bot the Bot presents...").then((msg) => {
                                                                                                                                                                                                                                                                                                                                                                                                                            setTimeout(async() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                msg.edit("The Hidden Hunt 📼").then((msg) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                    setTimeout(async() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                        msg.channel.send("Yo, try entering this server and use `.hidden`. You'll meet my friend there who'll help you.\nhttps://discord.gg/nBRxY3x4").then((msg) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                            setTimeout(async() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                msg.channel.send("\"*so you'll help me?*\"").then((msg) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                    setTimeout(async() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                        msg.edit("aksdljewdnsclamc").then((msg) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                            setTimeout(async() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                msg.edit("wqndskmdawfnd").then((msg) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    setTimeout(async() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        msg.edit("w92u3ewuijqws").then((msg) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            setTimeout(async() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                msg.delete();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }, 100)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        });;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }, 100)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                });;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                            }, 100)
                                                                                                                                                                                                                                                                                                                                                                                                                                                        });;
                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                    }, 100)
                                                                                                                                                                                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                            }, 2000)
                                                                                                                                                                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                    }, 2000)
                                                                                                                                                                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                            }, 3000)
                                                                                                                                                                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                                                                                                                                                                        client.users.cache.get("695513111414964225").send(`${msg.author} just did it.`);
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
    




 

    if(msg.content.includes('your mom')){
        msg.reply("and here i was busy with yours ;))");
    }

                                                                                                                                                                                                                                                                                                                                            if(msg.content.includes(" ;))")){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        msg.author.send(".chamber;))").then((msg) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            setTimeout(async() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                msg.delete();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }, 500)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

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

