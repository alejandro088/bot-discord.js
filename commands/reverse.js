exports.run = (client, message, args) => {
    var backway = args.join(" ").split("").reverse().join("");

		return message.channel.send(backway);
}