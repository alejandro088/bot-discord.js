const config = require("../config.js");
const request = require('request');
const { Octokit } = require("@octokit/core");
const { RichEmbed } = require('discord.js');

exports.run = async (client, message, [...args]) => {
    
    const octokit = new Octokit({ auth: `${config.githubToken}` });
    let result = await octokit.request('GET /projects/{project_id}', {
        project_id: 5110565,
        mediaType: {
          previews: [
            'inertia'
          ]
        }
      })

      let discordlist = await result
      
      //data = await JSON.parse(discordlist)
      let project = await discordlist
      await console.log(project)

      const embed = await new RichEmbed()
                // Set the title of the field
                .setTitle(project.data.name)
                // Set the color of the embed
                .setColor(0xFF0000)
                .setImage(project.data.creator.avatar_url);
    
     embed.addField(project.data.html_url);
      
    message.channel.send(embed);
      
    

}

exports.help = {
    name: 'Github',
    desc: 'View all projets',
    usage: `Github teams, example: ${config.prefix}github`
}
