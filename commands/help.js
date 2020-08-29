const { RichEmbed } = require('discord.js');
const config = require("../config.js");
const embed = require('../utils/embed');
const Enmap = require("enmap");

exports.run = (client, message, helpers) => {

    /*let embed = new RichEmbed()
        .setTitle('List Commands')
        .setDescription(`Show information about the bot commands\nFor more info of each command, type: ${config.prefix}help command`)
        .setAuthor('Arrow')
        .setColor('RED');

    helpers.forEach((value, key, map) => {
        if(value){
            
            let field = `\`Info: ${value.desc}\``;
            embed.addField(value.name, field);
        }
    });*/

    let fields = new Enmap();
    helpers.forEach((value, key, map) => {
        if(value){
            
            let field = `\`Info: ${value.desc}\``;
            fields.set(value.name, field);
        }
    });

    let richembed = embed(
        'List Commands',
        `Show information about the bot commands\nFor more info of each command, type: ${config.prefix}help command`,
        { author: 'Arrow',
          color: 'RED',
          fields: fields        
        }
        )

    return message.channel.send(richembed);


}
