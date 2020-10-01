const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('ready')
})

client.on('message', message => {

  if (message.content === `${prefix}perks`) {
    message.channel.send('TDA is coming up for open enrollment Perks!! Members will no threat to transmit HIV to you. We will not send personal Messages to your family. We will not address you but block you before we do. We are Poach Free within the server. <—- essentially we have pest control.   Additionally We Also Make Bots out of You, Extra family members cause why not?');
  }

  if (message.content === `${prefix}rand`) {
    message.channel.send('you:middle_finger:');
  }
  
  if (message.content === `${prefix}singasong`) {
    message.channel.send(':musical_note:Margaya Madarch*d LA LA. LA LALLA LA LA LAAA~~:musical_note:');
  }

})

client.login(process.emv.token);