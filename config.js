require('dotenv').config();

module.exports = {
    prefix: process.env.PREFIX,
    token: process.env.TOKEN,
    weatherApiKey: process.env.WEATHER_API_KEY,
    githubToken: process.env.GITHUB_TOKEN,
    ownerID: process.env.OWNER_ID
 };
