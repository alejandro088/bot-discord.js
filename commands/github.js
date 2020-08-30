const config = require("../config.js");
const request = require('request');
const { Octokit } = require("@octokit/core");
const { RichEmbed } = require('discord.js');

exports.run = async (client, message, [...args]) => {
    
    const octokit = new Octokit({ auth: `${config.githubToken}` });
    let result = await octokit.pulls.list({
          'escuelavirtual',
          'backend',
        });

      let discordlist = await result
      
      //data = await JSON.parse(discordlist)
      let pullRequests = await discordlist

      const embed = await new RichEmbed()
                // Set the title of the field
                .setTitle('Pull Requests for Backend')
                // Set the color of the embed
                .setColor(0xFF0000)
      
            pullRequests.foreach(pull => {
                  embed.addField(pull.data.title);
                  embed.addField(pull.data.url);

            })
     
      
        message.channel.send(embed);
      
    

}

exports.help = {
    name: 'Github',
    desc: 'View Open Pull Requests',
    usage: `Github Pull Requests, example: ${config.prefix}github`
}
