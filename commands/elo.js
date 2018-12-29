const request = require('request');
const cheerio = require('cheerio');
const { RichEmbed } = require('discord.js');

exports.run = (client, message, args) => {
    request("https://chess24.com/es/profile/" + args[0], function (error, response, body) {
        if (error) {
            console.log("Error: " + error);
        }
        console.log("Status code: " + response.statusCode);

        if (response.statusCode === 410) {
            message.reply("Lo siento. El usuario ingresado no existe. Intente nuevamente.");
        }

        if (response.statusCode === 404) {
            message.reply("Lo siento. El usuario ingresado no existe. Intente nuevamente.");
        }

        if (response.statusCode === 200) {

            var $ = cheerio.load(body);

            var desc = [];
            var elo = [];

            $('.userRanking > dl').each(function (index) {

                if (index <= 2) {
                    desc[index] = $(this).find('dt').text().trim();
                    elo[index] = $(this).find('dd > span:nth-child(2)').text().trim();

                    //console.log("Elo: " + desc + ": " + elo);



                    //message.reply(desc + ": " + elo);
                }

            });


            const embed = new RichEmbed()
                // Set the title of the field
                .setTitle('Chess24 ELO de ' + args[0])
                // Set the color of the embed
                .setColor(0xFF0000)
                .setImage('https://assets.chess24.com/assets/ac7b480b67cf1d72155863422d519c99/images/retina/c24-logo.png');
                for(let i=0; i<desc.length; i++)
                    embed.addField(desc[i], elo[i]);
                

                
            // Send the embed to the same channel as the message
            message.channel.send(embed);

        }

    });
}


exports.help = {
    name: 'elo',
    desc: 'View stat elo chess24 of a player',
    usage: 'elo username'
}