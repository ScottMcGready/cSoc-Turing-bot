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