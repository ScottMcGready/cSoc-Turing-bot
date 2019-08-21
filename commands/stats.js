module.exports = {
	name: 'stats',
	description: 'example!',
	aliases: ['profile', 'user'],
	usage: 'how to use this command...',
	execute(message, args) {
		message.channel.send('text');
	},
};