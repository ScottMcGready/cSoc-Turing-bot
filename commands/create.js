module.exports = {
	name: 'create',
	description: 'example!',
	aliases: ['new'],
	usage: 'how to use this command...',
	execute(message, args) {
		message.channel.send('text');
	},
};