module.exports = {
	name: 'help',
	description: 'example!',
	aliases: ['commands'],
	usage: 'how to use this command...',
	execute(message, args) {
		message.channel.send('text');
	},
};