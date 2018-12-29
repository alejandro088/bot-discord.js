/**
 * Send a user a link to their avatar
 */
var request = require('request');
var cheerio = require('cheerio');

// Import the discord.js module
const { Client, RichEmbed } = require('discord.js');

const Enmap = require("enmap");
const fs = require("fs");

// Create an instance of a Discord client
const client = new Client();
const config = require("./config.json");

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
	console.log('I am ready!');
	client.user.setActivity("Escriba !elo <username>");
});

client.commands = new Enmap();
helpers = new Enmap();

	fs.readdir("./commands/", (err, files) => {
		if (err) return console.error(err);
		files.forEach(async file => {
			if (!file.endsWith(".js")) return;
			let props = require(`./commands/${file}`);
			let commandName = file.split(".")[0];
			console.log(`Attempting to load command ${commandName}`);
			await client.commands.set(commandName, props);
			await helpers.set(commandName, props.help);
		});
	});


// Create an event listener for messages
client.on('message', message => {

	// Ignore all bots
	if (message.author.bot) return;

	// Ignore messages not starting with the prefix (in config.json)
	if (message.content.indexOf(config.prefix) !== 0) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	// If the message is "what is my avatar"
	//let user = message.mentions.users.first();

	// Grab the command data from the client.commands Enmap
	 
	const cmd = client.commands.get(command);
	if(command === 'help') return cmd.run(client, message, helpers);
	// If that command doesn't exist, silently exit and do nothing
	if (!cmd) return;

	// Run the command
	cmd.run(client, message, args);


});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(config.token);