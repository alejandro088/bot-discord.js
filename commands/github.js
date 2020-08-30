const config = require("../config.js");
const { Octokit } = require("@octokit/core");
const { RichEmbed } = require('discord.js');

exports.run = async (client, message, [...args]) => {
    if (args[0] != 'pulls'){

        const embed = await new RichEmbed()
        // Set the title of the field
        .setTitle('Argument not found')
        // Set the color of the embed
        .setColor(0xFF0000);

        embed.addField("Try again, Arguments availables", "pulls [repo], example: pulls backend");

        return message.channel.send(embed);

    } else if (args[0] === 'pulls'){
        const octokit = new Octokit({ auth: `${config.githubToken}` });
        let result = await octokit.request('GET /repos/{owner}/{repo}/pulls', {
            owner: "escuelavirtual",
            repo: args[1]
            });

        //data = await JSON.parse(discordlist)
        const pullRequests = await result.data
        //console.log(pullRequests)

        if (pullRequests.length == 0) { return message.channel.send(`**Not found pull requests opens**`); }
        
        
     
        const embed = await new RichEmbed()
            // Set the title of the field
            .setTitle('Pull Requests')
            // Set the color of the embed
            .setColor(0xFF0000);

        let max = 12;
        let i = 0;

        await pullRequests.forEach(pull => {
            if (i < max) {
                embed.addField(pull.title, pull.html_url);
                i++;
            }
        })         
        message.channel.send(embed);     

    }

}

exports.help = {
    name: 'Github',
    desc: 'View Open Pull Requests',
    usage: `Github Pull Requests, example: ${config.prefix}github pulls backend`
}
