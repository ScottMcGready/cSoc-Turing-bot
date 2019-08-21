require('dotenv').config();

const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Turing Bot Started');
});

client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (err) {
		console.error(err);
		message.reply('Oops something went wrong trying to do that!');
	}
});

client.login(process.env.CLIENT_TOKEN);


	// switch(command){
	// 	// Send new puzzle
	// 	case 'create':
	// 		// Check arguments to make sure they're legit
	// 		// Post to #challenge-time if all good
	// 	break;

	// 	// Commands list
	// 	case 'commands':
	// 	case 'help':
	// 		// Print a list of all commands
	// 		const helpEmbed = new Discord.RichEmbed()
	// 			.setColor('#0099ff')
	// 			.setAuthor('Turing Bot Command List')
	// 			.setDescription('List of leaderboard things')
	// 			.setThumbnail('https://cdn.discordapp.com/attachments/609726389213593608/612439329595195432/test.png')
	// 			.addField('!turing-create <name> <difficulty> <URL> <description>', 'Creates a new challenge. You *must* include the three paramters for it to work. Example !turing-create Squirrel easy http://someurl.com/withfile.zip "This challenge does x y z. find the flag"')
	// 			.addField('!turing-commands _or_ !turing-help', 'Print this help menu. How very inception.')
	// 			.addField('!turing-leaderboard', 'Shows the current leaderboard')
	// 			.addField('!turing-retire <name>', 'Retires a challenge. Can only be done by Admins & the challenge creator')
	// 			.addField('!turing-rules', 'Information on point scoring')
	// 			.addField('!turing-stats <username> _or_ !turing-profile <username>', 'Shows stats on a player if the <name> parameter is included. For example ``!turing-stats ThreadOverflow`` would show @ThreadOverflow\'s profile. ``!turing-stats`` without the paramter will show your own.')
	// 			// .addField('!turing-test', 'test')
	// 			.addField('!turing-verify <flag>', 'Verifies a flag. This should only be done by DMing the Turing bot directly. Has a cooldown (so no bruteforcing!)...')

	// 		// send to channel
	// 		message.channel.send(helpEmbed);
	// 	break;

	// 	// Show a global leaderboard
	// 	case 'leaderboard':
	// 		// get the top 10 list and lay them out as such
	// 		var lbtop10 = '`01.` <:hacker:613530432817856572> `100` Username';
	// 		// get the other players
	// 		var lbothers = 'players';
	// 		// main embed code
	// 		const leaderboardEmbed = new Discord.RichEmbed()
	// 			.setColor('#0099ff')
	// 			.setAuthor('cSOC Challenge Leaderboard', 'https://cdn.discordapp.com/attachments/609726389213593608/612439329595195432/test.png')
	// 			.setDescription('List of leaderboard things')
	// 			.setThumbnail('https://cdn.discordapp.com/attachments/609726389213593608/612439329595195432/test.png')
	// 			.addField(':trophy: Top 10 :trophy:', lbtop10)
	// 			.addField('Other players', lbothers)
	// 		// send to channel
	// 		message.channel.send(leaderboardEmbed);
	// 	break;

	// 	// Retire a challenge
	// 	case 'retire':
	// 		// Retire a challenge
	// 	break;

	// 	// Rules
	// 	case 'rules':

	// 	break;

	// 	// Show some stats about a user or the current user
	// 	case 'stats':
	// 	case 'profile':
			
	// 	break;

	// 	// A testing case to allow testing
	// 	case 'test':
			
	// 	break;

	// 	// Verify flag
	// 	case 'verify':
	// 		// Verify a submitted flag
	// 		// Give user points
	// 		// Update #challenge-time
	// 		// edit orignal challenge post to add new winner
	// 		const challengeTimeChannel = client.channels.get(process.env.CHANNEL_CHALLENGE_ID);
	// 		challengeTimeChannel.send('message to bot-testing only');
	// 	break;
	// }