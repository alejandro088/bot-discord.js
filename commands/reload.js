const config = require("../config.js");

exports.run = (client, message, args) => {

    if (message.author.id !== config.ownerID) return message.channel.send("⛔ **ACCESS DENIED**");

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {

        return message.channel.send(`Unable to reload: ${args[0]}.js`);
    }

    message.channel.send(`**Successfully reloaded:** ${args[0]}.js`);

}
