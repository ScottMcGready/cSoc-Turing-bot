require('dotenv').config();
const Discord = require('discord.js');
const { prefix } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	// Arguments for later
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	switch(command){
		// Send new puzzle
		case 'create':
			// Check arguments to make sure they're legit
			// Post to #challenge-time if all good
			// 
		break;

		// Commands list
		case 'help':
			// Print a list of all commands
			message.channel.send('asdasd');
		break;

		// Show a global leaderboard
		case 'leaderboard':
			// get the top 10 list and lay them out as such
			var lbtop10 = '`01.` <:hacker:613530432817856572> `100` Username';
			// get the other players
			var lbothers = 'players';
			// main embed code
			const leaderboardEmbed = new Discord.RichEmbed()
				.setColor('#0099ff')
				.setAuthor('cSOC Challenge Leaderboard', 'https://cdn.discordapp.com/attachments/609726389213593608/612439329595195432/test.png')
				.setDescription('List of leaderboard things')
				.setThumbnail('https://cdn.discordapp.com/attachments/609726389213593608/612439329595195432/test.png')
				.addField(':trophy: Top 10 :trophy:', lbtop10)
				.addField('Other players', lbothers)
			// send to channel	
			message.channel.send(leaderboardEmbed);
		break;

		// Retire a challenge
		case 'retire':
			// Retire a challenge
		break;

		// Rules
		case 'rules':

		break;

		// Show some stats about a user or the current user
		case 'stats':
		case 'profile':
			
		break;

		// A testing case to allow testing
		case 'test':
			
		break;

		// Verify flag
		case 'verify':
			// Verify a submitted flag
			// Give user points
			// Update #challenge-time
			const challengeTimeChannel = client.channels.get(process.env.CHANNEL_CHALLENGE_ID);
			challengeTimeChannel.send('message to bot-testing only');
		break;

	}

});

client.login(process.env.CLIENT_TOKEN);