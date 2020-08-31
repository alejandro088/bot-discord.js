const config = require("./config.js");
const request = require('request');
const { Octokit } = require("@octokit/rest");

//exports.run = async (client, message, [...args]) => {
const github = async function() {
    const octokit = new Octokit({ auth: `${config.githubToken}`, baseUrl: 'https://api.github.com' });
    //let result = await octokit.request('GET /repos/{owner}/{repo}/pulls', {
     //     owner: "escuelavirtual",
     //     repo: "backend",
     //     state: "all"
     //   });


        let result = await octokit.pulls.list({
            owner: "escuelavirtual",
            repo: "backend",
            state: "all"
          });

      //let discordlist = result
      
      //data = await JSON.parse(discordlist)
      const pullRequests = await result.data;
      console.log(pullRequests)

      let pulls = [];
       
      const p = await pullRequests.forEach(pull => {
                  pulls.push({title: pull.title, url: pull.url});                  

            });

     console.log(pulls);
    }
        
     github(); 
    



exports.help = {
    name: 'Github',
    desc: 'View Open Pull Requests',
    usage: `Github Pull Requests, example: ${config.prefix}github`
}
