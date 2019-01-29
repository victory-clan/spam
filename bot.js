const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var prefix = "-";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "437236584329379841"; // ايدي السررفر
var channel = "539853412821630977";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('احبكم باكو   :heart: , احبكم باكو  :heart: , احبكم باكو  :heart')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|`ADMINISTRATOR`ليس لديك صلاحيات`');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
~~
Sarcasm Land. يرحب بكم :dove:
~~
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

‏نقدم لك دعوة لسموك الراقيَ .
‏لنحظى بجمال حضورك وتواجدك
•بتنـورونـا الجميع :wink:
•اي مشكله توآجهك ولا يهمك. عندك الاداره تفضل ونحل مشكلتك مع آي شخص بالسيرفر.:telephone_receiver:
•عندك فكره موضوع تفضل شآركنا فيه:jack_o_lantern::gift:
•واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
شرفنا يا عسل:wink: :kissing_heart:
 [https://discord.gg/h8RtRKM] 
joined info-selfie
Sarcasm Land.
الدعووة خاصة لك ياقلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
