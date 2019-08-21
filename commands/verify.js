module.exports = {
	name: 'verify',
	description: 'example!',
	aliases: ['verify', 'flag', 'submit'],
	usage: 'how to use this command...',
	execute(message, args) {
		message.channel.send('text');
	},
};