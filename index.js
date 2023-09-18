const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('CFMNTIOE Comminity is working!');
});

app.listen(3000, () => {
  console.log('\033[32m server started');
});
//=================================
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const disbut = require('discord-buttons')
disbut(client)

const distube = require('distube');
const ms = require('ms')
const fs = require('fs')
const lineReply = require("discord-inline-reply");
//==================================================================
const prefix = '!'; // Replace with your preferred command prefix
//==================================================================

//==================================================================
client.on('ready', () => {


  console.log(`[NAME] ${client.user.tag}`)
  console.log(`[ID] ${client.user.id}`)
  console.log(`[prefix] ${prefix}`)
  console.log(`[USERS] ${client.guilds.cache
    .reduce((a, b) => a + b.memberCount, 0)
    .toLocaleString()}`)
  console.log(`[GUILDS] ${client.guilds.cache.size.toLocaleString()}`)
  console.log(`[PING] ${client.ws.ping}`)
  console.log(`coding by bevvee`)
  client.user.setStatus("online")
  function msg() {
    let status = [` !menu `];
    let S = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[S], { type: 'STREAMING' })
  };
  setInterval(msg, 7000)
  //==================================================================
  const channel = client.channels.cache.get('1094329177483772044') // replace with the ID 
  const connection = channel.join()
  // connection.voice.setSelfMute(true) // metre le bot mute
  connection.voice.setSelfDeaf(true)
  // You can also listen for events on the connection object
  connection.on('error', console.error)
  //==================================================================

  //==================CREAT CHANNEL VOICE STAT===========================
  // Get the guild where you want to update the voice channel name
  const guild = client.guilds.cache.get('1094025597916815524');
  // Get the voice channel you want to update
  const voiceChannel = guild.channels.cache.get('1094719677319622726');
  const voice = guild.channels.cache.get('1094725298135765154');
  // Set the initial name of the voice channel with the current member count
  voiceChannel.setName(`Members : ${guild.memberCount}`);
  voice.setName(`Online : ${guild.members.cache.filter(member => member.presence.status === "online").size}`);
  // Set an interval to update the name of the voice channel every 5 minutes
  setInterval(() => {
    // Update the name of the voice channel with the current member count
    voiceChannel.setName(`Members: ${guild.memberCount}`);
    voice.setName(`Online : ${guild.members.cache.filter(member => member.presence.status === "online").size}`)
  }, 1 * 60 * 1000)

  //==================================================================
  //==================================================================
});//close on ready
//==================================================================
//==================================================================
//messag welcom
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === '👋┃welcome'); // Replace with the name of your welcome channel
  if (!channel) return;
  const embed = new MessageEmbed()

    .setTitle('Welcome to our server!')
    .setDescription(`Hello, ${member}! Welcome to our server:heart:.`)
    .setThumbnail(member.user.avatarURL({ dynamic: true }))
    .setColor('#0099ff') // Replace with your preferred color
    .setImage('https://i.imgur.com/ZDgirZI.png')
    .setTimestamp();
  channel.send(embed);// //fin msg welcom
  //==================================================================
  // // Set the role name to be assigned to new members
  const roleName = "👤・Unverified";
  // Find the role in the guild by name
  const role = member.guild.roles.cache.find(role => role.name === roleName);
  if (role) {
    // Assign the role to the new member
    member.roles.add(role).catch(console.error);
  }
  //==================================================================
  //==================================================================
});
//==================================================================

//==================================================================

// Set up the message event
client.on('message', message => {

  if (message.content.startsWith('!profile') || message.content.startsWith('!Profile') || message.content.startsWith('!PROFILE')) {
    const user = message.mentions.users.first() || message.author;
    const embed = new MessageEmbed()
      .setTitle(`Profile of ${user.username}`)
      .setThumbnail(user.avatarURL())
      .addField('Username', user.username)
      .addField('Discriminator', `#${user.discriminator}`)
      .addField('ID', user.id)
      .addField('Created at', user.createdAt)
      .setColor('#0099ff');
    message.channel.send(embed);
  }
  //==================================================================
  if (message.content.startsWith('!ping') || message.content.startsWith('!Ping') || message.content.startsWith('!PING')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Ping ${client.ws.ping}ms`)
      .setColor(0x2f3136)
    message.lineReplyNoMention(embed)
  }
  //==================================================================
  // Send the embed as a message in the channel where the command was issued
  if (message.content.startsWith('!menu') || message.content.startsWith('!Menu') || message.content.startsWith('!MENU')) {
    // Create a new MessageEmbed for the menu
    const menuEmbed = new MessageEmbed()
      .setAuthor(`COMMAND HELP`, client.user.avatarURL({ dynamic: true })).setThumbnail(client.user.avatarURL({ dynamic: true }))
      .setFooter(`Request by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setColor(0x2f3136)
      .setTimestamp()
      .addField(`${prefix}menu`, `show all bot command`, true)
      .addField(`${prefix}profile`, `Display your Discord profile information`, true)
      .addField(`${prefix}clear`, `clear all message in channel`, true)
      .addField(`${prefix}avatar`, `get  avatar `, true)
      .addField(`${prefix}form`, `easy form for register`, true)
      .addField(`${prefix}server`, `get serveur info (don't work in this time)`, true)
      .addField(`${prefix}ping`, `Test the bots response time`, true)
      .setColor('#0099ff');
    let button = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Invite Me')
      .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
    // Send the embed as a message in the channel where the command was issued
    message.channel.send(menuEmbed, { buttons: [button] });
  }
  //==================================================================
  if (message.content.startsWith('!clear') || message.content.startsWith('!Clear') || message.content.startsWith('!CLEAR')) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.reply('You do not have permission to use this command!');
    }

    if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
      return message.reply('I do not have permission to manage messages!');
    }

    message.channel.bulkDelete(100)
      .then(messages => message.reply(`Deleted ${messages.size} messages!`))
      .catch(console.error);
  }
  //==================================================================
  if (message.content.startsWith('!form') || message.content.startsWith('!Form') || message.content.startsWith('!FORM')) {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Form Questions')
      .setDescription('Please answer the following questions:')
      .addFields(
        { name: 'What is your Name?', value: 'Answer here:' },
        { name: 'What is your Option?', value: 'Answer here:' },
        { name: 'What is your Groupe?', value: 'Answer here:' }
      )
      .setTimestamp();

    message.channel.send(embed);

    const filter = m => m.author.id === message.author.id;
    const collector = message.channel.createMessageCollector(filter, { time: 15000, max: 3 });

    let answers = [];

    collector.on('collect', m => {
      answers.push(m.content);
    });

    collector.on('end', collected => {
      message.channel.send(`You answered: \n1. ${answers[0]} \n2. ${answers[1]} \n3. ${answers[2]}`);
    });
  }
  //==================================================================
  if (!message.content.startsWith('!avatar') || message.author.bot || message.content.slice(prefix.length).split(' ')[0] !== 'avatar') return;
  const user = message.mentions.users.first() || message.author;
  const avatarEmbed = new Discord.MessageEmbed()
    .setFooter(`Request by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
    .setColor('#00FF00')
    .setTitle(`${user.username}'s Avatar`)
    .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
  message.channel.send(avatarEmbed);
  //==================================================================
  //================================================================== 
  //==================================================================
});
//==================================================================

//==================================================================
client.login('MTA5NDIyMTQ5MTAzMTI0NDg1MQ.GlXD4d.zLbNtsyhhpnTq6jX8tUV4KibUDCP12OSFxftys'); // Replace with your actual bot token
  //==================================================================