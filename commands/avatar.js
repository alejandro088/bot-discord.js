const { RichEmbed } = require('discord.js');

exports.run = (client, message, args) => {
    

    if (!message.mentions.users.size < 1)
    // Send the user's avatar URL
    {
        let user = message.mentions.users.first(); // Mentioned user
        let image = user.displayAvatarURL; // Get image URL
        let embed = new RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`) // Set author
            .setColor("#0000000") // Set color (If you don't have ideas or preference, use RANDOM for random colors)
            .setImage(image); // Set image in embed
        return message.channel.send(embed); // Send embed
    }

    let user = message.author;
    let image = user.displayAvatarURL; // Get image URL
    let embed = new RichEmbed()
        .setAuthor(`${user.username}#${user.discriminator}`) // Set author
        .setColor("#0000000") // Set color (If you don't have ideas or preference, use RANDOM for random colors)
        .setImage(image); // Set image in embed
    return message.channel.send(embed); // Send embed

}

exports.help = {
    name: 'Avatar',
    desc: 'get image avatar of user',
    usage: 'avatar or avatar @nickname'
}