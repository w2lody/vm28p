const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', async() => {
var server = "516248530797592577"; // ايدي السررفر
var channel = "516249540257513483";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network , #Vm,Memo , #Vm,Relo , #Venom , Network ,')
    },305);
})

client.login(process.env.BOT_TOKEN);
