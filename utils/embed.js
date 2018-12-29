const { RichEmbed } = require('discord.js');

embed = (title, description, options) => {
    
    let richembed = new RichEmbed()
    .setTitle(title)
    .setDescription(description);
    if(options.author)
        richembed.setAuthor(options.author);
    if(options.color)
        richembed.setColor(options.color);
    if(options.image)
        richembed.setImage(options.image);

    if(options.fields){
        options.fields.forEach((value, key, map) => {
            if(value){                
                richembed.addField(key, value);
            }
        });
    }

    return richembed;
};

module.exports = embed;