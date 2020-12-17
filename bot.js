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
var TotalNcounter = ShinyNcounter + DanNcounter + OJNcounter + OGNcounter

const emoji = client.emojis.cache.get("782957768545665074")
//let myRole = message.guild.roles.cache.find(role => role.name === "{Role Name}");

client.once('ready', () => {
    console.log('Bot online!');
    //ShinyNcounter += 1;
    //client.channels.cache.get('775564519233028099').send('Hallo people I am online!');
});


const { writeFileSync } = require("fs");
const data = require("C:/Users/Akash/Documents/DiscordBot/bot.myNCounterData.json");
const secretdata = require("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json");
//data["Shiny_Ncounter"] += 1 
console.log(data["Shiny_Ncounter"] + " ---> Shiny")
console.log(data["Dan_Ncounter"] + " ---> Dan")
console.log(data["OJ_Ncounter"] + " ---> OJ")
console.log(data["OG_Ncounter"] + " ---> OG")
console.log(data["CARE_Ncounter"] + " ---> Care")
console.log("======")
data["Total_Ncounter"] = data["Shiny_Ncounter"] + data["Dan_Ncounter"] + data["OG_Ncounter"] + data["OJ_Ncounter"] + data["CARE_Ncounter"]
console.log(data["Total_Ncounter"])





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
                data["Shiny_Ncounter"] += 1;
                writeFileSync("C:/Users/Akash/Documents/DiscordBot/bot.myNCounterData.json", JSON.stringify(data), err => {
                    data["Shiny_Ncounter"] = data["Shiny_Ncounter"];
                    data["Total_Ncounter"] = data["Shiny_Ncounter"] + data["Dan_Ncounter"] + data["OJ_Ncounter"] + data["OG_Ncounter"] + data["CARE_Ncounter"];
                    if (err) console.error(err);
                })

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
                data["Dan_Ncounter"] += 1;
                writeFileSync("C:/Users/Akash/Documents/DiscordBot/bot.myNCounterData.json", JSON.stringify(data), err => {
                    data["Dan_Ncounter"] = data["Dan_Ncounter"];
                    data["Total_Ncounter"] = data["Shiny_Ncounter"] + data["Dan_Ncounter"] + data["OJ_Ncounter"] + data["OG_Ncounter"] + data["CARE_Ncounter"];
                    if (err) console.error(err);
                })
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
                data["CARE_Ncounter"] += 1;
                writeFileSync("C:/Users/Akash/Documents/DiscordBot/bot.myNCounterData.json", JSON.stringify(data), err => {
                    data["CARE_Ncounter"] = data["CARE_Ncounter"];
                    data["Total_Ncounter"] = data["Shiny_Ncounter"] + data["Dan_Ncounter"] + data["OJ_Ncounter"] + data["OG_Ncounter"] + data["CARE_Ncounter"];
                    if (err) console.error(err);
                })
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
                data["OJ_Ncounter"] += 1;
                writeFileSync("C:/Users/Akash/Documents/DiscordBot/bot.myNCounterData.json", JSON.stringify(data), err => {
                    data["OJ_Ncounter"] = data["OJ_Ncounter"];
                    data["Total_Ncounter"] = data["Shiny_Ncounter"] + data["Dan_Ncounter"] + data["OJ_Ncounter"] + data["OG_Ncounter"] + data["CARE_Ncounter"];
                    if (err) console.error(err);
                })
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
                data["OG_Ncounter"] += 1;
                writeFileSync("C:/Users/Akash/Documents/DiscordBot/bot.myNCounterData.json", JSON.stringify(data), err => {
                    data["OG_Ncounter"] = data["OG_Ncounter"];
                    data["Total_Ncounter"] = data["Shiny_Ncounter"] + data["Dan_Ncounter"] + data["OJ_Ncounter"] + data["OG_Ncounter"] + data["CARE_Ncounter"];
                    if (err) console.error(err);
                })
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
            msg.channel.send(`${msg.author}, your nigga counter is at ` + data["Shiny_Ncounter"] + `. Good Job!`);
            writeFileSync("C:/Users/Akash/Documents/DiscordBot/bot.myNCounterData.json", JSON.stringify(data), err => {
                data["Shiny_Ncounter"] = data["Shiny_Ncounter"];
                data["Total_Ncounter"] = data["Shiny_Ncounter"] + data["Dan_Ncounter"] + data["OJ_Ncounter"] + data["OG_Ncounter"] + data["CARE_Ncounter"];
                if (err) console.error(err);
            })
        }
        else if (msg.author.username === 'Zero Two') {
            msg.channel.send(`${msg.author}, your nigga counter is at ` + data["Dan_Ncounter"] + `. Good Job!`);
            writeFileSync("C:/Users/Akash/Documents/DiscordBot/bot.myNCounterData.json", JSON.stringify(data), err => {
                data["Dan_Ncounter"] = data["Dan_Ncounter"];
                data["Total_Ncounter"] = data["Shiny_Ncounter"] + data["Dan_Ncounter"] + data["OJ_Ncounter"] + data["OG_Ncounter"] + data["CARE_Ncounter"];
                if (err) console.error(err);
            })
        }
        else if (msg.author.username === 'IMCARE') {
            msg.channel.send(`${msg.author}, your nigga counter is at ` + data["CARE_Ncounter"] + `. Good Job!`);
            writeFileSync("C:/Users/Akash/Documents/DiscordBot/bot.myNCounterData.json", JSON.stringify(data), err => {
                data["CARE_Ncounter"] = data["CARE_Ncounter"];
                data["Total_Ncounter"] = data["Shiny_Ncounter"] + data["Dan_Ncounter"] + data["OJ_Ncounter"] + data["OG_Ncounter"] + data["CARE_Ncounter"];
                if (err) console.error(err);
            })
        }
        else if (msg.author.username === 'Dogey DooD') {
            msg.channel.send(`${msg.author}, your nigga counter is at ` + data["OJ_Ncounter"] + `. Good Job!`);
            writeFileSync("C:/Users/Akash/Documents/DiscordBot/bot.myNCounterData.json", JSON.stringify(data), err => {
                data["OJ_Ncounter"] = data["OJ_Ncounter"];
                data["Total_Ncounter"] = data["Shiny_Ncounter"] + data["Dan_Ncounter"] + data["OJ_Ncounter"] + data["OG_Ncounter"] + data["CARE_Ncounter"];
                if (err) console.error(err);
            })
        }
        else if (msg.author.username === 'blindbutnotblind') {
            msg.channel.send(`${msg.author}, your nigga counter is at ` + data["OG_Ncounter"] + `. Good Job!`);
            writeFileSync("C:/Users/Akash/Documents/DiscordBot/bot.myNCounterData.json", JSON.stringify(data), err => {
                data["OG_Ncounter"] = data["OG_Ncounter"];
                data["Total_Ncounter"] = data["Shiny_Ncounter"] + data["Dan_Ncounter"] + data["OJ_Ncounter"] + data["OG_Ncounter"] + data["CARE_Ncounter"];
                if (err) console.error(err);
            })
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
        data["Total_Ncounter"] = data["Shiny_Ncounter"] + data["Dan_Ncounter"] + data["OJ_Ncounter"] + data["OG_Ncounter"] + data["CARE_Ncounter"];
        msg.channel.send("Our total n-word count is at " + data["Total_Ncounter"] + ". DAYUM BOIS!");
    }

})


client.on('message', msg => {

    if (msg.content === '!bot online?') {
        msg.reply('yes sir!');
    }
    else if (msg.content.includes("les gucci")) {
        if (gottenMsg1.has(msg.author.id)) {
            //client.users.cache.get(`${msg.author.id}`).send("you are already done with this code...");
        }
        else {
            if (msg.author.id === "695513111414964225") {
                secretdata["Shiny_unlock1"] = 1;
                writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                    secretdata["Shiny_unlock1"] = secretdata["Shiny_unlock1"];
                    if (err) console.error(err);
                })
                gottenMsg1.add(msg.author.id);
            }
            if (msg.author.id === "774874294999580672") {
                secretdata["Dan_unlock1"] = 1;
                writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                    secretdata["Dan_unlock1"] = secretdata["Dan_unlock1"];
                    if (err) console.error(err);
                })
                gottenMsg1.add(msg.author.id);
            }
            client.users.cache.get(`${msg.author.id}`).send("You felt as if u triggered an event...");
            //gottenMsg1.add(msg.author.id);
        }
    }
    else if (msg.content.includes("road to a hundred niggas")) {
        //client.users.cache.get(`${msg.author.id}`).send("code 2 of 10 found");
        if (gottenMsg2.has(msg.author.id)) {
            //client.users.cache.get(`${msg.author.id}`).send("you are already done with this code...");
        }
        else {
            if (msg.author.id === "695513111414964225") {
                if (secretdata["Shiny_unlock1"] === 1) {
                    secretdata["Shiny_unlock2"] = 1;
                    client.users.cache.get(`${msg.author.id}`).send("You found a key fragment of a certain key, maybe you can use it with something...");
                    writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                        secretdata["Shiny_unlock2"] = secretdata["Shiny_unlock2"];
                        if (err) console.error(err);
                    })
                    gottenMsg2.add(msg.author.id);
                }
            }
            if (msg.author.id === "774874294999580672") {
                if (secretdata["Dan_unlock1"] === 1) {
                    secretdata["Dan_unlock2"] = 1;
                    client.users.cache.get(`${msg.author.id}`).send("You found a key fragment of a certain key, maybe you can use it with something...");
                    writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                        secretdata["Dan_unlock2"] = secretdata["Dan_unlock2"];
                        if (err) console.error(err);
                    })
                    gottenMsg2.add(msg.author.id);
                }
            }
            //client.users.cache.get(`${msg.author.id}`).send("You found a key fragment of a certain key, maybe you can use it with something...");
            //gottenMsg2.add(msg.author.id);
        }
    }
    else if (msg.content === "key fragment") {
        //client.users.cache.get(`${msg.author.id}`).send("code 3 of 10 found, quite an ez one huh?");
        if (gottenMsg3.has(msg.author.id)) {
            //client.users.cache.get(`${msg.author.id}`).send("you are already done with this code...");
        }
        else {

            if (msg.author.id === "695513111414964225") {
                if (secretdata["Shiny_unlock2"] === 1) {
                    secretdata["Shiny_RedKey"] = 1;
                    client.users.cache.get(`${msg.author.id}`).send("You found something glowy, I think it made you a key! You found the Red Key. I wonder wut it may be used for...");
                    writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                        secretdata["Shiny_RedKey"] = secretdata["Shiny_RedKey"];
                        if (err) console.error(err);
                    })
                    gottenMsg3.add(msg.author.id);
                }
            }
            if (msg.author.id === "774874294999580672") {
                if (secretdata["Dan_unlock2"] === 1) {
                    secretdata["Dan_RedKey"] = 1;
                    client.users.cache.get(`${msg.author.id}`).send("You found something glowy, I think it made you a key! You found the Red Key. I wonder wut it may be used for...");
                    writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                        secretdata["Dan_RedKey"] = secretdata["Dan_RedKey"];
                        if (err) console.error(err);
                    })
                    gottenMsg3.add(msg.author.id);
                }
            }
            //gottenMsg3.add(msg.author.id);
        }
    }
    else if (msg.content === "ctrl.alt.delete.") {
        //client.users.cache.get(`${msg.author.id}`).send("code 4 of 10 found, pretty ez eh?");
        if (gottenMsg4.has(msg.author.id)) {
            //client.users.cache.get(`${msg.author.id}`).send("you are already done with this code...");
        }
        else {
            client.users.cache.get(`${msg.author.id}`).send("you found a code fragment, hmmmm....");
            if (msg.author.id === "695513111414964225") {
                secretdata["Shiny_unlock3"] = 1;
                writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                    secretdata["Shiny_unlock3"] = secretdata["Shiny_unlock3"];
                    if (err) console.error(err);
                })
                gottenMsg4.add(msg.author.id);
            }
            if (msg.author.id === "774874294999580672") {
                secretdata["Dan_unlock3"] = 1;
                writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                    secretdata["Dan_unlock3"] = secretdata["Dan_unlock3"];
                    if (err) console.error(err);
                })
                gottenMsg4.add(msg.author.id);
            }
            //gottenMsg4.add(msg.author.id);
        }
    }
    else if (msg.content === "code fragment") {
        //client.users.cache.get(`${msg.author.id}`).send("code 5 of 10 found");
        if (gottenMsg5.has(msg.author.id)) {
            //client.users.cache.get(`${msg.author.id}`).send("you are already done with this code...");
        }
        else {
            if (msg.author.id === "695513111414964225") {
                if (secretdata["Shiny_unlock3"] === 1) {
                    secretdata["Shiny_GreenKey"] = 1;
                    client.users.cache.get(`${msg.author.id}`).send("damn you just went for it, welp u found the ezest key, You found the Green Key.");
                    //client.users.cache.get(`${msg.author.id}`).send("You found something glowy, I think it made you a key! You found the Red Key. I wonder wut it may be used for...");
                    writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                        secretdata["Shiny_GreenKey"] = secretdata["Shiny_GreenKey"];
                        if (err) console.error(err);
                    })
                    gottenMsg5.add(msg.author.id);
                }
            }
            if (msg.author.id === "774874294999580672") {
                if (secretdata["Dan_unlock3"] === 1) {
                    secretdata["Dan_GreenKey"] = 1;
                    client.users.cache.get(`${msg.author.id}`).send("damn you just went for it, welp u found the ezest key, You found the Green Key.");
                    //client.users.cache.get(`${msg.author.id}`).send("You found something glowy, I think it made you a key! You found the Red Key. I wonder wut it may be used for...");
                    writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                        secretdata["Dan_GreenKey"] = secretdata["Dan_GreenKey"];
                        if (err) console.error(err);
                    })
                    gottenMsg5.add(msg.author.id);
                }
            }

            //gottenMsg5.add(msg.author.id);
        }
    }
    else if (msg.content.includes("roblox")) {
        //client.users.cache.get(`${msg.author.id}`).send("code 6 of 10 found");
        if (gottenMsg6.has(msg.author.id)) {
            //client.users.cache.get(`${msg.author.id}`).send("you are already done with this code...");
        }
        else {
            if (msg.author.id === "695513111414964225") {
                secretdata["Shiny_unlock4"] = 1;
                writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                    secretdata["Shiny_unlock4"] = secretdata["Shiny_unlock4"];
                    if (err) console.error(err);
                })
                gottenMsg6.add(msg.author.id);
            }
            if (msg.author.id === "774874294999580672") {
                secretdata["Dan_unlock4"] = 1;
                writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                    secretdata["Dan_unlock4"] = secretdata["Dan_unlock4"];
                    if (err) console.error(err);
                })
                gottenMsg6.add(msg.author.id);
            }
            client.users.cache.get(`${msg.author.id}`).send(`You found this paper which says /(*  `);
            //gottenMsg6.add(msg.author.id);
        }
    }
    else if (msg.content === "ape") {
        //client.users.cache.get(`${msg.author.id}`).send("code 7 of 10 found");
        if (gottenMsg7.has(msg.author.id)) {
            //client.users.cache.get(`${msg.author.id}`).send("you are already done with this code...");
        }
        else {
            if (msg.author.id === "695513111414964225") {
                if (secretdata["Shiny_unlock4"] === 1) {
                    secretdata["Shiny_BlueKey"] = 1;
                    client.users.cache.get(`${msg.author.id}`).send("You beat the ape and you now apparently have the Blue Key!!");
                    //client.users.cache.get(`${msg.author.id}`).send("damn you just went for it, welp u found the ezest key, You found the Green Key.");
                    //client.users.cache.get(`${msg.author.id}`).send("You found something glowy, I think it made you a key! You found the Red Key. I wonder wut it may be used for...");
                    writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                        secretdata["Shiny_BlueKey"] = secretdata["Shiny_BlueKey"];
                        if (err) console.error(err);
                    })
                    gottenMsg7.add(msg.author.id);
                }
            }
            if (msg.author.id === "774874294999580672") {
                if (secretdata["Dan_unlock4"] === 1) {
                    secretdata["Dan_BlueKey"] = 1;
                    client.users.cache.get(`${msg.author.id}`).send("You beat the ape and you now apparently have the Blue Key!!");
                    //client.users.cache.get(`${msg.author.id}`).send("damn you just went for it, welp u found the ezest key, You found the Green Key.");
                    //client.users.cache.get(`${msg.author.id}`).send("You found something glowy, I think it made you a key! You found the Red Key. I wonder wut it may be used for...");
                    writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                        secretdata["Dan_BlueKey"] = secretdata["Dan_BlueKey"];
                        if (err) console.error(err);
                    })
                    gottenMsg7.add(msg.author.id);
                }
            }

            //gottenMsg7.add(msg.author.id);
        }
    }
    else if (msg.content === "fuse keys") {
        //client.users.cache.get(`${msg.author.id}`).send("code 8 of 10 found");
        if (gottenMsg8.has(msg.author.id)) {
            //client.users.cache.get(`${msg.author.id}`).send("you are already done with this code...");
        }
        else {
            if (msg.author.id === "695513111414964225") {
                if (secretdata["Shiny_RedKey"] === 1) {
                    if (secretdata["Shiny_BlueKey"] === 1) {
                        if (secretdata["Shiny_GreenKey"] === 1) {
                            secretdata["Shiny_Portal"] = 1;
                            writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                                secretdata["Shiny_Portal"] = secretdata["Shiny_Portal"];
                                if (err) console.error(err);
                            })
                            gottenMsg8.add(msg.author.id);
                            client.users.cache.get(`${msg.author.id}`).send("The portal to the pixel has opened up, try finding all 3 pieces of a pixel, first think about resolution");
                        }
                    }
                }
            }
            if (msg.author.id === "774874294999580672") {
                if (secretdata["Dan_RedKey"] === 1) {
                    if (secretdata["Dan_BlueKey"] === 1) {
                        if (secretdata["Dan_GreenKey"] === 1) {
                            secretdata["Dan_Portal"] = 1;
                            writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                                secretdata["Dan_Portal"] = secretdata["Dan_Portal"];
                                if (err) console.error(err);
                            })
                            gottenMsg8.add(msg.author.id);
                            client.users.cache.get(`${msg.author.id}`).send("The portal to the pixel has opened up, try finding all 3 pieces of a pixel, first think about resolution");
                        }
                    }
                }
            }

            //gottenMsg8.add(msg.author.id);
        }
    }
    else if (msg.content === "1080p") {
        //client.users.cache.get(`${msg.author.id}`).send("code 9 of 10 found");
        if (gottenMsg9.has(msg.author.id)) {
            //client.users.cache.get(`${msg.author.id}`).send("you are already done with this code...");
        }
        else {
            if (msg.author.id === "695513111414964225") {
                if (secretdata["Shiny_Portal"] === 1) {
                    secretdata["Shiny_Pixel1"] = 1;
                    client.users.cache.get(`${msg.author.id}`).send("u found the ezest pixel part, gg. You found the R part.");
                    //client.users.cache.get(`${msg.author.id}`).send("damn you just went for it, welp u found the ezest key, You found the Green Key.");
                    //client.users.cache.get(`${msg.author.id}`).send("You found something glowy, I think it made you a key! You found the Red Key. I wonder wut it may be used for...");
                    writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                        secretdata["Shiny_Pixel1"] = secretdata["Shiny_Pixel1"];
                        if (err) console.error(err);
                    })
                    gottenMsg9.add(msg.author.id);
                }
            }
            if (msg.author.id === "774874294999580672") {
                if (secretdata["Dan_Portal"] === 1) {
                    secretdata["Dan_Pixel1"] = 1;
                    client.users.cache.get(`${msg.author.id}`).send("u found the ezest pixel part, gg. You found the R part.");
                    //client.users.cache.get(`${msg.author.id}`).send("damn you just went for it, welp u found the ezest key, You found the Green Key.");
                    //client.users.cache.get(`${msg.author.id}`).send("You found something glowy, I think it made you a key! You found the Red Key. I wonder wut it may be used for...");
                    writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                        secretdata["Dan_Pixel1"] = secretdata["Dan_Pixel1"];
                        if (err) console.error(err);
                    })
                    gottenMsg9.add(msg.author.id);
                }
            }
            //client.users.cache.get(`${msg.author.id}`).send("u found the ezest pixel part, gg. You found the R part.");
            //gottenMsg9.add(msg.author.id);
        }
    }
    else if (msg.content === "i need money") {
        //client.users.cache.get(`${msg.author.id}`).send("code 10 of 10 found");
        if (gottenMsg10.has(msg.author.id)) {
            //client.users.cache.get(`${msg.author.id}`).send("you are already done with this code...");
        }
        else {
            if (msg.author.id === "695513111414964225") {
                if (secretdata["Shiny_Portal"] === 1) {
                    secretdata["Shiny_Pixel2"] = 1;
                    client.users.cache.get(`${msg.author.id}`).send("You found a green fragment... i wonder wut could u do with it, nvm You found the G part. Now u probably need the other 3, 2, or maybe 1 more part. You need the B part");
                    //client.users.cache.get(`${msg.author.id}`).send("damn you just went for it, welp u found the ezest key, You found the Green Key.");
                    //client.users.cache.get(`${msg.author.id}`).send("You found something glowy, I think it made you a key! You found the Red Key. I wonder wut it may be used for...");
                    writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                        secretdata["Shiny_Pixel2"] = secretdata["Shiny_Pixel2"];
                        if (err) console.error(err);
                    })
                    gottenMsg10.add(msg.author.id);
                }
            }
            if (msg.author.id === "774874294999580672") {
                if (secretdata["Dan_Portal"] === 1) {
                    secretdata["Dan_Pixel2"] = 1;
                    client.users.cache.get(`${msg.author.id}`).send("You found a green fragment... i wonder wut could u do with it, nvm You found the G part. Now u probably need the other 3, 2, or maybe 1 more part. You need the B part");
                    //client.users.cache.get(`${msg.author.id}`).send("damn you just went for it, welp u found the ezest key, You found the Green Key.");
                    //client.users.cache.get(`${msg.author.id}`).send("You found something glowy, I think it made you a key! You found the Red Key. I wonder wut it may be used for...");
                    writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                        secretdata["Dan_Pixel2"] = secretdata["Dan_Pixel2"];
                        if (err) console.error(err);
                    })
                    gottenMsg10.add(msg.author.id);
                }
            }
            //client.users.cache.get(`${msg.author.id}`).send("You found a green fragment... i wonder wut could u do with it, nvm You found the G part. Now u probably need the other 3, 2, or maybe 1 more part. You need the B part");
            //gottenMsg10.add(msg.author.id);
        }
    }
    else if (msg.content === "i need B part") {
        if (gottenMsg11.has(msg.author.id)) {
            //client.users.cache.get(`${msg.author.id}`).send("you are already done with this code...");
        }
        else {
            if (msg.author.id === "695513111414964225") {
                if (secretdata["Shiny_Portal"] === 1) {
                    secretdata["Shiny_Pixel3"] = 1;
                    client.users.cache.get(`${msg.author.id}`).send("You found the B part, maybe this was the easiest...");
                    //client.users.cache.get(`${msg.author.id}`).send("You found a green fragment... i wonder wut could u do with it, nvm You found the G part. Now u probably need the other 3, 2, or maybe 1 more part. You need the B part");
                    //client.users.cache.get(`${msg.author.id}`).send("damn you just went for it, welp u found the ezest key, You found the Green Key.");
                    //client.users.cache.get(`${msg.author.id}`).send("You found something glowy, I think it made you a key! You found the Red Key. I wonder wut it may be used for...");
                    writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                        secretdata["Shiny_Pixel3"] = secretdata["Shiny_Pixel3"];
                        if (err) console.error(err);
                    })
                    gottenMsg11.add(msg.author.id);
                }
            }
            if (msg.author.id === "774874294999580672") {
                if (secretdata["Dan_Portal"] === 1) {
                    secretdata["Dan_unlock5"] = 1;
                    client.users.cache.get(`${msg.author.id}`).send("Ik you do but u gotta find stuff, blue is supposed to be hard....");
                    //client.users.cache.get(`${msg.author.id}`).send("You found a green fragment... i wonder wut could u do with it, nvm You found the G part. Now u probably need the other 3, 2, or maybe 1 more part. You need the B part");
                    //client.users.cache.get(`${msg.author.id}`).send("damn you just went for it, welp u found the ezest key, You found the Green Key.");
                    //client.users.cache.get(`${msg.author.id}`).send("You found something glowy, I think it made you a key! You found the Red Key. I wonder wut it may be used for...");
                    writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                        secretdata["Dan_unlock5"] = secretdata["Dan_unlock5"];
                        if (err) console.error(err);
                    })
                    gottenMsg11.add(msg.author.id);
                }
            }
            //client.users.cache.get(`${msg.author.id}`).send("You found the B part, maybe this was the easiest...");
            //gottenMsg11.add(msg.author.id);
        }
    }
    else if (msg.content === "fuse parts") {
        if (gottenMsg12.has(msg.author.id)) {
            //client.users.cache.get(`${msg.author.id}`).send("you are already done with this code...");
        }
        else {
            if (msg.author.id === "774874294999580672") {
                if (secretdata["Dan_Pixel1"] === 1) {
                    if (secretdata["Dan_Pixel2"] === 1) {
                        if (secretdata["Dan_Pixel3"] === 1) {
                            //secretdata["Dan_Portal"] = 1;
                            /*writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                                secretdata["Dan_Portal"] = secretdata["Dan_Portal"];
                                if(err) console.error(err);
                            })*/
                            client.users.cache.get(`${msg.author.id}`).send("The pixel has been completed!! If you have completed this before or on your b'day then you have now earned your free 3 months of VIP Moderator");
                        }
                    }
                }
            }
        }
    }
    else if (msg.content === "india sucks") {
        if (gottenMsg13.has(msg.author.id)) {
            //client.users.cache.get(`${msg.author.id}`).send("you are already done with this code...");
        }
        else {
            if (msg.author.id === "774874294999580672") {
                if (secretdata["Dan_Portal"] === 1) {
                    secretdata["Dan_Pixel3"] = 1;
                    client.users.cache.get(`${msg.author.id}`).send("You found the B part, maybe this was the easiest...eh?");
                    //client.users.cache.get(`${msg.author.id}`).send("You found a green fragment... i wonder wut could u do with it, nvm You found the G part. Now u probably need the other 3, 2, or maybe 1 more part. You need the B part");
                    //client.users.cache.get(`${msg.author.id}`).send("damn you just went for it, welp u found the ezest key, You found the Green Key.");
                    //client.users.cache.get(`${msg.author.id}`).send("You found something glowy, I think it made you a key! You found the Red Key. I wonder wut it may be used for...");
                    writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                        secretdata["Dan_Pixel3"] = secretdata["Dan_Pixel3"];
                        if (err) console.error(err);
                    })
                    gottenMsg13.add(msg.author.id);
                }
            }
            /*else if (msg.content === "fuse parts") {
                if (gottenMsg12.has(msg.author.id)) {
                    //client.users.cache.get(`${msg.author.id}`).send("you are already done with this code...");
                }
                else {
                    if (msg.author.id === "774874294999580672") {
                        if (secretdata["Dan_Pixel1"] === 1) {
                            if (secretdata["Dan_Pixel2"] === 1) {
                                if (secretdata["Dan_Pixel3"] === 1) {
                                    //secretdata["Dan_Portal"] = 1;
                                    /*writeFileSync("C:/Users/Akash/Documents/DiscordBot/KeysandUnlocks.json", JSON.stringify(secretdata), err => {
                                        secretdata["Dan_Portal"] = secretdata["Dan_Portal"];
                                        if(err) console.error(err);
                                    })
                                    client.users.cache.get(`${msg.author.id}`).send("The pixel has been completed!! If you have completed this before or on your b'day then you have now earned your free 3 months of VIP Moderator");
                                }
                            }
                        }
                    }
                    else if (secretdata["Dan_Pixel1"] === 0) {
                        client.users.cache.get(`${msg.author.id}`).send("Sorry but you seem to not have all three parts yet");
                    }
                    //client.users.cache.get(`${msg.author.id}`).send("You found the B part, maybe this was the easiest...");
                    //gottenMsg12.add(msg.author.id);
                }
            }*/
        }
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

writeFileSync("C:/Users/Akash/Documents/DiscordBot/bot.myNCounterData.json", JSON.stringify(data), err => {
    data["Shiny_Ncounter"] = data["Shiny_Ncounter"];
    data["Dan_Ncounter"] = data["Dan_Ncounter"];
    data["OJ_Ncounter"] = data["OJ_Ncounter"];
    data["OG_Ncounter"] = data["OG_Ncounter"];
    if (err) console.error(err);
})






client.login(process.env.token);

